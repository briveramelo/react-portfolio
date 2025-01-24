import os
import smtplib
import bleach
import logging
import time
from email_validator import validate_email, EmailNotValidError
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configure logging
logging.basicConfig(level=logging.ERROR)

# Environment variables for security
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")
MESSAGE_MAX_LENGTH = int(os.getenv("MESSAGE_MAX_LENGTH", 10000))
SUBJECT_MAX_LENGTH = int(os.getenv("SUBJECT_MAX_LENGTH", 100))

# Ensure required environment variables are set
if not EMAIL_PASSWORD:
    raise EnvironmentError("EMAIL_PASSWORD environment variable is missing.")
if not EMAIL_SENDER:
    raise EnvironmentError("EMAIL_SENDER environment variable is missing.")
if not EMAIL_RECEIVER:
    raise EnvironmentError("EMAIL_RECEIVER environment variable is missing.")


def validate_input(data, subject_max_length, message_max_length):
    try:
        valid_email = validate_email(data.get("email", "").strip(), check_deliverability=False).email
    except EmailNotValidError:
        return False, "Invalid email format", None

    subject = bleach.clean(data.get("subject", "").strip())
    message = bleach.clean(data.get("message", "").strip())

    if not (1 <= len(subject) <= subject_max_length):
        return False, f"Subject must be between 1 and {subject_max_length} characters", None

    if not (1 <= len(message) <= message_max_length):
        return False, f"Message must be between 1 and {message_max_length} characters", None

    sanitized_data = {
        "email": valid_email,
        "subject": subject,
        "message": message
    }

    return True, None, sanitized_data

def send_email(smtp_server, smtp_port, email_sender, email_password, to_email, subject, message):
    msg = MIMEMultipart()
    msg["From"] = email_sender
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(message, "plain"))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(email_sender, email_password)
        server.sendmail(email_sender, to_email, msg.as_string())
        server.quit()
        return True
    except Exception:
        logging.error("Error sending email", exc_info=True)
        return False

def send_email_with_retry(smtp_server, smtp_port, email_sender, email_password, to_email, subject, message, retries=2):
    for attempt in range(retries):
        if send_email(smtp_server, smtp_port, email_sender, email_password, to_email, subject, message):
            return True
        time.sleep(2 ** attempt)  # Exponential backoff
    return False

def contact_form_handler(request):
    try:
        request_json = request.get_json()
        if not request_json:
            return {"error": "Invalid request"}, 400

        # Validate and sanitize input
        is_valid, error_message, sanitized_data = validate_input(request_json, SUBJECT_MAX_LENGTH, MESSAGE_MAX_LENGTH)
        if not is_valid:
            return {"error": error_message}, 400

        # Send email
        success = send_email_with_retry(
            SMTP_SERVER,
            SMTP_PORT,
            EMAIL_SENDER,
            EMAIL_PASSWORD,
            EMAIL_RECEIVER,
            sanitized_data["subject"],
            f"From: {sanitized_data['email']}\n\n{sanitized_data['message']}"
        )

        if success:
            return {"message": "Email sent successfully"}, 200
        else:
            return {"error": "Failed to send email"}, 500

    except Exception:
        logging.error("Unexpected error occurred", exc_info=True)
        return {"error": "An unexpected server error occurred. Please try again later."}, 500

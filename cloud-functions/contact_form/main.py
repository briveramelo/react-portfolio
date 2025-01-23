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
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.environ.get("EMAIL_PASSWORD")  # Stored in GCP secrets
MESSAGE_MAX_LENGTH = int(os.getenv("MESSAGE_MAX_LENGTH", 10000))
SUBJECT_MAX_LENGTH = int(os.getenv("SUBJECT_MAX_LENGTH", 100))

# Ensure required environment variables are set
if not EMAIL_PASS:
    raise EnvironmentError("EMAIL_PASSWORD environment variable is missing.")
if not EMAIL_USER:
    raise EnvironmentError("EMAIL_USER environment variable is missing.")


# Input validation function
def validate_input(data):
    try:
        valid_email = validate_email(data.get("email", "").strip(), check_deliverability=False).email
    except EmailNotValidError:
        return False, "Invalid email format", None

    subject = bleach.clean(data.get("subject", "").strip())
    message = bleach.clean(data.get("message", "").strip())

    if not (1 <= len(subject) <= SUBJECT_MAX_LENGTH):
        return False, f"Subject must be between 1 and {SUBJECT_MAX_LENGTH} characters", None

    if not (1 <= len(message) <= MESSAGE_MAX_LENGTH):
        return False, f"Message must be between 1 and {MESSAGE_MAX_LENGTH} characters", None

    sanitized_data = {
        "email": valid_email,
        "subject": subject,
        "message": message
    }

    return True, None, sanitized_data

def send_email(to_email, subject, message):
    msg = MIMEMultipart()
    msg["From"] = EMAIL_USER
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(message, "plain"))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.sendmail(EMAIL_USER, to_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        logging.error("Error sending email", exc_info=True)
        return False

def send_email_with_retry(to_email, subject, message, retries=2):
    for attempt in range(retries):
        if send_email(to_email, subject, message):
            return True
        time.sleep(2 ** attempt)  # Exponential backoff
    return False

def contact_form_handler(request):
    try:
        request_json = request.get_json()
        if not request_json:
            return {"error": "Invalid request"}, 400

        # Validate and sanitize input
        is_valid, error_message, sanitized_data = validate_input(request_json)
        if not is_valid:
            return {"error": error_message}, 400

        # Send email
        success = send_email_with_retry(
            "brandon@riveramelo.com",
            sanitized_data["subject"],
            f"From: {sanitized_data['email']}\n\n{sanitized_data['message']}",
        )

        if success:
            return {"message": "Email sent successfully"}, 200
        else:
            return {"error": "Failed to send email"}, 500

    except Exception as e:
        logging.error("Unexpected error occurred", exc_info=True)
        return {"error": "An unexpected server error occurred. Please try again later."}, 500

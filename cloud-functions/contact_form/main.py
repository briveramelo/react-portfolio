import os
import smtplib
import bleach
import logging
import time
from email_validator import validate_email, EmailNotValidError
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from firebase_functions import https_fn
from firebase_admin import initialize_app

# Initialize Firebase Admin SDK (required for Firebase functions)
initialize_app()

# Configure logging
logging.basicConfig(level=logging.ERROR)

# Environment variables for security
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")
SUBJECT = os.getenv("SUBJECT")
MESSAGE_MAX_LENGTH = int(os.getenv("MESSAGE_MAX_LENGTH", 10000))

if not EMAIL_PASSWORD or not EMAIL_SENDER or not EMAIL_RECEIVER:
    raise EnvironmentError("Missing required email configuration environment variables.")

# Function to validate and sanitize input
def validate_input(data: dict) -> tuple[bool, str | None, dict | None]:
    try:
        valid_email = validate_email(data.get("email", "").strip(), check_deliverability=False).email
    except EmailNotValidError:
        return False, "Invalid email format", None

    message = bleach.clean(data.get("message", "").strip())

    if not (1 <= len(message) <= MESSAGE_MAX_LENGTH):
        return False, f"Message must be between 1 and {MESSAGE_MAX_LENGTH} characters.", None

    return True, None, {"email": valid_email, "message": message}

# Function to send the email
def send_email(message: str, sender_email: str) -> bool:
    msg = MIMEMultipart()
    msg["From"] = EMAIL_SENDER
    msg["To"] = EMAIL_RECEIVER
    msg["Subject"] = SUBJECT
    msg.attach(MIMEText(f"From: {sender_email}\n\n{message}", "plain"))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        server.sendmail(EMAIL_SENDER, EMAIL_RECEIVER, msg.as_string())
        server.quit()
        return True
    except Exception:
        logging.error("Error sending email", exc_info=True)
        return False

@https_fn.on_call()
def contact_form_handler(req: https_fn.CallableRequest) -> dict:
    try:
        data = req.data

        # Validate and sanitize input
        is_valid, error_message, sanitized_data = validate_input(data)
        if not is_valid:
            logging.error(f"Invalid args found: {error_message}")
            raise https_fn.HttpsError("invalid-argument", error_message)

        success = send_email(sanitized_data["message"], sanitized_data["email"])

        if success:
            return {"message": "Email sent successfully."}
        else:
            raise https_fn.HttpsError("internal", "Failed to send email.")
    except Exception:
        logging.error("Unexpected error occurred", exc_info=True)
        raise https_fn.HttpsError("internal", "An unexpected error occurred. Please try again.")

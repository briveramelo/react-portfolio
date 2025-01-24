#!/bin/bash

# Load environment variables from .env file
set -a  # Automatically export all variables
source ./cloud-functions/contact_form/.env
set +a

# Deploy the Cloud Function
gcloud functions deploy contactFormHandler \
    --project "$GCP_PROJECT_ID" \
    --source ./cloud-functions/contact_form \
    --runtime python310 \
    --trigger-http \
    --allow-unauthenticated \
    --entry-point contact_form_handler \
    --set-env-vars "SMTP_SERVER=${SMTP_SERVER},SMTP_PORT=${SMTP_PORT},EMAIL_RECEIVER=${EMAIL_RECEIVER},EMAIL_SENDER=${EMAIL_SENDER},EMAIL_PASSWORD=${EMAIL_PASSWORD},MESSAGE_MAX_LENGTH=${MESSAGE_MAX_LENGTH},SUBJECT_MAX_LENGTH=${SUBJECT_MAX_LENGTH}" \
    --region us-central1 \
    --verbosity=debug

echo "Deployment complete."

import React, { forwardRef, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { ContactForm } from "./Contact/ContactForm";
import { ConfirmationMessage } from "./Contact/ConfirmationMessage";
import { ConfettiEffect } from "./Contact/ConfettiEffect";
import {
  FormData,
  validateContactForm,
  isFormValid,
} from "./Contact/contactFormUtils";
import { cp } from "../../utils/utils";
import { Footer } from "../components/Footer";
import { firebaseApp } from "../../firebaseConfig";
import { getFunctions, httpsCallable } from "firebase/functions";

interface ContactSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [formData, setFormData] = useState<FormData>({
      email: "",
      message: "",
    });
    const [errors, setErrors] = useState<FormData>({
      email: "",
      message: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const heartTriggerRef = React.useRef<HTMLButtonElement>(null);

    const handleChange = (field: keyof FormData, value: string) => {
      setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const validationErrors = validateContactForm(formData);
      setErrors(validationErrors);

      if (!isFormValid(validationErrors)) return;

      setIsSending(true);

      try {
        const functions = getFunctions(firebaseApp);
        const sendContactForm = httpsCallable<FormData, { message: string }>(
          functions,
          "contactFormHandler",
        );
        const response = await sendContactForm(formData);

        if (response.data?.message) {
          setErrorMessage(null);
          setFormSubmitted(true);
          setFormData({ email: "", message: "" });
        } else {
          setErrorMessage("Unexpected response from the server.");
        }
      } catch (error: any) {
        console.error("Form submission error:", error);
        setErrorMessage(
          error.message || "An unexpected error occurred. Please try again.",
        );
      } finally {
        setIsSending(false);
      }
    };

    return (
      <Box
        component="section"
        id={id}
        sx={{
          backgroundColor: backgroundColor,
          color: textColor,
          pt: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Confetti Effect */}
        <ConfettiEffect trigger={formSubmitted} />

        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mb: formSubmitted ? 44 : 8,
          }}
        >
          {/* Section Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontStyle: !formSubmitted ? "normal" : "italic",
              color: textColor,
            }}
          >
            {!formSubmitted ? "Your Move" : "Nice Move"}
          </Typography>
          <Typography variant="h6" sx={{ color: textColor }}>
            What’s your vision for scaling health impact?
          </Typography>

          {/* Render the Form or Confirmation */}
          {formSubmitted ? (
            <ConfirmationMessage />
          ) : (
            <ContactForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isSending={isSending}
              errorMessage={errorMessage}
              heartTriggerRef={heartTriggerRef}
            />
          )}
        </Container>

        {/* Footer Component */}
        <Footer
          backgroundColor={cp("background.default")}
          textColor={cp("text.primary")}
          heartTriggerRef={heartTriggerRef}
        />
      </Box>
    );
  },
);

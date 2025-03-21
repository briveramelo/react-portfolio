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
import { Footer } from "./Contact/Footer/Footer.tsx";
import { firebaseApp } from "../../firebaseConfig";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useCustomPalette } from "../../theme/theme.ts";

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
    const { background, text } = useCustomPalette();

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
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
            mb: formSubmitted ? 38 : 8,
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
          <Box sx={{ display: formSubmitted ? "none" : "visible" }}>
            <Typography variant="h6" sx={{ color: textColor }}>
              You don't have to say hi, and there's no newsletter, but you will
              unlock a small gift...
            </Typography>
          </Box>

          {/* Render the Form or Confirmation */}
          <Box
            width="sm"
            sx={{
              mx: "auto",
              maxWidth: "sm",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {formSubmitted ? (
              <ConfirmationMessage />
            ) : (
              <ContactForm
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isSending={isSending}
                errorMessage={errorMessage}
                heartTriggerRef={heartTriggerRef}
              />
            )}
          </Box>
        </Container>

        {/* Footer Component */}
        <Footer
          backgroundColor={background.default}
          textColor={text.primary}
          heartTriggerRef={heartTriggerRef}
        />
      </Box>
    );
  },
);

import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";
const Confetti = React.lazy(() => import("react-confetti"));
import { useWindowSize } from "react-use";
import { Footer } from "../components/Footer";
import { cp } from "../../utils/utils";
import { useFormTracking } from "../../tracking/useFormTracking";
import { useHoverTracking } from "../../tracking/useHoverTracking";
import { firebaseApp, firebaseConfig } from "../../firebaseConfig";
import { getFunctions, httpsCallable } from "firebase/functions";

interface ContactSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}
interface FormData {
  email: string;
  subject: string;
  message: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const formID = "contact-form";
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    const [formData, setFormData] = useState<FormData>({
      email: "",
      subject: "",
      message: "",
    });
    const [errors, setErrors] = useState<FormData>({
      email: "",
      subject: "",
      message: "",
    });

    const confettiRef = useRef<HTMLCanvasElement>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { width, height } = useWindowSize();
    const heartTriggerRef = useRef<HTMLButtonElement | null>(null);

    const { trackFieldFocus, trackFieldBlur, trackFormSubmit } =
      useFormTracking(formID);
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

    const validateForm = () => {
      let newErrors: FormData = { email: "", subject: "", message: "" };

      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      }

      // Subject validation
      if (!formData.subject.trim()) {
        newErrors.subject = "Subject is required.";
      } else if (formData.subject.length < 1 || formData.subject.length > 100) {
        newErrors.subject = "Subject must be between 1 and 100 characters.";
      }

      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = "Message is required.";
      } else if (
        formData.message.length < 1 ||
        formData.message.length > 10000
      ) {
        newErrors.message = "Message must be between 1 and 10,000 characters.";
      }

      setErrors(newErrors);
      return Object.values(newErrors).every((value) => value === "");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!validateForm()) return;

      setIsSending(true);
      trackFormSubmit(formID);

      try {
        const { getFunctions, httpsCallable } = await import(
          "firebase/functions"
        );
        const functions = getFunctions(firebaseApp);
        const sendContactForm = httpsCallable<FormData, { message: string }>(
          functions,
          "contactFormHandler",
        );
        const response = await sendContactForm(formData);

        if (response.data?.message) {
          setErrorMessage(null);
          setFormSubmitted(true);
          setFormData({ email: "", subject: "", message: "" });
        } else {
          setErrorMessage("Unexpected response from the server.");
        }
      } catch (error: any) {
        console.error("Form submission error:", error);
        const errorMessage =
          error.message || "An unexpected error occurred. Please try again.";
        setErrorMessage(errorMessage);
      } finally {
        setIsSending(false);
      }
    };

    useEffect(() => {
      if (isSending) {
        import("react-confetti");
      }
    }, [isSending]);

    const inputStyles = {
      backgroundColor: cp("background.paper"),
      color: cp("text.paper"),
      borderRadius: "8px",
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
      },
      "& .MuiInputLabel-root": {
        color: cp("text.paper"),
      },
      "& .MuiInputLabel-shrink": {
        color: cp("text.paper"),
      },
    };

    const formContent = (
      <Box
        sx={{
          backgroundColor: cp("background.paper"),
          color: cp("text.paper"),
          borderRadius: "16px",
          p: 4,
        }}
        className="subtle-shadow"
      >
        <form
          onSubmit={handleSubmit}
          id={formID}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
            required
            label="Your email"
            type="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            id="contact-email"
            onFocus={() => trackFieldFocus("email")}
            onBlur={() => trackFieldBlur("email")}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            fullWidth
            InputProps={{
              inputProps: {
                style: {
                  color: cp("text.paper"),
                },
              },
            }}
            sx={inputStyles}
          />
          <TextField
            required
            label="Message"
            variant="outlined"
            error={!!errors.message}
            helperText={errors.message}
            id="contact-message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            onFocus={() => trackFieldFocus("message")}
            onBlur={() => trackFieldBlur("message")}
            fullWidth
            InputProps={{
              inputComponent: "textarea",
              inputProps: {
                style: {
                  resize: "vertical",
                  minHeight: "140px",
                  padding: "16px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  color: cp("text.paper"),
                },
              },
            }}
            sx={{
              ...inputStyles,
              "& textarea": {
                marginTop: "12px",
              },
            }}
          />

          <Button
            id="contact_send"
            onMouseEnter={trackMouseEnter}
            onMouseLeave={trackMouseLeave}
            ref={heartTriggerRef}
            type="submit"
            variant="contained"
            sx={{
              zIndex: 1,
              alignSelf: "center",
              px: 4,
              backgroundColor: "orange",
              color: "black",
              "&:hover": { transform: "scale(1.1) !important" },
            }}
            className="pop-shadow"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </Button>
        </form>

        <Box
          sx={{
            mt: 3,
            mb: -1,
            py: 0,
            width: "100%",
            backgroundColor: cp("background.textError"),
            position: "relative",
            borderRadius: "8px",
            display: errorMessage ? "" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            severity="error"
            sx={{
              position: "absolute",
              left: "-8px",
              top: "-8px",
              backgroundColor: "transparent",
            }}
          />
          <Typography
            sx={{
              position: "relative",
              display: "inline-block",
              color: cp("text.paper"),
              py: 0.5,
              px: 5,
            }}
            variant="body1"
          >
            {errorMessage}
          </Typography>
        </Box>
      </Box>
    );
    const confirmationContent = (
      <Box
        sx={{
          mt: 4,
          py: 3,
          backgroundColor: cp("background.textSuccess"),
          display: "flex",
          alignItems: "center",
          flex: 1, // Takes full available width
          flexDirection: "column",
          textAlign: "center", // Centers text inside
          position: "relative",
          borderRadius: "8px",
        }}
      >
        <Alert
          severity="success"
          sx={{
            backgroundColor: "inherit",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: cp("text.paper") }}
        >
          Mission Success 🎉
        </Typography>
        <Typography variant="body1" sx={{ color: cp("text.paper") }}>
          Your message has been sent. Thanks for reaching out!
        </Typography>
      </Box>
    );

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
          position: "relative", // Enables Confetti to position within this context
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Confetti Effect */}
        {formSubmitted && (
          <Box
            sx={{
              position: "absolute", // Confetti is positioned relative to the ContactSection
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <Confetti
              ref={confettiRef}
              width={width}
              height={height}
              confettiSource={{
                x: width / 2,
                y: height,
                w: 0,
                h: 0,
              }}
              numberOfPieces={300}
              recycle={false}
              initialVelocityX={{ min: -10, max: 10 }}
              initialVelocityY={{ min: -30, max: -20 }}
              tweenDuration={5000}
              gravity={0.2}
              friction={0.98}
            />
          </Box>
        )}

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
          <Typography
            variant="h6"
            sx={{
              color: textColor,
            }}
          >
            {"What’s your vision for scaling health impact?"}
          </Typography>

          {/* Form or Confirmation Message */}
          <Box sx={{ display: formSubmitted ? "none" : "" }}>{formContent}</Box>
          <Box sx={{ display: formSubmitted ? "" : "none" }}>
            {confirmationContent}
          </Box>
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

import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Footer } from "../../components/Footer";
import { cp } from "../../utils/utils";

interface ContactSectionProps {
  backgroundColor: string;
  textColor: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  backgroundColor,
  textColor,
}) => {
  const confettiRef = useRef<HTMLCanvasElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { width, height } = useWindowSize();
  const heartRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (heartRef?.current) {
      heartRef.current = null;
    }

    // TODO: Add your API logic here
  };

  return (
    <Box
      component="section"
      id="contact"
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
          mb: formSubmitted ? 48 : 12,
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
          {"What's your vision for a healthier world at scale?"}
        </Typography>

        {/* Form or Confirmation Message */}
        {!formSubmitted ? (
          <Box
            sx={{
              backgroundColor: cp("background.paper"),
              borderRadius: "16px",
              p: 4,
              "&:hover": { transform: "scale(1.02) !important" },
            }}
            className="pop-shadow"
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: cp("background.paper"),
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                required
                label="Subject"
                type="text"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: cp("background.paper"),
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                required
                label="Message"
                variant="outlined"
                fullWidth
                InputProps={{
                  inputComponent: "textarea",
                  inputProps: {
                    style: {
                      resize: "vertical",
                      minHeight: "100px",
                      padding: "16px",
                      fontFamily: "inherit",
                      fontSize: "16px",
                    },
                  },
                }}
                sx={{
                  backgroundColor: cp("background.paper"),
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiInputLabel-root": {
                    transform: "translate(14px, 14px) scale(1)",
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                  },
                  "& textarea": {
                    marginTop: "12px",
                  },
                }}
              />

              <Button
                ref={heartRef}
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  alignSelf: "center",
                  px: 4,
                  "&:hover": { transform: "scale(1.1) !important" },
                }}
                className="pop-shadow"
              >
                Send
              </Button>
            </form>
          </Box>
        ) : (
          <Alert
            severity="success"
            sx={{ mt: 4, backgroundColor: cp("background.paper") }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: cp("text.paper") }}
            >
              Mission Success 🎉
            </Typography>
            <Typography variant="body1" sx={{ color: cp("text.paper") }}>
              Your message has been sent. Thanks for reaching out!
            </Typography>
          </Alert>
        )}
      </Container>

      {/* Footer Component */}
      <Footer
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
        heartRef={heartRef}
      />
    </Box>
  );
};

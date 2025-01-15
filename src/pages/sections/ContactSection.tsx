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

export function ContactSection({ backgroundColor, textColor }) {
  const confettiRef = useRef<HTMLCanvasElement>(null!);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { width, height } = useWindowSize();
  const heartRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (heartRef?.current) {
      heartRef.current = null;
    }

    // todo: Add your API logic here
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
          mb: formSubmitted ? 48 : 24,
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

        {/* Form or Confirmation Message */}
        {!formSubmitted ? (
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
                backgroundColor: "background.paper",
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
                backgroundColor: "background.paper",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <TextField
              required
              label="Message"
              type="text"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
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
              }}
              className="pop-shadow"
            >
              Send
            </Button>
          </form>
        ) : (
          <Alert
            severity="success"
            sx={{ mt: 4, backgroundColor: "background.paper" }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "text.paper" }}
            >
              Mission Success!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.paper" }}>
              Your message has been sent. Together, let's heal the world with
              digital technology!
            </Typography>
          </Alert>
        )}
      </Container>

      {/* Footer Component */}
      <Footer
        backgroundColor={"background.default"}
        textColor={"text.primary"}
        heartRef={heartRef}
      />
    </Box>
  );
}

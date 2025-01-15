import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material";

export function ContactSection({ backgroundColor, textColor, heartRef }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (heartRef?.current) {
      heartRef.current = null;
    }
    
    //todo: api logic
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        py: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: formSubmitted ? 38 : 14,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
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
    </Box>
  );
}

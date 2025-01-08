import React from "react";
import { Container, Typography, Box } from "@mui/material";

export function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: "background.primary",
        py: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            color: "text.primary",
          }}
        >
          Your Move
        </Typography>

        {/* Description and Email */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "text.primary",
          }}
        >
          No smoke bombs here - just sharp solutions.
          <br />
          <br />
            <Typography
                component="a"
                href="mailto:hi@riveramelo.com?subject=Introduction"
                sx={{
                    color: "hyperlink.primary",
                    textDecoration: "underline",
                }}
            >
                hi@riveramelo.com
            </Typography>
        </Typography>
      </Container>
    </Box>
  );
}

import React from "react";
import { Container, Typography, Box, Avatar, Grid } from "@mui/material";

export function Hero() {
  return (
    <Box
      component="section"
      id="brandon"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        color: "text.secondary",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          my: 8,
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
            }}
          >
            Brandon
            <br />
            Rivera-Melo
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              mt: 2,
              color: "text.primary",
              maxWidth: "600px",
            }}
          >
            Healing through playful design
            <br />
            <i>and science</i>
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "block",
          }}
        >
          <Avatar
            src="/src/assets/people/brandon.jpg"
            alt="Picture of Brandon"
            sx={{
              width: 400,
              height: 600,
              borderRadius: "20px",
              border: "8px solid",
              borderColor: "background.paper",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

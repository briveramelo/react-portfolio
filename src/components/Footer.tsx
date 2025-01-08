import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { BeatingHeart } from "./BeatingHeart";
import { SteamingCoffee } from "./SteamingCoffee";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.dark", // Using theme's dark background
        color: "text.secondary",
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column", // Stack everything vertically for centering
          alignItems: "center",
          justifyContent: "center", // Centers content horizontally
          gap: 2,
          textAlign: "center", // Ensures text alignment is centered
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row", // Align icons and text in a row
            gap: 0,
          }}
        >
          <Typography variant="body1" sx={{ mr: 1, color: "text.primary" }}>
            Made with
          </Typography>
          <BeatingHeart />
          <Typography
            variant="body1"
            sx={{ ml: 1, mr: 2, color: "text.primary" }}
          >
            and
          </Typography>
          <SteamingCoffee />
        </Box>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          © {new Date().getFullYear()} Brandon Rivera-Melo
        </Typography>
      </Container>
    </Box>
  );
}

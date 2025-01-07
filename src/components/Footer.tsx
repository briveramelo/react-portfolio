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
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 1, md: 0 } }}>
            Made with
          </Typography>
          <BeatingHeart />
          <Typography variant="body2" sx={{ ml: 1, mr: 1 }}>
            and
          </Typography>
          <SteamingCoffee />
        </Box>
        <Typography variant="body2">
          © {new Date().getFullYear()} Brandon Rivera-Melo
        </Typography>
      </Container>
    </Box>
  );
}

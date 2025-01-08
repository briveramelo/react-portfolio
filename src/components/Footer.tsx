import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { BeatingHeart } from "./BeatingHeart";
import { SteamingCoffee } from "./SteamingCoffee";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
        color: "text.secondary",
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
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

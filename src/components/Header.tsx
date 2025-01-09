import React, { useState, useContext } from "react";
import {AppBar, Toolbar, IconButton, Button, Box, useTheme} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { ThemeContext } from "../ThemeContext";
import { themeImages } from "../theme";

export function Header() {
  const navigationLinks = [
    { href: "#brandon", label: "Home" },
    { href: "#casestudies", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#recent", label: "Recent" },
    { href: "#contact", label: "Contact" },
  ];
  const { setMode } = useContext(ThemeContext);
  const theme = useTheme();
  const palette = theme.palette;

  return (
    <AppBar
      position="fixed"
      sx={{
        position: "sticky",
        top: 0,
        background: palette.background.paper, // TODO: make dynamic
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 9999, //force top
        overflow: "hidden", // ensure proper clipping
      }}
    >
      {/* Header Toolbar */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "md",
          margin: "0 auto",
          width: "100%",
          padding: "0 16px",
        }}
      >
        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navigationLinks.map((link) => (
            <Button
              key={link.href}
              color="inherit"
              href={link.href}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "rgba(0, 0, 0, 0.8)", // TODO: make dynamic
                "&:hover": { opacity: 0.8 },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* LinkedIn Icon */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/briveramelo"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "rgba(0, 0, 0, 0.8)", // TODO: make dynamic
            "&:hover": { opacity: 0.8 },
          }}
        >
          <LinkedIn />
        </IconButton>

        {/* Theme Switcher */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {themeImages.map((theme) => (
            <Button
              key={theme.name}
              onClick={() => setMode(theme.name)}
              sx={{ minWidth: "auto", padding: 0 }}
            >
              <img
                src={theme.src}
                alt={theme.name}
                style={{ height: "24px" }}
              />
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

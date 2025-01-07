import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";

export function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.dark", // Use theme background
        color: "text.primary",
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            href="/"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#casestudies"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Case Studies
          </Button>
          <Button
            color="inherit"
            href="#testimonials"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Testimonials
          </Button>
          <Button
            color="inherit"
            href="#projects"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* LinkedIn Icon */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/briveramelo"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

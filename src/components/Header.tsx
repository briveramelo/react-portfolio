import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../ThemeContext";
import {isColorDark} from "../utils/utils";

export function Header() {
  const navigationLinks = [
    { href: "#brandon", label: "Home" },
    { href: "#work", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#recent", label: "Recent" },
    { href: "#contact", label: "Contact" },
  ];
  const [colors, setColors] = useState({
    header: "background.paper",
    text: "text.paper",
  });
  const { mode } = useContext(ThemeContext);
  const [isBackgroundDark, setIsBackgroundDark] = useState<boolean>(false)

  // header acts like a chameleon to match the colors of the section behind
  const updateHeaderColors = () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const sections = Array.from(document.querySelectorAll("section"));

    const activeSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= headerHeight && rect.bottom > headerHeight;
    });

    if (activeSection) {
      const styles = window.getComputedStyle(activeSection);
        const isDark = isColorDark(styles.backgroundColor);
        setIsBackgroundDark(isDark);
      setColors({
        header: styles.backgroundColor,
        text: styles.color,
      });
    }
  };

  // Update header on scroll
  useEffect(() => {
    window.addEventListener("scroll", updateHeaderColors);
    return () => window.removeEventListener("scroll", updateHeaderColors);
  }, []);

  // Update header when theme changes
  useEffect(() => {
    updateHeaderColors();
  }, [mode]);

  return (
    <Box
      component="header"
      position="fixed"
      sx={{
        position: "sticky",
        top: 0,
        background: colors.header,
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
                color: colors.text,
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
            color: colors.text,
            "&:hover": { opacity: 0.8 },
          }}
        >
          <LinkedIn />
        </IconButton>

        <ThemeSwitcher isBackgroundDark={isBackgroundDark} />
      </Toolbar>
    </Box>
  );
}

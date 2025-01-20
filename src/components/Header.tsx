import React, { useContext, useEffect, useState, useRef } from "react";
import { Toolbar, IconButton, Button, Box } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../ThemeContext";
import { cp, isColorDark } from "../utils/utils";

interface HeaderProps {
  sectionRefs: React.RefObject<HTMLElement>[];
}

export function Header({ sectionRefs }: HeaderProps) {
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#recent", label: "Recent" },
    { href: "#contact", label: "Contact" },
  ];

  const headerRef = useRef<HTMLElement | null>(null);
  const [colors, setColors] = useState({
    header: cp("background.paper"),
    text: cp("text.paper"),
  });
  const { mode } = useContext(ThemeContext);
  const [isBackgroundDark, setIsBackgroundDark] = useState<boolean>(false);

  const handleNavClick = (sectionId: string) => {
    const targetSection = sectionRefs.find(
      (ref) => ref.current?.id === sectionId,
    );
    if (targetSection?.current) {
      targetSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Header adapts to match section colors
  const updateHeaderColors = () => {
    if (!headerRef.current) return;
    const headerHeight = headerRef.current.offsetHeight;

    const activeSection = sectionRefs.find((sectionRef) => {
      const section = sectionRef.current;
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= headerHeight && rect.bottom > headerHeight;
    });

    if (activeSection?.current) {
      const styles = window.getComputedStyle(activeSection.current);
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
      ref={headerRef}
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
              onClick={(e) => {
                e.preventDefault();
                const linkId = link.href.replace("#", "");
                handleNavClick(linkId);
              }}
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

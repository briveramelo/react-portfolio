import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { LinkedIn, Menu } from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { ThemeContext } from "../../ThemeContext.tsx";
import { isColorDark } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface HeaderProps {
  sectionRefs: React.RefObject<HTMLElement>[];
  defaultBackgroundColor: string;
  defaultTextColor: string;
  defaultIsBackgroundDark: boolean;
}

export function Header({
  sectionRefs,
  defaultBackgroundColor,
  defaultTextColor,
  defaultIsBackgroundDark,
}: HeaderProps) {
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#recent", label: "Recent" },
    { href: "#contact", label: "Contact" },
  ];
  const navHoverTrackers = navigationLinks.map((nav) => useHoverTracking());
  const linkedinHover = useHoverTracking();

  const headerRef = useRef<HTMLElement | null>(null);
  const [colors, setColors] = useState({
    header: defaultBackgroundColor,
    text: defaultTextColor,
  });
  const { mode } = useContext(ThemeContext);
  const [isBackgroundDark, setIsBackgroundDark] = useState<boolean>(
    defaultIsBackgroundDark,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const linkId = href.replace("#", "");
    const targetSection = sectionRefs.find((ref) => ref.current?.id === linkId);
    if (targetSection?.current) {
      targetSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (window.location.hash === href) return;

      window.history.pushState(null, "", href);
    }
    setDrawerOpen(false);
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
      id="header"
      position="fixed"
      sx={{
        position: "sticky",
        top: 0,
        background: colors.header,
        zIndex: 3, //force top
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
        {/* Hamburger menu for mobile */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: colors.text }}
          >
            <Menu />
          </IconButton>
        </Box>

        {/* Desktop navigation links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navigationLinks.map((link, index) => {
            const { trackMouseEnter, trackMouseLeave } =
              navHoverTrackers[index];
            return (
              <Button
                id={link.href}
                key={link.href}
                color="inherit"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                onMouseEnter={trackMouseEnter}
                onMouseLeave={trackMouseLeave}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: colors.text,
                  "&:hover": { opacity: 0.8 },
                }}
              >
                {link.label}
              </Button>
            );
          })}
        </Box>

        {/* LinkedIn Icon */}
        <IconButton
          component="a"
          id="brandon-linkedin"
          onMouseEnter={linkedinHover.trackMouseEnter}
          onMouseLeave={linkedinHover.trackMouseLeave}
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

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box>
          <List>
            {navigationLinks.map((link) => (
              <ListItemButton
                sx={{ pr: 10 }}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

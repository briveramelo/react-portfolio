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
  Typography,
} from "@mui/material";
import { LinkedIn, Menu } from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { ThemeContext } from "../../ThemeContext.tsx";
import { isColorDark } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import { themes } from "../../theme.ts";
import { sectionStyles } from "../../data/sectionStyles.ts";

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
    { href: "#contact", label: "Contact" },
  ];
  const navHoverTrackers = navigationLinks.map((nav) => useHoverTracking());
  const linkedinHover = useHoverTracking();
  const hamburgerHover = useHoverTracking();
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
  const [activeSectionLabel, setActiveSectionLabel] = useState("Home");
  const linkedInUrl = "https://www.linkedin.com/in/briveramelo";

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
  const getThemeColors = (mode: string | undefined, sectionId: string) => {
    if (!mode) return null;

    const newTheme = Object.values(themes).find(
      (theme) => theme.customPalette.mode === mode,
    );

    if (!newTheme) return null;

    const section = sectionStyles[sectionId];
    if (!section) return null;

    return {
      background: newTheme.customPalette.background[section.backgroundKey],
      text: newTheme.customPalette.text[section.textKey],
    };
  };

  const updateColorsFromActiveSection = (mode?: string) => {
    if (!headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;

    const activeSection = sectionRefs.find((sectionRef) => {
      const section = sectionRef.current;
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= headerHeight && rect.bottom > headerHeight;
    });

    if (!activeSection?.current) return;

    const sectionId = activeSection.current.id;
    const activeLabel = sectionStyles[sectionId].label;
    setActiveSectionLabel(activeLabel);

    let newBackgroundColor: string;
    let newTextColor: string;
    if (mode) {
      const themeColors = getThemeColors(mode, sectionId);
      if (!themeColors) return;

      newBackgroundColor = themeColors.background;
      newTextColor = themeColors.text;
    } else {
      const styles = window.getComputedStyle(activeSection.current);
      newBackgroundColor = styles.backgroundColor;
      newTextColor = styles.color;
    }

    setIsBackgroundDark(isColorDark(newBackgroundColor));
    setColors({
      header: newBackgroundColor,
      text: newTextColor,
    });
  };

  // Update header on scroll
  useEffect(() => {
    const handleScroll = () => updateColorsFromActiveSection();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update header when theme changes
  useEffect(() => {
    updateColorsFromActiveSection();
  }, [mode]);

  const desktopNavLinks = (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
      {navigationLinks.map((link, index) => {
        const { trackMouseEnter, trackMouseLeave } = navHoverTrackers[index];
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
  );
  const linkedinIcon = (
    <IconButton
      component="a"
      id="brandon_linkedin"
      onMouseEnter={linkedinHover.trackMouseEnter}
      onMouseLeave={linkedinHover.trackMouseLeave}
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: colors.text,
        "&:hover": { opacity: 0.8 },
      }}
    >
      <LinkedIn />
    </IconButton>
  );
  const themeSwitcher = (
    <ThemeSwitcher
      isBackgroundDark={isBackgroundDark}
      onChange={(mode) => updateColorsFromActiveSection(mode)}
    />
  );

  const hamburgerMenu = (
    <IconButton
      onClick={() => setDrawerOpen(true)} sx={{ color: colors.text }}
      onMouseEnter={hamburgerHover.trackMouseEnter}
      onMouseLeave={hamburgerHover.trackMouseLeave}
      id="hamburger_menu"
    >
      <Menu />
    </IconButton>
  );

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
        {/* Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {desktopNavLinks}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {linkedinIcon}
            {themeSwitcher}
          </Box>
        </Box>

        {/* mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Left-aligned content */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {hamburgerMenu}
          </Box>

          {/* Centered content */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: "center", color: colors.text }}
          >
            {activeSectionLabel}
          </Typography>

          {/* Right-aligned content */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {themeSwitcher}
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box>
          <List>
            {navigationLinks.map((link, index) => (
              <ListItemButton
                sx={{ pr: 10 }}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={navHoverTrackers[index].trackMouseEnter}
                onMouseLeave={navHoverTrackers[index].trackMouseLeave}
                id={`hamburger_item_${link.label}`}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            {/*{linkedinIcon}*/}
            <ListItemButton
              sx={{ pr: 10 }}
              key="linkedinIcon"
              href={linkedInUrl}
              id="hamburger_item_linkedin"
              onMouseEnter={linkedinHover.trackMouseEnter}
              onMouseLeave={linkedinHover.trackMouseLeave}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText primary="LinkedIn" />
              <LinkedIn />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

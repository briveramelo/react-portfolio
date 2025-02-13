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
import ThemeSwitcher from "./Header/ThemeSwitcher";
import { ThemeContext } from "../../context/ThemeContext.tsx";
import { isColorDark } from "../../utils/utils.ts";
import { ThemeMode, themes } from "../../theme.ts";
import { NavLink, sectionStyles } from "../../data/sectionStyles.ts";
import { useNavigation } from "../../utils/hooks/useNavigation";

interface HeaderProps {
  sectionRefs: React.RefObject<HTMLElement>[];
  desktopHiddenNavigationLinks: string[];
  navigationLinks: NavLink[];
  defaultBackgroundColor: string;
  defaultTextColor: string;
  defaultIsBackgroundDark: boolean;
}

export function Header({
  sectionRefs,
  desktopHiddenNavigationLinks,
  navigationLinks,
  defaultBackgroundColor,
  defaultTextColor,
  defaultIsBackgroundDark,
}: HeaderProps) {
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

  const handleNavClick = useNavigation(navigationLinks, {
    onNavigate: () => setDrawerOpen(false),
  });

  // Header adapts to match section colors
  const getThemeColors = (themeMode: ThemeMode | undefined, sectionId: string) => {
    if (!themeMode) return null;

    const newTheme = Object.values(themes).find(
      (theme) => theme.customPalette.mode === themeMode,
    );

    if (!newTheme) return null;

    const section = sectionStyles[sectionId];
    if (!section) return null;

    return {
      background: newTheme.customPalette.background[section.backgroundKey],
      text: newTheme.customPalette.text[section.textKey],
    };
  };

  const updateColorsFromActiveSection = (newMode: ThemeMode) => {
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
    if (activeLabel === activeSectionLabel && newMode == mode) return; // no change required

    setActiveSectionLabel(activeLabel);
    const themeColors = getThemeColors(newMode, sectionId);
    if (!themeColors) return;

    setIsBackgroundDark(isColorDark(themeColors.background));
    setColors({
      header: themeColors.background,
      text: themeColors.text,
    });
  };

  // Update header on scroll (depends on active mode and section labels though!)
  useEffect(() => {
    const handleScroll = () => updateColorsFromActiveSection(mode);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSectionLabel, mode]);

  // Update header when theme changes
  useEffect(() => {
    updateColorsFromActiveSection(mode);
  }, [mode]);

  const desktopNavLinks = (
    <>
      {navigationLinks
        .filter((link) => !desktopHiddenNavigationLinks.includes(link.href))
        .map((link) => (
          <Button
            id={link.href}
            key={link.href}
            color="inherit"
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
              e.currentTarget.blur();
            }}
            sx={{
              textTransform: "none",
              color: colors.text,
              "&:hover": { opacity: 0.7 },
            }}
          >
            {link.label}
          </Button>
        ))}
    </>
  );

  const linkedinIcon = (
    <IconButton
      component="a"
      id="brandon_linkedin"
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: colors.text,
        "&:hover": { opacity: 0.7 },
      }}
    >
      <LinkedIn />
    </IconButton>
  );

  const themeSwitcher = (
    <ThemeSwitcher
      isBackgroundDark={isBackgroundDark}
      onChange={updateColorsFromActiveSection}
    />
  );

  const hamburgerMenu = (
    <IconButton
      onClick={() => setDrawerOpen(true)}
      sx={{ color: colors.text }}
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
          maxWidth: "xl",
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
          <Typography
            component="a"
            href="#home"
            onClick={() => handleNavClick("#home")}
            color={colors.text}
            sx={{
              whiteSpace: "nowrap",
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
              "&:hover": { opacity: 0.7 },
            }}
          >
            Brandon Rivera-Melo
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {desktopNavLinks}
          </Box>
          <Box sx={{ display: "flex-end", alignItems: "center", gap: 1 }}>
            {linkedinIcon}
            {themeSwitcher}
          </Box>
        </Box>

        {/* Mobile */}
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
            {navigationLinks.map((link) => (
              <ListItemButton
                sx={{ pr: 10 }}
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                id={`hamburger_item_${link.label}`}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}

            {/* LinkedIn Icon */}
            <ListItemButton
              sx={{ pr: 10 }}
              key="linkedinIcon"
              href={linkedInUrl}
              id="hamburger_item_linkedin"
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

import React, { useContext, useState, useRef } from "react";
import {
  Popper,
  Paper,
  MenuItem,
  IconButton,
  Typography,
  Box,
  darken,
} from "@mui/material";
import { themeImages, ThemeMode } from "../../../theme/theme.ts";
import { ThemeContext } from "../../../context/ThemeContext.tsx";
import { trackCustomEvent } from "../../../utils/tracking/plausibleHelpers.ts";
import { cp } from "../../../utils/utils.ts";

interface ThemeSwitcherProps {
  isBackgroundDark: boolean;
  onChange: (mode: ThemeMode) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isBackgroundDark,
  onChange,
}) => {
  const { setMode } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const imgSize = 24;
  const hideTimer = useRef<number | null>(null);

  const handleIconPointerEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleIconPointerLeave = () => {
    hideTimer.current = window.setTimeout(() => {
      setMenuOpen(false);
      setAnchorEl(null);
    }, 200);
  };

  const handlePopperPointerEnter = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setMenuOpen(true);
  };

  const handlePopperPointerLeave = () => {
    hideTimer.current = window.setTimeout(() => {
      setMenuOpen(false);
      setAnchorEl(null);
    }, 200);
  };

  const handleThemeSelect = (index: number) => {
    trackCustomEvent("theme_selected", {
      selected_theme: themeImages[index].name,
      event_version: "0.1.0",
    });
    setCurrentThemeIndex(index);
    setMode(themeImages[index].name);
    setMenuOpen(false);
    setAnchorEl(null);
    onChange(themeImages[index].name);
  };

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <IconButton
        id="theme-switcher"
        onPointerEnter={handleIconPointerEnter}
        onPointerLeave={handleIconPointerLeave}
        aria-controls={menuOpen ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
      >
        <img
          src={themeImages[currentThemeIndex].src}
          alt={themeImages[currentThemeIndex].name}
          id={`theme_selected_${themeImages[currentThemeIndex].name}`}
          style={{
            width: "auto",
            height: imgSize,
            filter: isBackgroundDark ? "invert(1)" : "",
          }}
        />
      </IconButton>

      <Popper
        open={menuOpen}
        anchorEl={anchorEl}
        placement="top-start"
        style={{ zIndex: 1300 }}
      >
        <Paper
          onPointerEnter={handlePopperPointerEnter}
          onPointerLeave={handlePopperPointerLeave}
          sx={{
            ml: -1,
            boxShadow: "none",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {themeImages.map((theme, index) => (
            <MenuItem
              id={`theme_menu_item_${theme.name}`}
              key={theme.name}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: cp("background.light"),
                "&:hover": {
                  backgroundColor: darken(cp("background.light"), 0.3),
                },
              }}
              onClick={() => handleThemeSelect(index)}
            >
              <img
                id={`theme_menu_item_img_${theme.name}`}
                src={theme.src}
                alt={theme.name}
                style={{ width: "auto", height: imgSize }}
              />
              <Typography>{theme.name}</Typography>
            </MenuItem>
          ))}
        </Paper>
      </Popper>
    </Box>
  );
};

export default ThemeSwitcher;

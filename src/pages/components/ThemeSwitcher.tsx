import React, { useContext, useState } from "react";
import { Menu, MenuItem, IconButton, Typography, Box } from "@mui/material";
import { themeImages, ThemeMode } from "../../theme.ts";
import { ThemeContext } from "../../context/ThemeContext.tsx";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import { trackCustomEvent } from "../../tracking/plausibleHelpers.ts";

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
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const open = Boolean(anchorEl);
  const imgSize = 24;

  const selectedHover = useHoverTracking();
  const menuItemHoverTrackers = themeImages.map((theme) => useHoverTracking());

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (index: number) => {
    trackCustomEvent("theme_selected", {
      selected_theme: themeImages[index].name,
      event_version: "0.1.0",
    });
    setCurrentThemeIndex(index);
    setMode(themeImages[index].name);
    handleClose();
    onChange(themeImages[index].name);
  };

  return (
    <Box>
      <IconButton
        id="theme-switcher"
        onClick={handleClick}
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={selectedHover.trackMouseEnter}
        onMouseLeave={selectedHover.trackMouseLeave}
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
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ml: -1,
          mt: 1,
          "& .MuiPaper-root": {
            boxShadow: "none",
          },
        }}
      >
        {themeImages.map((theme, index) => {
          const { trackMouseEnter, trackMouseLeave } =
            menuItemHoverTrackers[index];
          return (
            <MenuItem
              id={`theme_menu_item_${theme.name}`}
              key={theme.name}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              onClick={() => handleThemeSelect(index)}
              onMouseEnter={trackMouseEnter}
              onMouseLeave={trackMouseLeave}
            >
              <img
                id={`theme_menu_item_img_${theme.name}`}
                src={theme.src}
                alt={theme.name}
                style={{
                  width: "auto",
                  height: imgSize,
                }}
              />
              <Typography>{theme.name}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default ThemeSwitcher;

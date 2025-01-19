import React, { useContext, useState } from "react";
import { Menu, MenuItem, IconButton, Typography, Box } from "@mui/material";
import { themeImages } from "../theme";
import { ThemeContext } from "../ThemeContext";

interface ThemeSwitcherProps {
  isBackgroundDark: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isBackgroundDark }) => {
  const { setMode } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const open = Boolean(anchorEl);
  const imgSize = 24;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (index: number) => {
    setCurrentThemeIndex(index);
    setMode(themeImages[index].name);
    handleClose();
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <img
          src={themeImages[currentThemeIndex].src}
          alt={themeImages[currentThemeIndex].name}
          style={{
            width: 'auto',
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
        {themeImages.map((theme, index) => (
          <MenuItem
            key={theme.name}
            onClick={() => handleThemeSelect(index)}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <img
              src={theme.src}
              alt={theme.name}
              style={{
                width: 'auto',
                height: imgSize,
              }}
            />
            <Typography>{theme.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ThemeSwitcher;

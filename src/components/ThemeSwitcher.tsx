import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { themeImages } from "../theme";
import { ThemeContext } from "../ThemeContext";
const ThemeSwitcher = ({ isBackgroundDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setMode } = useContext(ThemeContext);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const next = (prevIndex + 1) % themeImages.length;
      setMode(themeImages[next].name);
      return next;
    });
  };

  return (
    <Button onClick={handleNextImage} sx={{ minWidth: "auto", padding: 0 }}>
      <img
        src={themeImages[currentIndex].src}
        alt={themeImages[currentIndex].name}
        style={{ height: "24px", filter: isBackgroundDark ? "" : "invert(1)" }}
      />
    </Button>
  );
};

export default ThemeSwitcher;

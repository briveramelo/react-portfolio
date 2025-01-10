import React, { useContext } from "react";
import { themeImages } from "../theme";
import { ThemeContext } from "../ThemeContext";
import IconToggle from "./IconToggle";

const ThemeSwitcher = ({ isBackgroundDark }) => {
  const { setMode } = useContext(ThemeContext);

  const handleIconToggle = (index) => {
    setMode(themeImages[index].name);
  };

  return (
    <IconToggle
      icons={themeImages.map((theme) => ({
        src: theme.src,
        alt: theme.name,
      }))}
      onToggle={handleIconToggle}
      invert={!isBackgroundDark}
      height={32}
      width={32}
    />
  );
};

export default ThemeSwitcher;

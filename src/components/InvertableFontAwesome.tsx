import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCustomPalette } from "../theme";

interface InvertableFontAwesomeProps {
  icon: any; // Icon object imported from Font Awesome, e.g., `faCalendarCheck`
  invert?: boolean; // Force inversion
}

const InvertableFontAwesome: React.FC<InvertableFontAwesomeProps> = ({
  icon,
  invert,
}) => {
  const { mode } = useCustomPalette();
  const isDarkTheme = mode === "dark";

  const shouldInvert = invert !== undefined ? invert : isDarkTheme;

  return (
    <FontAwesomeIcon
      icon={icon}
      style={{
        filter: shouldInvert ? "invert(1)" : "",
        transition: "filter 0.3s ease", // Optional: smooth transition when switching
      }}
    />
  );
};

export default InvertableFontAwesome;

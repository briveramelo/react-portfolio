import React from "react";
import { useTheme } from "@mui/material";

export const HighlightedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const highlightingColor = theme.palette.text.highlighting;

  return (
    <span
      style={{
        backgroundColor: highlightingColor,
        fontWeight: "bold",
        padding: "0 4px",
        borderRadius: "4px",
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </span>
  );
};

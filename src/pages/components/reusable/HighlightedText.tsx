import React from "react";
import { useCustomPalette } from "../../../theme.ts";

export const HighlightedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { text } = useCustomPalette();

  return (
    <span
      style={{
        backgroundColor: text.highlighting,
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

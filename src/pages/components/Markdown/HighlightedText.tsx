import React from "react";
import { useCustomPalette } from "../../../theme/theme.ts";

interface HighlightedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  style = {},
  ...props
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
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

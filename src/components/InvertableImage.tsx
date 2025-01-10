import React from "react";
import { useTheme } from "@mui/material";

interface InvertableImageProps {
  src: string;
  alt: string;
  invert?: boolean; // Forces inversion when set, otherwise responds to theme
}

const InvertableImage: React.FC<InvertableImageProps> = ({
  src,
  alt,
  invert,
}) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const shouldInvert = invert !== undefined ? invert : isDarkTheme;

  const filterStyle = shouldInvert ? "invert(1)" : "";
  return (
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        filter: filterStyle,
      }}
    />
  );
};

export default React.memo(InvertableImage);

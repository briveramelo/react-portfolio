import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { useResizeDimensions } from "../hooks/useResizeDimensions.ts";

interface MediaImageProps {
  src: string;
  height: number | string;
  alt: string;
  isActive?: boolean;
  style?: React.CSSProperties;
}

const MediaImage: React.FC<MediaImageProps> = ({
  src,
  height,
  alt,
  isActive = true,
  style = {},
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { dimensions, resizeDimensions } = useResizeDimensions();

  useEffect(() => {
    if (isActive && imgRef.current) {
      resizeDimensions(imgRef.current);
    }
  }, [isActive, resizeDimensions]);

  return (
    <Box
      sx={{
        width: "100%",
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        onLoad={() => resizeDimensions(imgRef.current)}
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          ...style,
        }}
      />
    </Box>
  );
};

export default MediaImage;

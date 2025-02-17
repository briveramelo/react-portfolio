import React, { useState, useEffect, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import FirebaseAsset from "./FirebaseAsset.tsx";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: number | string;
  alt: string;
  isActive?: boolean;
  style?: React.CSSProperties;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
  alt,
  isActive = true,
  style = {},
}) => {
  const [dimensions, setDimensions] = useState<{
    width: string;
    height: string;
  }>({
    width: "100%",
    height: "100%",
  });
  const imgRef = useRef<HTMLImageElement | null>(null);

  const resizeDimensions = useCallback(() => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Container dimensions:
    const containerWidth = img.parentElement?.clientWidth || naturalWidth;
    const containerHeight = img.parentElement?.clientHeight || naturalHeight;

    // Calculate the scale factor needed to "contain" the image.
    const scale = Math.min(
      containerWidth / naturalWidth,
      containerHeight / naturalHeight,
    );

    const newWidth = naturalWidth * scale;
    const newHeight = naturalHeight * scale;

    // Express these as percentages of the container dimensions.
    const percentageWidth = (newWidth / containerWidth) * 100;
    const percentageHeight = (newHeight / containerHeight) * 100;

    setDimensions({
      width: `${percentageWidth.toFixed(2)}%`,
      height: `${percentageHeight.toFixed(2)}%`,
    });
  }, []);

  // Recalculate when the image becomes active.
  useEffect(() => {
    if (isActive) {
      resizeDimensions();
    }
  }, [isActive, resizeDimensions]);

  return (
    <Box
      sx={{
        width: "100%",
        height,
      }}
    >
      <FirebaseAsset
        firebasePath={firebaseImagePath}
        height={height}
        render={(url) =>
          url ? (
            <img
              onLoad={resizeDimensions}
              ref={imgRef}
              src={url}
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
          ) : (
            <p>No image available</p>
          )
        }
      />
    </Box>
  );
};

export default FirebaseImage;

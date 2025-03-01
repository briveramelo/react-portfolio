import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import FirebaseAsset from "./FirebaseAsset.tsx";
import { useResizeDimensions } from "../useResizeDimensions.ts";
import { CircularProgress } from "@mui/material";

interface FirebaseImageProps {
  firebaseImagePath: string;
  height: string;
  alt: string;
  isActive?: boolean;
  allowResizing?: boolean;
  style?: React.CSSProperties;
}

const FirebaseImage: React.FC<FirebaseImageProps> = ({
  firebaseImagePath,
  height,
  alt,
  isActive = true,
  allowResizing = true,
  style = {},
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { dimensions, resizeDimensions } = useResizeDimensions();

  // Recalculate dimensions when the image becomes active.
  useEffect(() => {
    if (allowResizing && isActive && imgRef.current) {
      resizeDimensions(imgRef.current);
    }
  }, [isActive, resizeDimensions]);

  return (
    <Box sx={{ width: "100%", height }}>
      <FirebaseAsset
        firebasePath={firebaseImagePath}
        height={height}
        render={(url) =>
          url ? (
            <img
              onLoad={() => {
                if (!allowResizing) return;

                resizeDimensions(imgRef.current);
              }}
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
            <CircularProgress />
          )
        }
      />
    </Box>
  );
};

export default FirebaseImage;

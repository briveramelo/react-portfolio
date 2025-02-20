import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import FirebaseAsset from "./FirebaseAsset.tsx";
import { useResizeDimensions } from "../useResizeDimensions.ts";
import { CircularProgress } from "@mui/material";

interface FirebaseVideoAsGifProps {
  firebaseVideoPath: string;
  height: number | string;
  alt: string;
  isActive?: boolean;
  allowResizing?: boolean;
  style?: React.CSSProperties;
}

const FirebaseVideoAsGif: React.FC<FirebaseVideoAsGifProps> = ({
  firebaseVideoPath,
  height,
  alt,
  isActive = true,
  allowResizing = true,
  style = {},
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { dimensions, resizeDimensions } = useResizeDimensions();

  useEffect(() => {
    if (allowResizing && isActive && videoRef.current) {
      resizeDimensions(videoRef.current);
    }
  }, [isActive, resizeDimensions]);

  return (
    <Box sx={{ width: "100%", height }}>
      <FirebaseAsset
        firebasePath={firebaseVideoPath}
        height={height}
        render={(url) =>
          url ? (
            <video
              ref={videoRef}
              src={url}
              onLoadedData={() => resizeDimensions(videoRef.current)}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: dimensions.width,
                height: dimensions.height,
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
                ...style,
              }}
            >
              {alt}
            </video>
          ) : (
            <CircularProgress />
          )
        }
      />
    </Box>
  );
};

export default FirebaseVideoAsGif;

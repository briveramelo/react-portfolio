import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface YouTubePlayerProps {
  src: string;
  title: string;
  isActive: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  src,
  title,
  isActive,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Pause the video when inactive
  useEffect(() => {
    if (!isActive && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: [],
        }),
        "*",
      );
    }
  }, [isActive]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: "54.25%", // fills the play area
      }}
    >
      <iframe
        ref={iframeRef}
        src={`${src}`}
        title={title}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default YouTubePlayer;

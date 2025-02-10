import React from "react";
import { Box } from "@mui/material";

interface YouTubePlayerProps {
  src: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ src }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%", // enforces a 16:9 ratio.
      }}
    >
      <iframe
        src={src}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
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

import React from "react";
import { Box } from "@mui/material";

interface YouTubePlayerProps {
  src: string;
  height: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ src, height }) => (
  <Box sx={{ position: "relative", width: "100%", height }}>
    <iframe
      width="100%"
      height="100%"
      src={src}
      title="YouTube video"
      frameBorder="0"
      allowFullScreen
    />
  </Box>
);

export default YouTubePlayer;

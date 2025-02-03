import React from "react";
import { Box, keyframes } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ScrollDownIndicatorProps {
  color: string;
  size: number;
}

export const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
  color,
  size,
}) => {
  const scrollDown = keyframes`
      0% { transform: translateY(0); opacity: 0; }
      50% { transform: translateY(20px); opacity: 1; }
      100% { transform: translateY(40px); opacity: 0; }
  `;
  const anim = {
    fontSize: size,
    color: color,
    opacity: 0,
    animation: `${scrollDown} 3s infinite linear`,
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: size / 2,
        width: "100%",
      }}
    >
      <ExpandMoreIcon sx={anim} />
      <ExpandMoreIcon
        sx={{
          ...anim,
          marginTop: `${-size}px`,
          animationDelay: "1.5s",
        }}
      />
    </Box>
  );
};

export default ScrollDownIndicator;

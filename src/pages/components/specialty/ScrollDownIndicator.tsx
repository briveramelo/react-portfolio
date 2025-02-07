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
      50% { transform: translateY(${size / 2}px); opacity: 1; }
      100% { transform: translateY(${size}px); opacity: 0; }
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
        width: "100%",
        mt: { xs: -5, sm: 0 },
        pb: { xs: 5, sm: 0 },
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

import React, { useState, useEffect } from "react";
import { Box, keyframes } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"; // Circle icon
import { useCursor } from "../../../context/CursorContext";

interface AnimatedCursorProps {
  color: string;
  size: number;
  durationMs: number;
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  color,
  size,
  durationMs,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useCursor();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  // Keyframes for expanding circle animation
  const expandAnimation = keyframes`
    0% { transform: scale(2); opacity: 0; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
  `;

  const animStyle = {
    fontSize: size,
    color: color,
    opacity: 0,
    position: "absolute",
    animation: `${expandAnimation} 2s infinite linear`,
  };

  return (
    isHovered && (
      <Box
        sx={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: size,
          height: size,
          pointerEvents: "none",
          zIndex: 10000,
        }}
      >
        <RadioButtonUncheckedIcon sx={{ ...animStyle }} />
        <RadioButtonUncheckedIcon
          sx={{ ...animStyle, animationDelay: `${durationMs}ms` }}
        />
      </Box>
    )
  );
};

export default AnimatedCursor;

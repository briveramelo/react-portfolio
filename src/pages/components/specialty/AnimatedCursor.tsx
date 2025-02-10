import React, { useRef, useEffect } from "react";
import { Box, keyframes } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const { isHovered } = useCursor();

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updatePosition = (e: MouseEvent) => {
      if (animationFrameId !== null) {
        // Already scheduled an update, so don't schedule another.
        return;
      }
      animationFrameId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
        }
        animationFrameId = null;
      });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [size]);

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
    position: "absolute" as const,
    animation: `${expandAnimation} ${durationMs}ms infinite linear`,
  };

  return (
    <Box
      ref={cursorRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 10000,
        transition: "none",
        opacity: isHovered() ? 1 : 0,
      }}
    >
      <RadioButtonUncheckedIcon sx={{ ...animStyle }} />
      <RadioButtonUncheckedIcon
        sx={{ ...animStyle, animationDelay: `${durationMs / 2}ms` }}
      />
    </Box>
  );
};

export default AnimatedCursor;

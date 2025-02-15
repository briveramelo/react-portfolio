import React, { useRef } from "react";
import { Box } from "@mui/material";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

interface ConfettiEffectProps {
  trigger: boolean;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ trigger }) => {
  const confettiRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  if (!trigger) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <ReactConfetti
        ref={confettiRef}
        width={width}
        height={height}
        confettiSource={{
          x: width / 2,
          y: height,
          w: 0,
          h: 0,
        }}
        numberOfPieces={300}
        recycle={false}
        initialVelocityX={{ min: -10, max: 10 }}
        initialVelocityY={{ min: -30, max: -20 }}
        tweenDuration={5000}
        gravity={0.2}
        friction={0.98}
      />
    </Box>
  );
};

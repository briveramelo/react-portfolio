import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Box from "@mui/material/Box";

export interface SparkHandle {
  restart: (left: number, top: number) => void;
}

interface SparkProps {
  keyframes: Keyframe[];
  animationOptions: KeyframeAnimationOptions;
}

const Spark = forwardRef<SparkHandle, SparkProps>(
  ({ keyframes, animationOptions }, ref) => {
    const size = 8;
    const boxRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<Animation | null>(null);

    useImperativeHandle(ref, () => ({
      restart(left: number, top: number) {
        if (boxRef.current) {
          boxRef.current.style.left = `${left}px`;
          boxRef.current.style.top = `${top}px`;

          if (animationRef.current) {
            animationRef.current.cancel();
          }

          animationRef.current = boxRef.current.animate(
            keyframes,
            animationOptions,
          );
        }
      },
    }));

    return (
      <Box
        ref={boxRef}
        sx={{
          position: "absolute",
          background: "radial-gradient(circle, #ffffff 0%, #ffa500 70%)",
          height: size,
          width: size,
          borderRadius: "50%",
        }}
      />
    );
  },
);

Spark.displayName = "Spark";

export default Spark;

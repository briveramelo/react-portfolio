import React, { forwardRef, useImperativeHandle, useState } from "react";
import Box from "@mui/material/Box";

/**
 * A Spark component that exposes an imperative restart method.
 * Its animation is defined solely via its sx prop (using the memoized sparkAnimation value),
 * and its position (left/top) is controlled via its internal state.
 */
export interface SparkHandle {
  restart: (left: number, top: number) => void;
}

interface SparkProps {
  sparkAnimation: string;
}

const Spark = forwardRef<SparkHandle, SparkProps>(({ sparkAnimation }, ref) => {
  const [state, setState] = useState<{
    left: number;
    top: number;
    restartKey: number;
  }>({
    left: -9999, // hack to keep first few offscreen
    top: -9999, // hack to keep first few offscreen
    restartKey: 0,
  });

  // Expose an imperative method to update position (and restart the animation).
  useImperativeHandle(ref, () => ({
    restart(left: number, top: number) {
      setState((prev) => ({
        left,
        top,
        restartKey: prev.restartKey + 1, // change the key so the sx prop re‑evaluates
      }));
    },
  }));

  return (
    <Box
      key={state.restartKey}
      sx={{
        position: "fixed", // fixed so parent's transforms are not applied
        background: "radial-gradient(circle, #ffffff 0%, #ffa500 70%)",
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        pointerEvents: "none",
        left: state.left,
        top: state.top,
        animation: sparkAnimation,
      }}
    />
  );
});

Spark.displayName = "Spark";

export default Spark;

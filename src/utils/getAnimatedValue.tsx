import { useEffect, useState } from "react";
import { animationDurationMs } from "./constants";

/**
 * Hook to animate a value from its initial state to a target state.
 * @param targetValue The target value to animate towards.
 * @param durationMs The duration of the animation in milliseconds.
 * @returns The current animated value.
 */
export const getAnimatedValue = (
  targetValue: number,
  durationMs: number = animationDurationMs,
): number => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTimeMs = 0;
    const startValue = 0;
    const delta = targetValue - startValue;

    const tick = (currentTimeMs: number) => {
      if (!startTimeMs) startTimeMs = currentTimeMs;
      const progress = Math.min((currentTimeMs - startTimeMs) / durationMs, 1);
      const easedProgress = easeOutQuad(progress);
      setCurrentValue(startValue + delta * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [targetValue]);

  const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

  return currentValue;
};

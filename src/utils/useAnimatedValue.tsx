import { useEffect, useState } from "react";

/**
 * Hook to animate a value from its initial state to a target state.
 * @param targetValue The target value to animate towards.
 * @param animate Whether the animation is enabled.
 * @param duration The duration of the animation in milliseconds.
 * @returns The current animated value.
 */
export const useAnimatedValue = (
  targetValue: number,
  animate: boolean = true,
  duration: number = 2000,
): number => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!animate) {
      setCurrentValue(targetValue);
      return;
    }

    let start = 0;
    const startValue = currentValue;
    const delta = targetValue - startValue;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCurrentValue(Math.round(startValue + delta * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [targetValue, animate]);

  const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

  return currentValue;
};

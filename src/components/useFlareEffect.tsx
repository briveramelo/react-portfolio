import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import { Flare } from "../utils/Flare";

export const useFlareEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const fire = new Flare(ctx, canvas);

    let startTimeMs = performance.now();
    let animationFrameId: number;
    const durationMs = 15000;

    const animate = (timeMs: number) => {
      const elapsedTimeMs = timeMs - startTimeMs;
      const normalizedTime = (elapsedTimeMs / durationMs) * Math.PI * 2; // Full sine wave cycle

      // Use sine wave to create smooth bouncing effect
      const amplitude = canvas.height / 2;
      const positionY = amplitude - Math.sin(normalizedTime) * amplitude;

      fire.update({ x: 50, y: positionY });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height]);

  return canvasRef;
};

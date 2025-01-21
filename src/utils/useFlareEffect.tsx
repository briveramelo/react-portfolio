import { useEffect, RefObject } from "react";
import { Flare } from "./Flare.ts";

// Define the props for the hook
interface UseFlareEffectProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  containerRef: RefObject<HTMLDivElement>;
  xOffset: number;
  yAmpFactor: number;
  durationMs: number;
  phaseOffset: number;
}

export const useFlareEffect = ({
  canvasRef,
  containerRef,
  xOffset,
  yAmpFactor,
  phaseOffset,
  durationMs,
}: UseFlareEffectProps) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size based on the container dimensions
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }, [canvasRef, containerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fire = new Flare(ctx, canvas);
    let animationFrameId: number;

    const animate = (timeMs: number) => {
      const normalizedTime = (timeMs / durationMs) * Math.PI * 2 + phaseOffset;

      const amplitude = canvas.height * yAmpFactor;
      const positionY =
        canvas.height / 2 - Math.sin(normalizedTime) * amplitude;

      fire.update({ x: xOffset, y: positionY });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);
};

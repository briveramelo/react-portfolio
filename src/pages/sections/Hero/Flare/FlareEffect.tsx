import React, { RefObject, useEffect, useRef } from "react";
import { Flare } from "./flare.ts";

interface FlareEffectProps {
  containerRef: RefObject<HTMLElement>;
  xOffset: number;
  yAmpFactor: number;
  phaseOffset: number;
  durationMs: number;
}

export const FlareEffect: React.FC<FlareEffectProps> = ({
  containerRef,
  xOffset,
  yAmpFactor,
  phaseOffset,
  durationMs,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }, []);

  // Animation effect using the Flare class.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const flare = new Flare(ctx, canvas);
    let animationFrameId: number;

    const animate = (timeMs: number) => {
      const normalizedTime = (timeMs / durationMs) * Math.PI * 2 + phaseOffset;
      const amplitude = canvas.height * yAmpFactor;
      const positionY =
        canvas.height / 2 - Math.sin(normalizedTime) * amplitude;

      flare.update({ x: xOffset, y: positionY });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [durationMs, phaseOffset, xOffset, yAmpFactor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
        backfaceVisibility: "hidden",
        pointerEvents: "none",
      }}
    />
  );
};

export default FlareEffect;

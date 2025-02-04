import { CardMetrics } from "./FuseHead.tsx";
import BezierEasing from "bezier-easing";

const ease = BezierEasing(0.25, 0.1, 0.25, 1);

export function getCurrentRotation(
  startRotationDeg: number,
  targetRotationDeg: number,
  transitionStartTime: number,
  transitionDurationMs: number,
): number {
  const now = performance.now();
  const elapsed = now - transitionStartTime;
  if (elapsed >= transitionDurationMs) {
    return targetRotationDeg;
  }
  const linearProgress = elapsed / transitionDurationMs;
  const easedProgress = ease(linearProgress);
  return (
    startRotationDeg + (targetRotationDeg - startRotationDeg) * easedProgress
  );
}

// A helper function to convert a local fuse head position into viewport coordinates.
export function convertLocalToGlobal(
  localPos: { x: number; y: number },
  cardMetrics: CardMetrics,
  rotationDeg: number,
  perspectivePx: number,
): { x: number; y: number } {
  // Compute card center in local coordinates.
  const centerX = cardMetrics.width / 2;
  const centerY = cardMetrics.height / 2;
  // Offsets relative to card center.
  const dx = localPos.x - centerX;
  const dy = localPos.y - centerY;

  // Convert rotation to radians.
  const theta = (rotationDeg * Math.PI) / 180;

  // Apply rotation around Y-axis.
  // Note: When rotating about Y, only the x coordinate is affected.
  const rotatedX = dx * Math.cos(theta);
  // y coordinate stays the same.
  const rotatedY = dy;
  // New depth value (z), using dx and sine:
  const rotatedZ = -dx * Math.sin(theta);

  // Compute perspective scale factor.
  const scale = perspectivePx / (perspectivePx - rotatedZ);

  // Apply perspective to get global offsets.
  const global_dx = rotatedX * scale;
  const global_dy = rotatedY * scale;

  // Compute card center in viewport coordinates.
  const cardCenterX = cardMetrics.left + centerX;
  const cardCenterY = cardMetrics.top + centerY;

  return {
    x: cardCenterX + global_dx,
    y: cardCenterY + global_dy,
  };
}

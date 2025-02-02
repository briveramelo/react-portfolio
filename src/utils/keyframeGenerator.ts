import { keyframes } from "@emotion/react";

/**
 * Generates a sinusoidal scaling keyframe animation.
 *
 * @param {number} baseline - The central scale value (e.g., 1 for neutral scaling).
 * @param {number} amplitude - The maximum deviation from the baseline (e.g., 0.3 for ±0.3 scaling).
 * @param {number} numKeyframes - The number of keyframes in the animation cycle (higher = smoother).
 * @param {number} numDecimals - The number of decimal places to round scale values for cleaner CSS output.
 * @returns Keyframes - A styled-components keyframes object representing the css animation.
 *
 * Example usage:
 * const pulseAnimation = generateSinusoidalScaleKeyframes(1, 0.3, 20, 2);
 */

export const generateSinusoidalScaleKeyframes = (
  baseline: number,
  amplitude: number,
  numKeyframes: number,
  numDecimals: number,
) => {
  const scaleMin = baseline - amplitude;
  const scaleMax = baseline + amplitude;

  return keyframes`
    ${[...Array(numKeyframes + 1)]
      .map((_, i) => {
        const percent = i * (100 / numKeyframes); // Evenly spaced keyframes
        const radians = i * ((2 * Math.PI) / numKeyframes); // Full cosine wave (0 → 2π)
        const scaleValue =
          scaleMin + (scaleMax - scaleMin) * (0.5 + 0.5 * Math.cos(radians));
        return `${percent.toFixed(2)}% { transform: scale(${scaleValue.toFixed(numDecimals)}); }`;
      })
      .join("\n    ")}
  `;
};

/**
 * Generates a keyframe animation for a gravity-based bounce effect.
 *
 * The animation starts at the peak scale, accelerates downward due to gravity,
 * reaches the lowest scale at 50% of the animation cycle, and then follows
 * a symmetric parabolic motion back to the peak.
 *
 * @param {number} baseline - The minimum scale factor at the bottom of the bounce.
 * @param {number} peak - The maximum scale factor at the peak of the bounce.
 * @param {number} numKeyframes - The number of keyframes for smooth interpolation.
 * @param {number} numDecimals - The number of decimal places to round scale values.
 * @returns Keyframes A Material-UI keyframes object representing the bounce animation.
 */
export const generateGravityBounceScaleKeyframes = (
  baseline: number,
  peak: number,
  numKeyframes: number,
  numDecimals: number,
) => {
  return keyframes`
    ${[...Array(numKeyframes + 1)]
      .map((_, i) => {
        const percent = i * (100 / numKeyframes); // Evenly spaced keyframes
        const progress = i / numKeyframes; // 0 → 1 normalized time

        // Parabolic motion for gravity-like bounce (symmetric around 50%)
        const t = progress <= 0.5 ? progress * 2 : (1 - progress) * 2; // Normalize to [0,1]
        const scaleValue = peak - (peak - baseline) * (t * t); // Quadratic easing (simulating gravity)

        return `${percent.toFixed(2)}% { transform: scale(${scaleValue.toFixed(numDecimals)}); }`;
      })
      .join("\n    ")}
  `;
};

/**
 * Generates a keyframe animation for a projectile (baseball throw arc) effect.
 *
 * The animation calculates x and y positions based on standard projectile motion:
 *   x(t) = v * cos(theta) * t
 *   y(t) = v * sin(theta) * t - (1/2) * g * t²
 *
 * Since CSS coordinates have y increasing downward, the computed y is negated.
 *
 * @param initialAngleDeg - The initial angle (in degrees) of the throw.
 * @param initialVelocityPxPerSec - The initial velocity (in pixels per second, or any consistent unit).
 * @param numKeyframes - The number of keyframes to generate.
 * @param numDecimals - The number of decimal places to use when rounding positions.
 * @param gravity - The acceleration due to gravity
 * @returns A keyframes animation that can be used with Emotion or MUI’s styled components.
 */
export const generateProjectileKeyframes = (
  initialAngleDeg: number,
  initialVelocityPxPerSec: number,
  totalTimeMs: number,
  numKeyframes: number,
  numDecimals: number,
  gravity: number = 100,
) => {
  const thetaRad = (initialAngleDeg * Math.PI) / 180;

  return keyframes`
    ${[...Array(numKeyframes + 1)]
      .map((_, i) => {
        const percent = (i * 100) / numKeyframes;
        // Normalize time between 0 and totalTime
        const t = ((i / numKeyframes) * totalTimeMs) / 1000;
        // Calculate horizontal position (x) and vertical position (y)
        const x = initialVelocityPxPerSec * Math.cos(thetaRad) * t;
        const y =
          initialVelocityPxPerSec * Math.sin(thetaRad) * t -
          0.5 * gravity * t * t;
        // Negate y so that upward motion corresponds to a negative translateY in CSS.
        return `${percent.toFixed(2)}% { transform: translate(${x.toFixed(
          numDecimals,
        )}px, ${(-y).toFixed(numDecimals)}px); }`;
      })
      .join("\n    ")}
  `;
};

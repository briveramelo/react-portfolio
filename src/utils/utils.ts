import { useCustomPalette } from "../theme";
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
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(
  value: number,
  isYearsOfExperience: boolean = false,
): string {
  const { experience } = useCustomPalette();
  if (isYearsOfExperience) {
    if (value < 2) return experience.red;
    if (value < 5) return experience.orange;
    return experience.green;
  } else {
    if (value < 60) return experience.red;
    if (value < 80) return experience.orange;
    return experience.green;
  }
}

export function isColorDark(color: string) {
  // Helper to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const normalizedHex = hex.replace(/^#/, "");
    const bigint = parseInt(normalizedHex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Handle hex colors
  if (color.startsWith("#")) {
    const { r, g, b } = hexToRgb(color);
    return calculateLuminance(r, g, b) < 0.5;
  }

  // Handle rgb/rgba colors
  if (color.startsWith("rgb")) {
    const match = color.match(/\d+/g);
    if (match) {
      const [r, g, b] = match.map(Number);
      return calculateLuminance(r, g, b) < 0.5;
    }
  }

  // Unsupported format
  console.error("unsupported color format. Expected rgb(x,x,x) or #xxxxxx");
  return false;
}

// Luminance calculation
function calculateLuminance(r: number, g: number, b: number) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  return 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
}

/**
 * Resolves a value from theme.custom_palette using a dot-separated key.
 *
 * @param key - A dot-separated string path to a property in custom_palette, e.g., "text.primary".
 * @returns The resolved value from custom_palette, or undefined if the key doesn't exist.
 */
export const cp = (key: string): string => {
  const customPalette = useCustomPalette();
  const keys = key.split(".");
  let value: any = customPalette;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      console.warn(`Key "${key}" not found in theme.customPalette.`);
      return "";
    }
  }

  return value as string;
};

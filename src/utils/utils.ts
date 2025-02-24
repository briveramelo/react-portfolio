import { useCustomPalette } from "../theme/theme.ts";

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "");
}

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

export const hexToRgb = (hex: string) => {
  const normalizedHex = hex.replace(/^#/, "");
  const bigint = parseInt(normalizedHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

export function isColorDark(color: string) {
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

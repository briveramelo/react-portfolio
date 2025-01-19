import { useCustomPalette } from "../theme";

/**
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(
  value: number,
  isYearsOfExperience: boolean = false,
): string {
  const { skills } = useCustomPalette();
  if (isYearsOfExperience) {
    if (value < 2) return skills.red;
    if (value < 5) return skills.orange;
    return skills.green;
  } else {
    if (value < 60) return skills.red;
    if (value < 80) return skills.orange;
    return skills.green;
  }
}

export function isColorDark(color) {
  // Helper to convert hex to RGB
  const hexToRgb = (hex) => {
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
function calculateLuminance(r, g, b) {
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


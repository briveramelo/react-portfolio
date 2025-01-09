import { useTheme } from "@mui/material";

/**
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(
  value: number,
  isYearsOfExperience: boolean = false,
): string {
  const theme = useTheme();
  if (isYearsOfExperience) {
    if (value < 2) return theme.palette.skills.red;
    if (value < 5) return theme.palette.skills.orange;
    return theme.palette.skills.green;
  } else {
    if (value < 60) return theme.palette.skills.red;
    if (value < 80) return theme.palette.skills.orange;
    return theme.palette.skills.green;
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
  console.error("unsupported color format. Expected rgb(x,x,x) or #xxxxxx")
}

// Luminance calculation
function calculateLuminance(r, g, b) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  return 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
}



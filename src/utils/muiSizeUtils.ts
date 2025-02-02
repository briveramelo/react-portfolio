import { Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Helper: Convert a fixed value (number or string ending in "px") to a number.
 */
export function parsePx(value: number | string): number {
  if (typeof value === "number") return value;
  if (value.trim().endsWith("px")) {
    return parseFloat(value);
  }
  throw new Error(
    `Expected a pixel value (e.g., "400px" or 400), but got: ${value}`,
  );
}

/**
 * Helper: Resolve a responsive value into a pixel number.
 *
 * The value can be a fixed number/string or an object keyed by breakpoints.
 * We use the MUI theme’s breakpoints and media queries to pick the appropriate value.
 */
export function resolveResponsiveValue(
  value: number | string | { [key: string]: number | string },
  theme: Theme,
  breakpointMatches: Record<string, boolean>,
): number {
  if (typeof value === "number" || typeof value === "string") {
    return parsePx(value);
  }
  // Try breakpoints in descending order (largest first)
  const bpOrder = [...theme.breakpoints.keys].reverse();
  for (const bp of bpOrder) {
    if (breakpointMatches[bp] && value[bp] !== undefined) {
      return parsePx(value[bp]);
    }
  }
  // Fallback: use first defined value in ascending order
  for (const bp of theme.breakpoints.keys) {
    if (value[bp] !== undefined) {
      return parsePx(value[bp]);
    }
  }
  throw new Error("No valid responsive value provided");
}

export const useBreakpointMatches = () => {
  const theme = useTheme();

  return {
    xs: useMediaQuery(theme.breakpoints.up("xs")),
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  };
};

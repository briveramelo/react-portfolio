import { useTheme } from "@mui/material";

/**
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(
  value: number,
  isExperience: boolean = false,
): string {
  const theme = useTheme();
  if (isExperience) {
    if (value < 2) return theme.palette.skills.red;
    if (value < 5) return theme.palette.skills.orange;
    return theme.palette.skills.green;
  } else {
    if (value < 60) return theme.palette.skills.red;
    if (value < 80) return theme.palette.skills.orange;
    return theme.palette.skills.green;
  }
}

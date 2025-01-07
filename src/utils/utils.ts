import {useTheme} from "@mui/material";

/**
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(value: number): string {
  const theme = useTheme();
  if (value < 60) return theme.palette.skills.red;
  if (value < 80) return theme.palette.skills.orange;
  return theme.palette.skills.green;
}

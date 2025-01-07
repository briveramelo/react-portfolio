/**
 * Return a color (red / yellow / green) based on numeric value
 */
export function getProgressColor(value: number): string {
  if (value < 60) return "#f44336"; // red
  if (value < 80) return "#ffeb3b"; // yellow
  return "#4caf50"; // green
}

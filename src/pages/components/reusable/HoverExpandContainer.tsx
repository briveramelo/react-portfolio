import React, { useState, ReactNode } from "react";
import { Box } from "@mui/material";

interface HoverExpandContainerProps {
  children: ReactNode[];
  maxFlex: number;
  minFlex: number;
  transitionDurationMs: number;
}

export const HoverExpandContainer: React.FC<HoverExpandContainerProps> = ({
  children,
  maxFlex,
  minFlex,
  transitionDurationMs,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2} mx="auto">
      {React.Children.map(children, (child, index) => (
        <Box
          sx={{
            // When nothing is hovered, all children get equal flex
            // When hovering, the hovered child expands while the others shrink
            flex:
              hoveredIndex === null
                ? "1 1 0%"
                : hoveredIndex === index
                  ? `${maxFlex} 1 0%`
                  : `${minFlex} 1 0%`,
            transition: `flex ${transitionDurationMs}ms ease`,
          }}
          onPointerEnter={() => setHoveredIndex(index)}
          onPointerLeave={() => setHoveredIndex(null)}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

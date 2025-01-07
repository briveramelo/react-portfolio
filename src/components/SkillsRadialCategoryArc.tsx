import React from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColor } from "../utils/utils";

interface SkillsRadialCategoryArcProps {
  value: number;
  animate: boolean;
}

const SkillsRadialCategoryArc: React.FC<SkillsRadialCategoryArcProps> = ({
  value,
}) => {
  const size = 120;
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <Box
      position="relative"
      width={size}
      height={size / 2}
      sx={{ overflow: "visible" }}
    >
      <svg
        width={size}
        height={size / 2}
        style={{ transform: "rotate(180deg)" }}
      >
        {/* Background path (gray) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}`}
        />
        {/* Progress path */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={getProgressColor(value)}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          style={{
            transition: "stroke-dasharray 0.3s ease, stroke 0.3s ease",
          }}
        />
      </svg>
      {/* Numeric Value */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%) rotate(180deg)",
          color: getProgressColor(value),
        }}
      >
        <Typography variant="h6" component="span" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillsRadialCategoryArc;

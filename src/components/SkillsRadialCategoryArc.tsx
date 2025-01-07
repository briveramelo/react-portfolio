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
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100 * circumference / 2;

  return (
      <Box position="relative" width={size} height={size / 2} sx={{ overflow: "hidden" }}>
        <svg width={size} height={size}>
          <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#e0e0e0"
              strokeWidth={strokeWidth}
              pathLength={circumference}
              strokeDasharray={circumference/2}
              strokeDashoffset={0}
              style={{
                transform: "rotate(180deg)",
                transformOrigin: "center",
              }}
          />
          <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={getProgressColor(value)}
              pathLength={circumference}
              strokeDasharray={`${progress} ${circumference / 2 - progress}`}
              strokeDashoffset={0}
              strokeLinecap="butt"
              style={{
                transform: "rotate(180deg)",
                transformOrigin: "center",
                transition: "stroke-dashoffset 2.6s ease, stroke 2.6s ease",
              }}
          />
        </svg>
        <Box
            position="absolute"
            top="75%"
            left="50%"
            sx={{
              transform: "translate(-50%, -50%)",
              color: getProgressColor(value),
            }}
        >
          <Typography variant="h4" component="span" fontWeight="bold">
            {value}
          </Typography>
        </Box>
      </Box>
  );
};

export default SkillsRadialCategoryArc;

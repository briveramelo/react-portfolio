import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs } from "../utils/constants";

interface SkillsRadialCategoryArcProps {
  value: number;
  isYearsOfExperience: boolean;
}

const SkillsRadialCategoryArc: React.FC<SkillsRadialCategoryArcProps> = ({
  value,
  isYearsOfExperience,
}) => {
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const denominator = isYearsOfExperience ? 15 : 100;
  const targetProgress = (value / denominator) * (circumference / 2);
  const animatedValue = getAnimatedValue(value, animationDurationMs);

  return (
    <Box
      position="relative"
      width={size}
      height={size / 2}
      sx={{ overflow: "hidden" }}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          pathLength={circumference}
          strokeDasharray={circumference / 2}
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
          stroke={getProgressColor(animatedValue, isYearsOfExperience)}
          pathLength={circumference}
          strokeDasharray={`${targetProgress} ${circumference / 2 - targetProgress}`}
          strokeDashoffset={0}
          strokeLinecap="butt"
          style={{
            transform: "rotate(180deg)",
            transformOrigin: "center",
            transition: `stroke-dasharray ${animationDurationMs}ms ease`,
          }}
        />
      </svg>
      <Box
        position="absolute"
        top="75%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          color: getProgressColor(animatedValue, isYearsOfExperience),
        }}
      >
        <Typography
          variant="h4"
          component="span"
          fontWeight="bold"
          sx={{ whiteSpace: "nowrap" }}
        >
          {Math.round(animatedValue)}
          {isYearsOfExperience ? " yrs" : ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillsRadialCategoryArc;

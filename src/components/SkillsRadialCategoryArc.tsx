import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs } from "../utils/constants";

interface SkillsRadialCategoryArcProps {
  value: number;
  isYearsOfExperience: boolean;
  animate: boolean;
}

const SkillsRadialCategoryArc: React.FC<SkillsRadialCategoryArcProps> = ({
  value,
  isYearsOfExperience,
  animate,
}) => {
  const theme = useTheme();
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const denominator = isYearsOfExperience ? 15 : 100;

  const targetProgress = animate
    ? (value / denominator) * (circumference / 2)
    : 0;
  const animatedValue = animate
    ? getAnimatedValue(value, animationDurationMs)
    : 0;
  const currentProgress = (animatedValue / denominator) * (circumference / 2);

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
          stroke={theme.palette.background.fillbar}
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
          strokeDasharray={`${currentProgress} ${circumference / 2 - currentProgress + 5}`} // the added 5 ensures the linecap butt doesn't appear
          strokeDashoffset={0}
          strokeLinecap="round"
          style={{
            transform: "rotate(180deg)",
            transformOrigin: "center",
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

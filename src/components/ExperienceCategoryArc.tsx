import React from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs, maxYearsOfExperience } from "../utils/constants";
import { useCustomPalette } from "../theme";

interface ExperienceCategoryArcProps {
  years: number;
}

const ExperienceCategoryArc: React.FC<ExperienceCategoryArcProps> = ({ years }) => {
  const { background } = useCustomPalette();
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const clampedYears = Math.min(years, maxYearsOfExperience);
  const animatedValue = getAnimatedValue(clampedYears, animationDurationMs);
  const currentProgress = (animatedValue / maxYearsOfExperience) * (circumference / 2);

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
          stroke={background.fillbar}
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
          stroke={getProgressColor(animatedValue, true)}
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
          color: getProgressColor(animatedValue, true),
        }}
      >
        <Typography variant="h4" component="span" fontWeight="bold" sx={{ whiteSpace: "nowrap" }}>
          {Math.round(animatedValue)} yrs
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceCategoryArc;

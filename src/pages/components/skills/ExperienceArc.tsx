import React from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColor } from "../../../utils/utils.ts";
import { useAnimatedValue } from "../../../utils/useAnimatedValue.ts";
import {
  starArcAnimationDurationMs,
  maxYearsOfExperience,
} from "../../../data/constants.ts";
import { useCustomPalette } from "../../../theme.ts";

interface ExperienceCategoryArcProps {
  years: number;
  isVisible: boolean;
}

const SIZE = 120;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ExperienceArc: React.FC<ExperienceCategoryArcProps> = ({
  years,
  isVisible,
}) => {
  const { experience } = useCustomPalette();

  const clampedYears = Math.min(years, maxYearsOfExperience);
  const animatedValue = useAnimatedValue(
    clampedYears,
    starArcAnimationDurationMs,
    isVisible,
  );
  const currentProgress =
    (animatedValue / maxYearsOfExperience) * (CIRCUMFERENCE / 2);

  return (
    <Box
      position="relative"
      width={SIZE}
      height={SIZE / 2}
      sx={{ overflow: "hidden" }}
    >
      <svg width={SIZE} height={SIZE}>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="transparent"
          stroke={experience.empty}
          strokeWidth={STROKE_WIDTH}
          pathLength={CIRCUMFERENCE}
          strokeDasharray={CIRCUMFERENCE / 2}
          strokeDashoffset={0}
          style={{
            transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
          stroke={getProgressColor(animatedValue, true)}
          pathLength={CIRCUMFERENCE}
          strokeDasharray={`${currentProgress.toFixed(3)} ${(CIRCUMFERENCE / 2 - currentProgress + 5).toFixed(3)}`} // the added 5 ensures the linecap butt doesn't appear
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
        <Typography
          variant="h4"
          component="span"
          fontWeight="bold"
          sx={{ whiteSpace: "nowrap" }}
        >
          {Math.round(animatedValue)} yrs
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(ExperienceArc);

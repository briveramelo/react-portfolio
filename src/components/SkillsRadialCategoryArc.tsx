import React from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColor } from "../utils/utils";
import { useAnimatedValue } from "../utils/useAnimatedValue";
import { animationDurationMs } from "../utils/constants";

interface SkillsRadialCategoryArcProps {
  value: number;
  animate: boolean;
  isExperience: boolean;
}

const SkillsRadialCategoryArc: React.FC<SkillsRadialCategoryArcProps> = ({
  value,
  animate,
  isExperience,
}) => {
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const denominator = isExperience ? 15 : 100;
  const targetProgress = (value / denominator) * (circumference / 2);

  const animatedValue = useAnimatedValue(value, true, animationDurationMs);

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
          stroke={getProgressColor(animatedValue, isExperience)}
          pathLength={circumference}
          strokeDasharray={`${targetProgress} ${circumference / 2 - targetProgress}`}
          strokeDashoffset={0}
          strokeLinecap="butt"
          style={{
            transform: "rotate(180deg)",
            transformOrigin: "center",
            transition: `stroke-dasharray ${animationDurationMs}ms ease, stroke ${animationDurationMs}ms ease`,
          }}
        />
      </svg>
      <Box
        position="absolute"
        top="75%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          color: getProgressColor(animatedValue, isExperience),
        }}
      >
        <Typography
          variant="h4"
          component="span"
          fontWeight="bold"
          sx={{ whiteSpace: "nowrap" }}
        >
          {animatedValue}
          {isExperience ? " yrs" : ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillsRadialCategoryArc;

import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../utils/skillsData";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import {
  animationDurationMs,
  maxSkillLevel,
  maxYearsOfExperience,
} from "../utils/constants";
import InvertableImage from "./InvertableImage";

interface SkillProps {
  skill: SkillData;
  isYearsOfExperience: boolean;
  useLight: boolean;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.custom_palette.background.fillbar,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

const Skill: React.FC<SkillProps> = ({
  skill,
  isYearsOfExperience,
  useLight,
}) => {
  const { name, stat, srcLight, srcDark, years, invertIfLight } = skill;
  const rawValue = isYearsOfExperience ? years.length : stat;
  const src = useLight ? srcLight : srcDark;

  // 1) Clamp the rawValue based on whether it’s years or stat
  const clampedValue = isYearsOfExperience
    ? Math.min(rawValue, maxYearsOfExperience)
    : Math.min(rawValue, maxSkillLevel);

  const denominator = isYearsOfExperience
    ? maxYearsOfExperience
    : maxSkillLevel;
  const animatedValue = getAnimatedValue(clampedValue, animationDurationMs);
  const animatedTextValue = getAnimatedValue(rawValue, animationDurationMs);
  const roundedText = Math.round(animatedTextValue);
  const size = "50px";

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ mb: 2 }}
      wrap="nowrap"
    >
      {/* Skill icon */}
      <Grid
        item
        sx={{
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: size, height: size }}>
          <InvertableImage
            src={src}
            alt={name}
            invert={useLight && invertIfLight}
          />
        </Box>
      </Grid>

      {/* Skill name / numeric text / progress bar */}
      <Grid item xs sx={{ height: size }}>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={0.5}
          >
            <Typography variant="body1">{name}</Typography>
            <Typography
              variant="body1"
              sx={{
                color: getProgressColor(animatedValue, isYearsOfExperience),
              }}
            >
              {roundedText}
              {isYearsOfExperience ? (roundedText == 1 ? " yr" : " yrs") : ""}
            </Typography>
          </Box>
          <ColorfulLinearProgress
            variant="determinate"
            value={(animatedValue / denominator) * 100}
            sx={{
              [`& .${linearProgressClasses.bar}`]: {
                backgroundColor: getProgressColor(
                  animatedValue,
                  isYearsOfExperience,
                ),
                transition: `width ${animationDurationMs}ms ease`,
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skill;

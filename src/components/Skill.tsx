import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../utils/types";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs } from "../utils/constants";

interface SkillProps {
  skill: SkillData;
  isYearsOfExperience: boolean;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background.fillbar,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

const SkillImage = React.memo(
  ({ src, name }: { src: string; name: string }) => {
    return (
      <img
        src={`/src/assets/skills/${src}`}
        alt={name}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    );
  },
);

const Skill: React.FC<SkillProps> = ({ skill, isYearsOfExperience }) => {
  const { name, stat, src, year } = skill;
  const rawValue = isYearsOfExperience ? new Date().getFullYear() - year : stat;

  // 1) Clamp the rawValue based on whether it’s years or stat
  const maxExp = 15;
  const maxStat = 100;
  const clampedValue = isYearsOfExperience
    ? Math.min(rawValue, maxExp)
    : Math.min(rawValue, maxStat);

  const denominator = isYearsOfExperience ? maxExp : maxStat;
  const animatedValue = getAnimatedValue(clampedValue, animationDurationMs);
  const animatedTextValue = getAnimatedValue(rawValue, animationDurationMs);
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
          <SkillImage src={src} name={name} />
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
              {Math.round(animatedTextValue)}
              {isYearsOfExperience ? " yrs" : ""}
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

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
    backgroundColor: "#e0e0e0",
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
  const value = isYearsOfExperience ? new Date().getFullYear() - year : stat;
  const denominator = isYearsOfExperience ? 15 : 100;
  const size = "50px";
  const animatedValue = getAnimatedValue(value, animationDurationMs);

  return (
    <Grid
      container
      spacing={1.5}
      alignItems="center"
      sx={{ mb: 3 }}
      wrap="nowrap"
    >
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
              {Math.round(animatedValue)}
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

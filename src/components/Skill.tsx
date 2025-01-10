import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../utils/types";
import { getProgressColor } from "../utils/utils";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs } from "../utils/constants";

interface SkillProps {
  skill: SkillData;
  isYearsOfExperience: boolean;
  animate: boolean; // Add animate prop
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

const InvertableImage = React.memo(
  ({
    src,
    name,
    invert = false,
  }: {
    src: string;
    name: string;
    invert?: boolean;
  }) => {
    return (
      <img
        src={src}
        alt={name}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          filter: invert ? "invert(1)" : "",
        }}
      />
    );
  },
);

const Skill: React.FC<SkillProps> = ({
  skill,
  isYearsOfExperience,
  animate,
}) => {
  const { name, stat, srcLight, srcDark, year, invertIfLight } = skill;
  const rawValue = isYearsOfExperience ? new Date().getFullYear() - year : stat;
  const theme = useTheme();
  const themeName = theme.palette.type;
  const useLight = themeName !== "light";
  const src = useLight ? srcLight : srcDark;

  const maxExp = 15;
  const maxStat = 100;
  const clampedValue = isYearsOfExperience
    ? Math.min(rawValue, maxExp)
    : Math.min(rawValue, maxStat);

  const denominator = isYearsOfExperience ? maxExp : maxStat;
  const animatedValue = animate
    ? getAnimatedValue(clampedValue, animationDurationMs)
    : 0;
  const animatedTextValue = animate
    ? getAnimatedValue(rawValue, animationDurationMs)
    : 0;
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
            name={name}
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

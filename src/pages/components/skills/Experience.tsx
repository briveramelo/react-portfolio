import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../../../data/skillsData.ts";
import { getProgressColor } from "../../../utils/utils.ts";
import { useAnimatedValue } from "../../../utils/useAnimatedValue.ts";
import {
  starArcAnimationDurationMs,
  maxYearsOfExperience,
} from "../../../data/constants.ts";
import InvertableImage from "../reusable/InvertableImage.tsx";

interface ExperienceProps {
  skill: SkillData;
  useLight: boolean;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    // @ts-ignore
    backgroundColor: theme.customPalette.experience.empty,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

const Experience: React.FC<ExperienceProps> = ({ skill, useLight }) => {
  const { name, years, srcLight, srcDark, invertIfLight } = skill;
  const rawValue = years.length;
  const src = useLight ? srcLight : srcDark;
  const clampedValue = Math.min(rawValue, maxYearsOfExperience);
  const animatedValue = useAnimatedValue(
    clampedValue,
    starArcAnimationDurationMs,
  );
  const roundedText = Math.round(animatedValue);
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
        <InvertableImage
          src={src}
          alt={name}
          invert={useLight && !!invertIfLight}
        />
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
                color: getProgressColor(animatedValue, true),
              }}
            >
              {roundedText} {roundedText === 1 ? "yr" : "yrs"}
            </Typography>
          </Box>
          <ColorfulLinearProgress
            variant="determinate"
            value={(animatedValue / maxYearsOfExperience) * 100}
            sx={{
              [`& .${linearProgressClasses.bar}`]: {
                backgroundColor: getProgressColor(animatedValue, true),
                transition: `width ${starArcAnimationDurationMs}ms ease`,
                willChange: "width", //first time and subsequent must look great
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Experience;

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SkillData } from "../utils/skillsData";
import InvertableImage from "./InvertableImage";
import StarRating from "./StarRating";
import { getAnimatedValue } from "../utils/getAnimatedValue";
import { animationDurationMs, maxStarCount } from "../utils/constants";

interface SkillProps {
  skill: SkillData;
  useLight: boolean;
}

const Skill: React.FC<SkillProps> = ({ skill, useLight }) => {
  const { name, starCount, srcLight, srcDark, invertIfLight } = skill;
  const src = useLight ? srcLight : srcDark;
  const clampedValue = Math.min(starCount, maxStarCount);
  const animatedValue = getAnimatedValue(clampedValue, animationDurationMs);
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

      {/* Skill name */}
      <Grid item sx={{ display: "flex", alignItems: "center" }} xs={3.5}>
        <Typography variant="body1">{name}</Typography>
      </Grid>

      {/* Star rating */}
      <Grid item sx={{ display: "flex", alignItems: "center" }} xs={3}>
        <StarRating count={roundedText} />
      </Grid>
    </Grid>
  );
};

export default Skill;

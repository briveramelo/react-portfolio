import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SkillData } from "../../data/skillsData.ts";
import InvertableImage from "../InvertableImage.tsx";
import StarRating from "./StarRating.tsx";

interface SkillProps {
  skill: SkillData;
  useLight: boolean;
  isVisible: boolean;
}

const Skill: React.FC<SkillProps> = ({ skill, useLight, isVisible }) => {
  const { name, starCount, srcLight, srcDark, invertIfLight } = skill;
  const src = useLight ? srcLight : srcDark;
  const iconSize = "50px";
  const fixedGap = "20px"; // Fixed space between icon and name

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        mb: 2,
        width: "100%",
      }}
      wrap="nowrap"
    >
      {/* Skill Icon - Center Aligned */}
      <Grid
        item
        sx={{
          width: iconSize,
          height: iconSize,
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <InvertableImage
          src={src}
          alt={name}
          invert={useLight && !!invertIfLight}
        />
      </Grid>

      {/* Fixed gap between icon and name */}
      <Box sx={{ width: fixedGap, flexShrink: 0 }} />

      {/* Skill Name - Left Aligned */}
      <Grid
        item
        sx={{
          textAlign: "left",
          flexShrink: 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{ whiteSpace: "nowrap", minWidth: "60px" }}
        >
          {name}
        </Typography>
      </Grid>

      {/* Flexible space between name and stars */}
      <Grid
        item
        sx={{
          flexGrow: 1,
        }}
      />

      {/* Star Rating - Right Aligned */}
      <Grid
        item
        sx={{
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        <StarRating
          key={isVisible ? `${name}-visible` : `${name}-hidden`}
          count={starCount}
        />
      </Grid>
    </Grid>
  );
};

export default Skill;

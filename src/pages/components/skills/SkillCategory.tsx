import React from "react";
import { Box, Typography } from "@mui/material";
import SkillArc from "./SkillArc.tsx";
import Skill from "./Skill.tsx";
import { SkillCategoryData } from "../../../data/skillsData.ts";

interface SkillCategoryProps {
  skillCategory: SkillCategoryData;
  isSectionVisible: boolean;
  useLight: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  skillCategory,
  isSectionVisible,
  useLight,
}) => {
  const { category, skills } = skillCategory;

  const averageStars = React.useMemo(() => {
    if (!skills || skills.length === 0) return 0;
    const totalStars = skills.reduce((sum, skill) => sum + skill.starCount, 0);
    return totalStars / skills.length;
  }, [skills]);

  return (
    <Box
      sx={{
        mb: 2,
        position: "relative",
        textAlign: "center",
        contentAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", mb: 2, whiteSpace: "nowrap" }}
      >
        {category}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <SkillArc
          key={
            isSectionVisible
              ? `${category}-star-arc-visible`
              : `${category}-star-arc-hidden`
          }
          starCount={isSectionVisible ? averageStars : 0}
          isSectionVisible={isSectionVisible}
        />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        {skills.map((skill) => (
          <Skill
            key={`${skill.name}-star`}
            skill={skill}
            useLight={useLight}
            isSectionVisible={isSectionVisible}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

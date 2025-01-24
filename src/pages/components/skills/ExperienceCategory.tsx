import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceArc from "./ExperienceArc.tsx";
import Experience from "./Experience.tsx";
import { SkillCategoryData } from "../../../data/skillsData.ts";

interface ExperienceCategoryProps {
  skillCategory: SkillCategoryData;
  isVisible: boolean;
  useLight: boolean;
}

const ExperienceCategory: React.FC<ExperienceCategoryProps> = ({
  skillCategory,
  isVisible,
  useLight,
}) => {
  const { category, skills } = skillCategory;

  const averageYears = React.useMemo(() => {
    if (!skills || skills.length === 0) return 0;
    const totalYears = skills.reduce(
      (sum, skill) => sum + skill.years.length,
      0,
    );
    return totalYears / skills.length;
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
        <ExperienceArc
          key={`${category}-exp`}
          years={isVisible ? averageYears : 0}
        />
      </Box>
      <Box sx={{ pt: "20px" }}>
        {skills.map((skill) => (
          <Experience
            key={`${skill.name}-exp`}
            skill={{ ...skill, years: isVisible ? skill.years : [] }}
            useLight={useLight}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceCategory;

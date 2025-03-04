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

  const maxYears = React.useMemo(() => {
    if (!skills || skills.length === 0) return 0;
    return Math.max(...skills.map((skill) => skill.years.length));
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
          years={isVisible ? maxYears : 0}
          isVisible={isVisible}
        />
      </Box>
      <Box sx={{ pt: "30px" }}>
        {skills.map((skill) => (
          <Experience
            key={`${skill.name}-exp`}
            skill={skill}
            useLight={useLight}
            isVisible={isVisible}
          />
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(ExperienceCategory);

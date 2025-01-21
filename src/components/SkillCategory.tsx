import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceCategoryArc from "./ExperienceCategoryArc.tsx";
import Skill from "./Skill";
import Experience from "./Experience";
import { SkillCategoryData } from "../utils/skillsData";
import { cp } from "../utils/utils";
import SkillCategoryArc from "./SkillCategoryArc.tsx";

interface SkillCategoryProps {
  skillCategory: SkillCategoryData;
  isYearsOfExperience: boolean;
  isVisible: boolean;
  useLight: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  skillCategory,
  isYearsOfExperience,
  isVisible,
  useLight,
}) => {
  const { category, skills } = skillCategory;

  const average = React.useMemo(() => {
    if (!skills || skills.length === 0) return 0;

    if (isYearsOfExperience) {
      const totalYears = skills.reduce(
        (currentSum, skill) => currentSum + skill.years.length,
        0,
      );
      return totalYears / skills.length;
    }

    const totalStars = skills.reduce(
      (currentSum, skill) => currentSum + skill.starCount,
      0,
    );
    return totalStars / skills.length;
  }, [skills, isYearsOfExperience]);

  return (
    <Box sx={{ mb: 2, position: "relative", textAlign: "center" }}>
      <Box
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: cp("text.primary"),
          position: "absolute",
          top: "0px",
          left: "57.5%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          mt={-4}
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "10px",
            left: isYearsOfExperience ? "50%" : "57%",
            transform: isYearsOfExperience ? "translateX(-50%)" : "translateX(-50%)" ,
          }}
        >
          {isYearsOfExperience ? (
            <ExperienceCategoryArc key={`${category}-exp`} years={isVisible ? average : 0} />
          ) : (
            <SkillCategoryArc
              key={`${category}-star`}
              starCount={isVisible ? average : 0}
            />
          )}
        </Box>
      </Box>

      <Box sx={{ pt: "100px" }}>
        {skills.map((skill) => (
          isYearsOfExperience ? (
            <Experience
              key={`${skill.name}-exp`}
              skill={skill}
              useLight={useLight}
            />
          ) : (
            <Skill
              key={`${skill.name}-star`}
              skill={{ ...skill, starCount: isVisible ? skill.starCount : 0 }}
              useLight={useLight}
            />
          )
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

import React from "react";
import { Box, Typography } from "@mui/material";
import SkillsRadialCategoryArc from "./SkillsRadialCategoryArc";
import Skill from "./Skill";
import { SkillCategoryData } from "../utils/skillsData";
import { cp } from "../utils/utils";

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

    const totalSkill = skills.reduce(
      (currentSum, skill) => currentSum + skill.stat,
      0,
    );
    return totalSkill / skills.length;
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
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <SkillsRadialCategoryArc
            key={`${category}-${isYearsOfExperience ? "exp" : "stat"}`} // toggling the key unmounts the old, and mounts a new for a fresh animation start at 0
            value={isVisible ? average : 0}
            isYearsOfExperience={isYearsOfExperience}
          />
        </Box>
      </Box>

      <Box sx={{ pt: "100px" }}>
        {skills.map((skill) => (
          <Skill
            key={`${skill.name}-${isYearsOfExperience ? "exp" : "stat"}`} // toggling the key unmounts the old, and mounts a new for a fresh animation start at 0
            skill={{
              ...skill,
              stat: isVisible ? skill.stat : 0,
            }}
            isYearsOfExperience={isYearsOfExperience}
            useLight={useLight}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

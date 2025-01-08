import Skill from "./Skill";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import SkillsRadialCategoryArc from "./SkillsRadialCategoryArc";
import { StatsCategory } from "../utils/types";

interface SkillCategoryProps {
  categoryData: StatsCategory;
  isYearsOfExperience: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  categoryData,
  isYearsOfExperience,
}) => {
  const { category, stats } = categoryData;

  const average = useMemo(() => {
    if (!stats || stats.length === 0) return 0;
    if (isYearsOfExperience) {
      const currentYear = new Date().getFullYear();
      return Math.round(
        stats.reduce((acc, s) => acc + (currentYear - s.year), 0) /
          stats.length,
      );
    }
    return Math.round(stats.reduce((acc, s) => acc + s.stat, 0) / stats.length);
  }, [stats, isYearsOfExperience]);

  return (
    <Box sx={{ mb: 2, position: "relative", textAlign: "center" }}>
      <Box
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "text.primary",
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
            value={average}
            isYearsOfExperience={isYearsOfExperience}
          />
        </Box>
      </Box>

      <Box sx={{ pt: "100px" }}>
        {stats.map((skill) => (
          <Skill
            key={`${skill.name}-${isYearsOfExperience ? "exp" : "stat"}`} // toggling the key unmounts the old, and mounts a new for a fresh animation start at 0
            skill={skill}
            isYearsOfExperience={isYearsOfExperience}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

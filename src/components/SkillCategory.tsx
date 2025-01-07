import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Skill from "./Skill";
import { StatsCategory } from "../utils/types";
import SkillsRadialCategoryArc from "./SkillsRadialCategoryArc";

interface SkillCategoryProps {
  categoryData: StatsCategory;
  animate: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ categoryData }) => {
  const { category, stats } = categoryData;

  const average = useMemo(() => {
    if (!stats || stats.length === 0) return 0;
    return Math.round(stats.reduce((acc, s) => acc + s.stat, 0) / stats.length);
  }, [stats]);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" mb={2}>
        {category}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <SkillsRadialCategoryArc value={average} animate />
      </Box>
      {stats.map((skill, idx) => (
        <Skill key={idx} skill={skill} />
      ))}
    </Box>
  );
};

export default SkillCategory;

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
    <Box sx={{ mb: 2, position: "relative", textAlign: "center" }}>
      {/* Category Label */}
      <Box
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "text.light",
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

        {/* Radial Arc */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "10px", // Adjust this to control spacing from the category label
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <SkillsRadialCategoryArc value={average} animate />
        </Box>
      </Box>

      {/* Skills List */}
      <Box sx={{ pt: "100px" }}>
        {" "}
        {/* Add padding to avoid overlap */}
        {stats.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

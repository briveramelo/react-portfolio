import Skill from "./Skill";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import SkillsRadialCategoryArc from "./SkillsRadialCategoryArc";
import { StatsCategory } from "../utils/types";

interface SkillCategoryProps {
  categoryData: StatsCategory;
  animate: boolean;
  isExperience: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  categoryData,
  animate,
  isExperience,
}) => {
  const { category, stats } = categoryData;

  const average = useMemo(() => {
    if (!stats || stats.length === 0) return 0;
    if (isExperience) {
      const currentYear = new Date().getFullYear();
      return Math.round(
        stats.reduce((acc, s) => acc + (currentYear - s.year), 0) /
          stats.length,
      );
    }
    return Math.round(stats.reduce((acc, s) => acc + s.stat, 0) / stats.length);
  }, [stats, isExperience]);

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
            value={average}
            animate={animate}
            isExperience={isExperience}
          />
        </Box>
      </Box>

      <Box sx={{ pt: "100px" }}>
        {stats.map((skill, idx) => (
          <Skill key={idx} skill={skill} isExperience={isExperience} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;

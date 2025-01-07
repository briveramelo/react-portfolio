import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../utils/types";
import { getProgressColor } from "../utils/utils";

interface SkillProps {
  skill: SkillData;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e0e0e0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

const Skill: React.FC<SkillProps> = ({ skill }) => {
  const { name, stat, src, year } = skill;
  const size = "50px";

  return (
    <Grid
      container
      spacing={1.5}
      alignItems="center"
      sx={{ mb: 3 }}
      wrap="nowrap"
    >
      {/* Icon Column */}
      <Grid
        item
        sx={{
          width: `${size}`,
          height: `${size}`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: `${size}`,
            height: `${size}`,
          }}
        >
          <img
            src={`/src/assets/skills/${src}`} // Ensure correct path
            alt={name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Grid>

      {/* Fill Bar Column */}
      <Grid item xs sx={{ height: `${size}` }}>
        <Box>
          {/* Skill Name and Stat */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={0.5}
          >
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body1" sx={{ color: getProgressColor(stat) }}>
              {stat}
            </Typography>
          </Box>

          {/* Progress Bar */}
          <ColorfulLinearProgress
            variant="determinate"
            value={stat}
            sx={{
              [`& .${linearProgressClasses.bar}`]: {
                backgroundColor: getProgressColor(stat),
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skill;

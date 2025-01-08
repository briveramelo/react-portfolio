import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { statsData } from "../data/statsData";
import { Box, Button, Typography, Grid } from "@mui/material";

export const SkillsSection: React.FC = () => {
  const [isYearsOfExperience, setIsYearsOfExperience] =
    useState<boolean>(false);

  const toggleStat = () => {
    setIsYearsOfExperience((prev) => !prev);
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "background.dark",
        color: "text.primary",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ mb: 1 }}>
        Skills
      </Typography>
      <Button
        variant="contained"
        onClick={toggleStat}
        sx={{
          mb: 12,
        }}
      >
        {isYearsOfExperience ? "See Stats" : "See Years of Experience"}
      </Button>
      <Grid container spacing={9} justifyContent="center">
        {statsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
            <SkillCategory
              categoryData={category}
              isYearsOfExperience={!isYearsOfExperience}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

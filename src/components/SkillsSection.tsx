import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { statsData } from "../data/statsData";
import { Box, Button, Typography, Grid } from "@mui/material";

export const SkillsSection: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(true);

  const toggleAnimation = () => {
    setAnimate((prev) => !prev);
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
        onClick={toggleAnimation}
        sx={{
          mb: 12,
        }}
      >
        {animate ? "See Years of Experience" : "See Stats"}
      </Button>
      <Grid container spacing={9} justifyContent="center">
        {statsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
            <SkillCategory
              categoryData={category}
              animate={animate}
              isExperience={!animate}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

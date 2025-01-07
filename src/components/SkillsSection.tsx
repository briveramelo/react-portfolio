import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { statsData } from "../data/statsData";
import {Box, Button, Switch, Typography} from "@mui/material";

export const SkillsSection: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(true);

  const toggleAnimation = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <Box sx={{
        p: 2,
        backgroundColor: "background.dark",
        color: "text.light",
        py: 10,
    }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">Skills</Typography>
        <Box display="flex" alignItems="center">
          <Typography>Animate</Typography>
            <Button
                variant="contained"
                onClick={toggleAnimation}
            >
                {animate ? "See Years of Experience" : "See Stats"}
            </Button>
        </Box>
      </Box>

      {statsData.map((category, index) => (
        <SkillCategory key={index} categoryData={category} animate={animate} />
      ))}
    </Box>
  );
};

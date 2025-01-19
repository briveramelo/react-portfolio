import React, { forwardRef, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import BouncingButton from "../../components/BouncingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import SkillCategory from "../../components/SkillCategory";
import { skillsData } from "../../utils/skillsData";
import { ThemeMode, useCustomPalette } from "../../theme";

interface SkillsSectionProps {
  backgroundColor: string;
  textColor: string;
}

export const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ backgroundColor, textColor }, ref) => {
    const [isYearsOfExperience, setIsYearsOfExperience] =
      useState<boolean>(true);
    const sectionRef = useRef<HTMLDivElement>(null!);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.275 });
    const { mode } = useCustomPalette();
    const useLight = mode !== ThemeMode.Light;

    const toggleStat = () => {
      setIsYearsOfExperience((prev) => !prev);
    };

    return (
      <Box
        component="section"
        id="skills"
        sx={{
          p: 6,
          backgroundColor: backgroundColor,
          color: textColor,
          textAlign: "center",
          pt: 15,
          pb: 20,
        }}
        ref={ref}
      >
        <Typography variant="h1" sx={{ mb: 1 }}>
          Skills
        </Typography>
        <BouncingButton
          onClick={toggleStat}
          sx={{
            mb: 24,
            py: 2,
          }}
          variant="contained"
          numBounces={2}
          bounceDurationMs={1750}
        >
          <FontAwesomeIcon
            icon={isYearsOfExperience ? faStar : faCalendarCheck}
            style={{
              marginRight: "8px",
              marginTop: -3.25,
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            {isYearsOfExperience
              ? "See Self-Perceived Skill Level"
              : "See Years of Experience"}
          </Typography>
        </BouncingButton>
        <Grid container spacing={9} justifyContent="center" ref={sectionRef}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
              <SkillCategory
                skillCategory={category}
                isYearsOfExperience={isYearsOfExperience}
                isVisible={isVisible}
                useLight={useLight}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  },
);

import React, { forwardRef, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import BouncingButton from "../components/reusable/BouncingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import { skillsData } from "../../data/skillsData";
import { ThemeMode, useCustomPalette } from "../../theme";
import ExperienceCategory from "../components/skills/ExperienceCategory";
import SkillCategory from "../components/skills/SkillCategory";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface SkillsSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [isYearsOfExperience, setIsYearsOfExperience] =
      useState<boolean>(true);
    const sectionRef = useRef<HTMLDivElement>(null!);
    const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const { mode } = useCustomPalette();
    const useLight = mode !== ThemeMode.Light;

    const toggleStat = () => {
      setIsYearsOfExperience((prev) => !prev);
    };
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

    return (
      <Box
        component="section"
        id={id}
        sx={{
          backgroundColor: backgroundColor,
          color: textColor,
          textAlign: "center",
          pt: 15,
          pb: 20,
          overflowX: "hidden",
        }}
        ref={ref}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          {isYearsOfExperience ? "Experience" : "Skill Levels"}
        </Typography>
        <BouncingButton
          id="skill-experience-toggle"
          onClick={toggleStat}
          onMouseEnter={trackMouseEnter}
          onMouseLeave={trackMouseLeave}
          sx={{
            mb: 17,
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
            {isYearsOfExperience ? "See Skill Levels" : "See Experience"}
          </Typography>
        </BouncingButton>
        <Grid
          container
          rowSpacing={6}
          columnSpacing={12}
          px={9}
          justifyContent="center"
          ref={sectionRef}
        >
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
              {isYearsOfExperience ? (
                <ExperienceCategory
                  skillCategory={category}
                  isVisible={isSectionVisible}
                  useLight={useLight}
                />
              ) : (
                <SkillCategory
                  skillCategory={category}
                  isSectionVisible={isSectionVisible}
                  useLight={useLight}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  },
);

import React, { forwardRef, useCallback, useRef, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CalendarIcon from "@/assets/calendar-check.svg?react";
import StarIcon from "@/assets/star.svg?react";

import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { skillsData } from "../../data/skillsData";
import { ThemeMode, useCustomPalette } from "../../theme";
import ExperienceCategory from "./Skills/ExperienceCategory";
import SkillCategory from "./Skills/SkillCategory";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import { generateGravityBounceScaleKeyframes } from "../../utils/keyframeGenerator.ts";

interface SkillsSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

const bounceAnim = generateGravityBounceScaleKeyframes(1, 1.1, 20, 3);
const iconAnim = generateGravityBounceScaleKeyframes(1, 1.3, 20, 3);
export const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [isYearsOfExperience, setIsYearsOfExperience] =
      useState<boolean>(true);
    const [hasClickedButton, setHasClickedButton] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null!);
    const isSectionVisible = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    });
    const { mode } = useCustomPalette();
    const useLight = mode !== ThemeMode.Light;
    const iconStyle = {
      fill: hasClickedButton ? "white" : "orange",
      height: 20,
      marginRight: "8px",
      marginTop: 3.25,
    };

    const handleButtonClick = useCallback(() => {
      setHasClickedButton(true);
      setIsYearsOfExperience((prev) => !prev);
    }, []);
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
        <Typography variant="h1" sx={{ mb: 4 }}>
          {isYearsOfExperience ? "Experience" : "Skill Levels"}
        </Typography>
        <Button
          id="skill_experience_toggle"
          onClick={handleButtonClick}
          onMouseEnter={trackMouseEnter}
          onMouseLeave={trackMouseLeave}
          sx={{
            mb: 15,
            py: 2,
            animation: hasClickedButton ? "" : `${bounceAnim} 2s infinite`,
          }}
          variant="contained"
        >
          <Box
            sx={{
              animation: hasClickedButton ? "" : `${iconAnim} 2s infinite`,
              animationDelay: "-1s",
            }}
          >
            {isYearsOfExperience ? (
              <StarIcon style={iconStyle} />
            ) : (
              <CalendarIcon style={iconStyle} />
            )}
          </Box>
          <Typography variant="h6" fontWeight="bold">
            {isYearsOfExperience ? "See Skill Levels" : "See Experience"}
          </Typography>
        </Button>
        <Grid
          container
          rowSpacing={6}
          columnSpacing={12}
          px={9}
          justifyContent="center"
          ref={sectionRef}
        >
          {skillsData.map((category) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
              key={category.category}
            >
              <Box sx={{ display: isYearsOfExperience ? "block" : "none" }}>
                <ExperienceCategory
                  skillCategory={category}
                  isVisible={isSectionVisible && isYearsOfExperience}
                  useLight={useLight}
                />
              </Box>
              <Box sx={{ display: !isYearsOfExperience ? "block" : "none" }}>
                <SkillCategory
                  skillCategory={category}
                  isVisible={isSectionVisible && !isYearsOfExperience}
                  isSectionVisible={isSectionVisible}
                  useLight={useLight}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  },
);

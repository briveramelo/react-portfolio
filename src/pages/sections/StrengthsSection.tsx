import React, { forwardRef, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { darken } from "@mui/material/styles";
import CalendarIcon from "@/assets/misc/calendar-check.svg?react";
import StarIcon from "@/assets/misc/star.svg?react";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver";
import { skillsData } from "../../data/skillsData";
import { ThemeMode, useCustomPalette } from "../../theme/theme";
import ExperienceCategory from "./Strengths/ExperienceCategory";
import SkillCategory from "./Strengths/SkillCategory";

interface StrengthsSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const StrengthsSection = forwardRef<HTMLElement, StrengthsSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [isYearsOfExperience, setIsYearsOfExperience] = useState(true);

    const sectionRef = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    });

    const { mode, interactable, background, text } = useCustomPalette();
    const useLight = mode !== ThemeMode.Light;

    const buttonStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      backgroundColor: background.paper,
      color: text.paper,
      outline: "none",
      margin: 0.5,
      "&:hover": {
        backgroundColor: darken(background.paper, 0.2),
      },
      "&.Mui-selected": {
        backgroundColor: interactable.hovered,
        color: text.light,
        "&:hover": {
          backgroundColor: darken(interactable.hovered, 0.2),
        },
        "& svg": {
          color: text.light,
        },
        "&:hover svg": {
          color: text.light,
        },
      },
      "& svg": {
        color: text.paper,
      },
    };

    const iconStyle = {
      marginRight: 8,
      height: 20,
      marginTop: -2,
    };

    const handleToggle = (
      event: React.MouseEvent<HTMLElement>,
      newValue: string | null,
    ) => {
      if (newValue === null) return;
      setIsYearsOfExperience(newValue === "experience");
    };

    return (
      <Box
        component="section"
        id={id}
        sx={{
          backgroundColor,
          color: textColor,
          textAlign: "center",
          pt: 15,
          pb: 20,
          overflowX: "hidden",
        }}
        ref={ref}
      >
        <Typography variant="h1" sx={{ mb: 4 }}>
          Strengths
        </Typography>

        <ToggleButtonGroup
          exclusive
          value={isYearsOfExperience ? "experience" : "skill"}
          onChange={handleToggle}
          sx={{
            mb: 8,
            backgroundColor: background.paper,
            borderRadius: 2,
          }}
          className="pop-shadow"
        >
          <ToggleButton value="experience" sx={buttonStyle}>
            <CalendarIcon style={iconStyle} />
            Experience
          </ToggleButton>
          <ToggleButton value="skill" sx={buttonStyle}>
            <StarIcon style={iconStyle} />
            Skill
          </ToggleButton>
        </ToggleButtonGroup>

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
              {/* Show ExperienceCategory if isYearsOfExperience is true */}
              <Box sx={{ display: isYearsOfExperience ? "block" : "none" }}>
                <ExperienceCategory
                  skillCategory={category}
                  isVisible={isSectionVisible && isYearsOfExperience}
                  useLight={useLight}
                />
              </Box>

              {/* Show SkillCategory if isYearsOfExperience is false */}
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

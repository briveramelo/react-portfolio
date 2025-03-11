import React, { forwardRef, useRef, useState, useMemo } from "react";
import { Box, Typography, Grid } from "@mui/material";
import CalendarIcon from "@/assets/misc/calendar-check.svg?react";
import StarIcon from "@/assets/misc/star.svg?react";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver";
import { skillsData } from "../../data/skillsData";
import { ThemeMode, useCustomPalette } from "../../theme/theme";
import ExperienceCategory from "./Strengths/ExperienceCategory";
import SkillCategory from "./Strengths/SkillCategory";
import ToggleGroup, { ToggleOption } from "../components/ToggleGroup";

interface StrengthsSectionProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const StrengthsSection = forwardRef<HTMLElement, StrengthsSectionProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const [selectedToggle, setSelectedToggle] = useState<string>("experience");
    const sectionRef = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    });

    const { mode } = useCustomPalette();
    const useLight = mode !== ThemeMode.Light;

    const toggleOptions: ToggleOption[] = useMemo(
      () => [
        {
          value: "experience",
          label: "Experience",
          icon: <CalendarIcon />,
        },
        {
          value: "skill",
          label: "Skill",
          icon: <StarIcon />,
        },
      ],
      [],
    );

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

        <ToggleGroup
          options={toggleOptions}
          value={selectedToggle}
          onChange={setSelectedToggle}
        />
        <Box sx={{ mb: 8 }} />

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
              <Box
                sx={{
                  display: selectedToggle === "experience" ? "block" : "none",
                }}
              >
                <ExperienceCategory
                  skillCategory={category}
                  isVisible={
                    isSectionVisible && selectedToggle === "experience"
                  }
                  useLight={useLight}
                />
              </Box>
              <Box
                sx={{ display: selectedToggle === "skill" ? "block" : "none" }}
              >
                <SkillCategory
                  skillCategory={category}
                  isVisible={isSectionVisible && selectedToggle === "skill"}
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

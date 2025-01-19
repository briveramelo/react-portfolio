import React, { forwardRef } from "react";
import { Container, Typography, Box } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";
import { projectData } from "../../utils/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";

interface ProjectsProps {
  backgroundColor: string;
  textColor: string;
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor }, ref) => {
    const { mode } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;

    return (
      <Box
        component="section"
        id="work"
        sx={{
          py: 10,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        ref={ref}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: textColor,
                mb: 2,
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: textColor,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              These projects highlight my technical expertise, innovation,
              impact, and empathy.
            </Typography>
          </Box>

          {/* Project Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.title}
                projectData={project}
                flipped={index % 2 === 0}
                useLight={useLight}
              />
            ))}
          </Box>
        </Container>
      </Box>
    );
  },
);

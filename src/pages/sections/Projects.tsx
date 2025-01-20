import React, { forwardRef, useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectDetails } from "../../components/ProjectDetails";
import { Project, projectData } from "../../utils/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";

interface ProjectsProps {
  backgroundColor: string;
  textColor: string;
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor }, ref) => {
    const { mode } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;

    const [selectedProject, setSelectedProject] = useState<Project | null>(
      null,
    );
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false); // keeping separate from 'selectedProject === null' supports transition state nuances
    const [animationComplete, setAnimationComplete] = useState<boolean>(true);
    const slideDurationMs = 500;

    const handleCardClick = (project: Project) => {
      setSelectedProject(project);
      setIsProjectSelected(true);
      setAnimationComplete(false);
      setTimeout(() => {
        setAnimationComplete(true);
      }, slideDurationMs);
    };

    const handleCloseProjectDetails = () => {
      setIsProjectSelected(false);
      setAnimationComplete(false);
      setTimeout(() => {
        setSelectedProject(null);
        setAnimationComplete(true);
      }, slideDurationMs);
    };

    useEffect(() => {
      if (isProjectSelected && ref && "current" in ref && ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, [isProjectSelected, ref]);

    return (
      <Box
        component="section"
        id="work"
        sx={{
          py: 10,
          backgroundColor: backgroundColor,
          color: textColor,
          position: "relative",
          overflowX: "hidden",
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
                onClick={() => handleCardClick(project)}
                targetDestinationX={
                  isProjectSelected
                    ? index % 2 === 0
                      ? "-100vw"
                      : "100vw"
                    : "0"
                }
                animationComplete={animationComplete}
                slideDurationMs={slideDurationMs}
              />
            ))}
          </Box>
        </Container>

        {/* Project Details Component */}
        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            top: 200,
            left: 0,
            right: 0,
            bottom: 0,
            transform: `translateX(${isProjectSelected ? "0" : "100vw"})`,
            transition: `transform ${slideDurationMs}ms ease-in-out, opacity ${slideDurationMs}ms ease-out`,
            opacity: isProjectSelected ? 1 : 0,
          }}
        >
          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onClose={handleCloseProjectDetails}
            />
          )}
        </Container>
      </Box>
    );
  },
);

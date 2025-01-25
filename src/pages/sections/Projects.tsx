import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetails } from "../components/ProjectDetails";
import { Project, projectData } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import { Collapsible } from "../components/reusable/Collapsible.tsx";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const { mode } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;

    const [selectedProject, setSelectedProject] = useState<Project | null>(
      null,
    );
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false); // keeping separate from 'selectedProject === null' supports transition state nuances
    const [animationComplete, setAnimationComplete] = useState<boolean>(true);
    const slideDurationMs = 750;
    const sectionRef = ref as React.RefObject<HTMLElement>;

    const isSectionVisibleLead = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    }); //leading measure of if the section is visible
    const [isSectionVisibleLag, setIsSectionVisibleLag] =
      useState<boolean>(false); //lagging measure of if the section is visible

    useEffect(() => {
      setAnimationComplete(false);
      setIsSectionVisibleLag(isSectionVisibleLead);

      const timeoutId = setTimeout(() => {
        setAnimationComplete(true);
      }, slideDurationMs);

      return () => clearTimeout(timeoutId);
    }, [isSectionVisibleLead, slideDurationMs]);

    useEffect(() => {
      if (isProjectSelected && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [isProjectSelected, sectionRef]);

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
        id={id}
        sx={{
          py: 10,
          backgroundColor: backgroundColor,
          color: textColor,
          position: "relative",
          overflow: "hidden",
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
              Select a project to explore my technical expertise, innovation,
              impact, and empathy.
            </Typography>
          </Box>

          {/* Selected Project Details */}
          <Collapsible durationMs={slideDurationMs} isOpen={isProjectSelected}>
            <Box
              maxWidth="lg"
              sx={{
                position: "relative",
                transition: `opacity ${slideDurationMs}ms ease-out`,
                opacity: isProjectSelected ? 1 : 0,
              }}
            >
              {selectedProject && (
                <ProjectDetails
                  project={selectedProject}
                  onClose={handleCloseProjectDetails}
                />
              )}
            </Box>
          </Collapsible>

          {/* Project Cards */}
          <Collapsible durationMs={slideDurationMs} isOpen={!isProjectSelected}>
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
                    isProjectSelected || !isSectionVisibleLag
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
          </Collapsible>

        </Container>
      </Box>
    );
  },
);

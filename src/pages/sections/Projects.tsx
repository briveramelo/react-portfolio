import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetails } from "../components/ProjectDetails";
import { Project, projectData } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";

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
    const minHeight = 200;
    const bonusHeight = 1300;

    const [detailsHeight, setDetailsHeight] = useState(0);
    const [projectsHeight, setProjectsHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const projectsRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const sectionRef = ref as React.RefObject<HTMLElement>;

    const isSectionVisibleLead = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    }); //leading measure of if the section is visible
    const [isSectionVisibleLag, setIsSectionVisibleLag] =
      useState<boolean>(false); //lagging measure of if the section is visible

    useEffect(() => {
      window.addEventListener("resize", updateHeights);
      return () => {
        window.removeEventListener("resize", updateHeights);
      };
    }, []);
    useEffect(()=>{
      if(headerRef?.current){
        setHeaderHeight(headerRef.current.scrollHeight);
      }
    },[headerRef])

    // handle slide animation vars
    useEffect(() => {
      setAnimationComplete(false);
      setIsSectionVisibleLag(isSectionVisibleLead);

      const timeoutId = setTimeout(() => {
        setAnimationComplete(true);
      }, slideDurationMs);

      return () => clearTimeout(timeoutId);
    }, [isSectionVisibleLead, slideDurationMs]);

    // handle project selection scrolling
    useEffect(() => {
      if (isProjectSelected && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [isProjectSelected, sectionRef]);

    // handle project selection height adjustments
    const updateHeights = () => {
      if (projectsRef.current && detailsRef.current && headerRef.current) {
        setDetailsHeight(detailsRef.current.scrollHeight || 0);
        setProjectsHeight(isProjectSelected ? 0 : projectsRef.current.scrollHeight || 0);
        setHeaderHeight(headerRef.current.scrollHeight || 0);
      }
    };

    useEffect(() => {
      updateHeights();
    }, [isProjectSelected]);


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
          minHeight: `${minHeight}px`,
          maxHeight: isProjectSelected
            ? `${headerHeight + detailsHeight + bonusHeight}px`
            : `${headerHeight + projectsHeight + bonusHeight}px`,
          transition: `max-height ${slideDurationMs}ms ease-out !important`,
        }}
        ref={ref}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 6 }} ref={headerRef}>
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
          <Box
            maxWidth="lg"
            sx={{
              position: "relative",
              transition: `transform ${slideDurationMs}ms ease-out, opacity ${slideDurationMs}ms ease-out, height ${slideDurationMs}ms ease-out`,
              willChange: isSectionVisibleLead
                ? "transform, opacity, height"
                : "",
              opacity: isProjectSelected ? 1 : 0,
              height: 0,
            }}
          >
            {selectedProject && (
              <ProjectDetails
                ref={detailsRef}
                project={selectedProject}
                onClose={handleCloseProjectDetails}
              />
            )}
          </Box>

          {/* Project Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              height: {projectsHeight}
            }}
            maxWidth="lg"
            ref={projectsRef}
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
        </Container>
      </Box>
    );
  },
);

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetails } from "../components/ProjectDetails";
import { Project, projectData } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import { Collapsible } from "../components/reusable/Collapsible.tsx";
import { ProjectDetail, projectDetails } from "../../data/projectDetails.ts";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const { mode } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;

    const [selectedProjectDetails, setSelectedProjectDetails] =
      useState<ProjectDetail | null>(null);
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false); // keeping separate from 'selectedProjectDetails === null' supports transition state nuances
    const [isAnimationComplete, setIsAnimationComplete] =
      useState<boolean>(true);
    const slideDurationMs = 750;
    const sectionRef = ref as React.RefObject<HTMLElement>;
    const projectDetailsRef = useRef<HTMLDivElement>(null);

    const isSectionVisibleLead = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    }); //leading measure of if the section is visible
    const [isSectionVisibleLag, setIsSectionVisibleLag] =
      useState<boolean>(false); //lagging measure of if the section is visible

    useEffect(() => {
      setIsAnimationComplete(false);
      setIsSectionVisibleLag(isSectionVisibleLead);

      const timeoutId = setTimeout(() => {
        setIsAnimationComplete(true);
      }, slideDurationMs);

      return () => clearTimeout(timeoutId);
    }, [isSectionVisibleLead, slideDurationMs]);

    useEffect(() => {
      if (isProjectSelected && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [isProjectSelected, sectionRef]);

    const handleCardClick = (project: Project) => {
      const matchingDetails =
        projectDetails.find((pd) => project.title === pd.title) ?? null;
      if (matchingDetails === null) console.error("no matching details found");
      setSelectedProjectDetails(matchingDetails);
      setIsProjectSelected(true);
      setIsAnimationComplete(false);
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, slideDurationMs);
    };

    const handleCloseProjectDetails = () => {
      setIsProjectSelected(false);
      setIsAnimationComplete(false);
      setTimeout(() => {
        setSelectedProjectDetails(null);
        setIsAnimationComplete(true);
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
          minHeight: "500px",
        }}
        ref={ref}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {isProjectSelected && (
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    position: "absolute",
                    left: 0,
                    "&:hover": { transform: "scale(1.1) !important" },
                  }}
                  id={`close_project_${selectedProjectDetails?.title}`}
                  onClick={handleCloseProjectDetails}
                  className="pop-shadow"
                >
                  <CloseIcon sx={{ position: "absolute", left: 5 }} />
                  <Box sx={{ width: 20 }} />
                  <Typography>CLOSE</Typography>
                </Button>
              )}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: textColor,
                  mb: 2,
                }}
              >
                {isProjectSelected ? selectedProjectDetails?.title : "Projects"}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: textColor,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              {isProjectSelected
                ? selectedProjectDetails?.description
                : "Select a project to explore my technical expertise, innovation,\n" +
                  "                impact, and empathy."}
            </Typography>
          </Box>

          {/* Selected Project Details */}
          <Collapsible
            isSectionVisible={isSectionVisibleLead}
            durationMs={slideDurationMs}
            isOpen={isProjectSelected && isAnimationComplete}
            otherContentRef={projectDetailsRef}
          >
            <Box
              maxWidth="lg"
              width={"100%"}
              pr={6}
              sx={{
                position: "absolute", // Fixes position to prevent layout shifts //todo: will likely need to change this
                transition: `opacity ${slideDurationMs}ms ease-out`,
                opacity: isProjectSelected ? 1 : 0,
              }}
            >
              {selectedProjectDetails && (
                <ProjectDetails
                  project={selectedProjectDetails}
                  contentRef={projectDetailsRef}
                />
              )}
            </Box>
          </Collapsible>

          {/* Project Cards */}
          <Collapsible
            isSectionVisible={isSectionVisibleLead}
            durationMs={slideDurationMs}
            isOpen={!isProjectSelected && isAnimationComplete}
          >
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
                  animationComplete={isAnimationComplete}
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

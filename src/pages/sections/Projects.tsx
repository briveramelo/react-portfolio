import React, { forwardRef, useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetails } from "../components/ProjectDetails";
import { Project, projectData } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import { Collapsible } from "../components/reusable/Collapsible.tsx";
import { ProjectDetail, projectDetails } from "../../data/projectDetails.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import { HoverExpandContainer } from "../components/reusable/HoverExpandContainer.tsx";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const { mode } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedProjectDetails, setSelectedProjectDetails] =
      useState<ProjectDetail | null>(null);
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false); // keeping separate from 'selectedProjectDetails === null' supports transition state nuances
    const [hasProjectBeenSelected, setHasProjectBeenSelected] =
      useState<boolean>(false);
    const [isAnimationComplete, setIsAnimationComplete] =
      useState<boolean>(true);
    const slideDurationMs = 750;
    const sectionRef = ref as React.RefObject<HTMLElement>;
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

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
      setHasProjectBeenSelected(true);
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
          pt: 10,
          backgroundColor: backgroundColor,
          color: textColor,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
        }}
        ref={ref}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box
            maxWidth="lg"
            sx={{
              textAlign: "center",
              mb: 6,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {isProjectSelected && (
                <>
                  <Button
                    color="error"
                    variant="contained"
                    sx={{
                      position: isXs ? "static" : "absolute",
                      left: isXs ? "auto" : 0,
                      top: isXs ? "auto" : 14,
                      contentAlign: "center",
                      justifyContent: "center",
                      padding: "8px 8px",
                      gap: 2,
                      "&:hover": { transform: "scale(1.1) !important" },
                      pr: { xs: "8px", sm: "16px" },
                      mt: { xs: "-18px", sm: "0px" },
                    }}
                    id="close_project_button"
                    onClick={handleCloseProjectDetails}
                    onMouseEnter={trackMouseEnter}
                    onMouseLeave={trackMouseLeave}
                    className="pop-shadow"
                  >
                    <CloseIcon
                      id="close_project_x"
                      sx={{ fontSize: "1.25rem" }}
                    />
                    <Box
                      id="close_project_typography_wrapper"
                      sx={{
                        display: { xs: "none", sm: "inline" }, // Hide on extra-small screens
                        alignItems: "center",
                      }}
                    >
                      <Typography id="close_project_text">CLOSE</Typography>
                    </Box>
                  </Button>
                  <Box width={20}></Box>
                </>
              )}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: textColor,
                  mb: 2,
                  flexGrow: isXs ? 1 : "unset", // Allows text to take up remaining space in xs mode
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
                height: isXs ? "3rem" : "2rem",
              }}
            >
              {isProjectSelected
                ? selectedProjectDetails?.description
                : "Select a project to explore my technical expertise, innovation," +
                  "                impact, and empathy."}
            </Typography>
          </Box>

          {/* Project Cards */}
          <Collapsible durationMs={slideDurationMs} isOpen={!isProjectSelected}>
            <HoverExpandContainer
              maxFlex={2}
              minFlex={1}
              transitionDurationMs={600}
            >
              {projectData.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  projectData={project}
                  useLight={useLight}
                  onClick={() => handleCardClick(project)}
                  targetDestinationX={
                    isProjectSelected || !isSectionVisibleLag ? "-100vw" : "0"
                  }
                  animationComplete={isAnimationComplete}
                  slideDurationMs={slideDurationMs}
                  hasAnyBeenClicked={hasProjectBeenSelected}
                />
              ))}
            </HoverExpandContainer>
          </Collapsible>

          {/* Selected Project Details */}
          <Collapsible durationMs={slideDurationMs} isOpen={isProjectSelected}>
            <Box
              sx={{
                transition: `opacity ${slideDurationMs}ms ease-out`,
                opacity: isProjectSelected ? 1 : 0,
              }}
            >
              {selectedProjectDetails && (
                <ProjectDetails project={selectedProjectDetails} />
              )}
            </Box>
          </Collapsible>
        </Container>
      </Box>
    );
  },
);

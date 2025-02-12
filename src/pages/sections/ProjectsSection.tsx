import React, { forwardRef, useEffect, useLayoutEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectCard } from "./Projects/ProjectCard.tsx";
import ProjectDetails from "./Projects/ProjectDetails.tsx";
import { Project, projectData } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { Collapsible } from "../components/reusable/Collapsible.tsx";
import { ProjectDetail, projectDetails } from "../../data/projectDetails.ts";
import { HoverExpandContainer } from "../components/reusable/HoverExpandContainer.tsx";
import AnimatedCursor from "../components/specialty/AnimatedCursor.tsx";
import { toSlug } from "../../utils/utils.ts";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsProps>(
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
    const hoverKey = "project-card";

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

    const handleCardClick = (project: Project) => {
      const matchingDetails =
        projectDetails.find((pd) => project.title === pd.title) ?? null;
      if (matchingDetails === null) {
        console.error("no matching details found");
        handleCloseProjectDetails();
        return;
      }

      setSelectedProjectDetails(matchingDetails);
      setIsProjectSelected(true);
      setHasProjectBeenSelected(true);
      setIsAnimationComplete(false);
      window.location.href = `#projects-${toSlug(matchingDetails.title)}`;
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
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

    // Deep Link Handling
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (!hash.startsWith("#projects-")) {
          handleCloseProjectDetails();
          return;
        }

        const projectSlug = hash.replace("#projects-", "");
        const matchingProject = projectData.find(
          (project) => toSlug(project.title) === projectSlug,
        );
        if (matchingProject) {
          handleCardClick(matchingProject);
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      handleHashChange();

      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

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
                  flexGrow: isXs ? 1 : "unset", // Allows text to take up remaining space in xs mode
                }}
              >
                {isProjectSelected ? selectedProjectDetails?.title : "Projects"}
              </Typography>
            </Box>
          </Box>

          {/* Project Cards */}
          <Collapsible durationMs={slideDurationMs} isOpen={!isProjectSelected}>
            <HoverExpandContainer
              maxFlex={2}
              minFlex={1}
              transitionDurationMs={600}
            >
              {projectData.map((project) => (
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
                  hoverKey={hoverKey}
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

        {isSectionVisibleLead && (
          <AnimatedCursor
            size={25}
            durationMs={2000}
            color={"orange"}
            hoverKey={hoverKey}
          />
        )}
      </Box>
    );
  },
);

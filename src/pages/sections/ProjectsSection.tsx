import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectCard } from "./Projects/ProjectCard.tsx";
import ProjectDetails from "./Projects/ProjectDetails.tsx";
import { Project, allProjects } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme/theme.ts";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { Collapsible } from "../components/Collapsible.tsx";
import AnimatedCursor from "../components/AnimatedCursor.tsx";
import { toSlug } from "../../utils/utils.ts";
import { FocusedProjectCard } from "./Projects/FocusedProjectCard.tsx";
import { useCursor } from "../../context/CursorContext.tsx";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const { mode, interactable } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;
    const isTouchDevice = useMediaQuery("(pointer: coarse)");
    const theme = useTheme();
    const hoverKey = "project-card";
    const { onHoverChange } = useCursor();
    const onHoverProject = (project: Project, mouseEnter: boolean) => {
      onHoverChange(hoverKey, mouseEnter);
      setHoveredProject(mouseEnter ? project : null);
    };
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedProject, setSelectedProject] = useState<Project | null>(
      null,
    );
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false);
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

    const [hasProjectBeenClicked, setHasProjectBeenClicked] =
      useState<boolean>(false);
    const hasMediaNextBeenClickedRef = useRef<boolean>(false);
    const [isAnimationComplete, setIsAnimationComplete] =
      useState<boolean>(true);
    const slideDurationMs = 750;
    const sectionRef = ref as React.RefObject<HTMLElement>;

    const isSectionVisibleLead = useIntersectionObserver(sectionRef, {
      threshold: 0.1,
    });
    const [isSectionVisibleLag, setIsSectionVisibleLag] =
      useState<boolean>(false);

    useEffect(() => {
      setIsAnimationComplete(false);
      setIsSectionVisibleLag(isSectionVisibleLead);

      const timeoutId = setTimeout(() => {
        setIsAnimationComplete(true);
      }, slideDurationMs);

      return () => clearTimeout(timeoutId);
    }, [isSectionVisibleLead, slideDurationMs]);

    const handleCardClick = (
      project: Project,
      triggeredByClick: boolean = true,
    ) => {
      setSelectedProject(project);
      setIsProjectSelected(true);
      if (triggeredByClick) {
        setHasProjectBeenClicked(true);
      }

      setIsAnimationComplete(false);
      window.location.href = `#projects-${toSlug(project.title)}`;
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, slideDurationMs);
    };

    const handleCloseProjectDetails = () => {
      setIsProjectSelected(false);
      setIsAnimationComplete(false);
      setTimeout(() => {
        setSelectedProject(null);
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
        const matchingProject = allProjects.find(
          (project) => toSlug(project.title) === projectSlug,
        );
        if (matchingProject) {
          handleCardClick(matchingProject, false);
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
          py: 10,
          backgroundColor: backgroundColor,
          color: textColor,
          position: "relative",
          overflowY: "hidden",
          minHeight: "100vh",
        }}
        ref={ref}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box
            maxWidth="xl"
            sx={{
              textAlign: "center",
              mb: { xs: 6, sm: 2 },
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
                  <Box
                    sx={{
                      backgroundColor: interactable.idle,
                      color: "white",
                      position: "absolute",
                      borderRadius: "4px",
                      cursor: "pointer",
                      left: isXs ? 4 : 0,
                      top: isXs ? 32 : 14,
                      contentAlign: "center",
                      justifyContent: "center",
                      padding: "8px 8px",
                      gap: 2,
                      "&:hover": { backgroundColor: interactable.hovered },
                      pr: { xs: "8px", sm: "16px" },
                      mt: { xs: "-18px", sm: "0px" },
                      whiteSpace: "nowrap",
                      display: "flex",
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
                        display: { xs: "none", sm: "inline" },
                        alignItems: "center",
                      }}
                    >
                      <Typography id="close_project_text">CLOSE</Typography>
                    </Box>
                  </Box>
                  <Box width={20}></Box>
                </>
              )}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: textColor,
                  flexGrow: isXs ? 1 : "unset",
                }}
              >
                {isProjectSelected ? selectedProject?.title : "Projects"}
              </Typography>
            </Box>
          </Box>

          {/* Project Cards */}
          <Collapsible durationMs={slideDurationMs} isOpen={!isProjectSelected}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 450px))",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  useLight={useLight}
                  onClick={() => handleCardClick(project)}
                  targetDestinationX={
                    isProjectSelected || !isSectionVisibleLag ? "-100vw" : "0"
                  }
                  animationComplete={isAnimationComplete}
                  slideDurationMs={slideDurationMs}
                  onHover={onHoverProject}
                  isAnyHovered={hoveredProject !== null}
                  hoverKey={hoverKey}
                />
              ))}
            </Box>
          </Collapsible>

          {/* Selected Project Details */}
          <Collapsible durationMs={slideDurationMs} isOpen={isProjectSelected}>
            <Box
              sx={{
                transition: `opacity ${slideDurationMs}ms ease-out`,
                opacity: isProjectSelected ? 1 : 0,
              }}
            >
              {selectedProject && (
                <ProjectDetails
                  project={selectedProject}
                  hasMediaNextBeenClickedRef={hasMediaNextBeenClickedRef}
                />
              )}
            </Box>
          </Collapsible>
        </Container>

        {!isTouchDevice && isSectionVisibleLead && (
          <FocusedProjectCard project={hoveredProject} useLight={useLight} />
        )}

        {/* Only hide the animated cursor after an explicit click */}
        {isSectionVisibleLead && !hasProjectBeenClicked && (
          <AnimatedCursor
            size={25}
            durationMs={2000}
            color={interactable.highlighted}
            hoverKey={hoverKey}
          />
        )}
      </Box>
    );
  },
);

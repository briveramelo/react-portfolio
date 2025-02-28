import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectDetails from "./Projects/ProjectDetails.tsx";
import { Project, allProjects } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme/theme.ts";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { Collapsible } from "../components/Collapsible.tsx";
import AnimatedCursor from "../components/AnimatedCursor.tsx";
import { toSlug } from "../../utils/utils.ts";
import { FocusedProjectCard } from "./Projects/FocusedProjectCard.tsx";
import { useCursor } from "../../context/CursorContext.tsx";
import { MediaControlProvider } from "../components/MediaCarousel/MediaControlContext.tsx";
import ProjectGroup from "./Projects/ProjectGroup.tsx";

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
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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
      isHashChange: boolean = true,
    ) => {
      setSelectedProject(project);
      setIsProjectSelected(true);

      setIsAnimationComplete(false);
      if (!isHashChange) {
        window.location.href = `#projects-${toSlug(project.title)}`;
      }
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, slideDurationMs);
    };

    const handleCloseProjectDetails = () => {
      setIsProjectSelected(false);
      setIsAnimationComplete(false);
      if (selectedProject) {
        // Revert the URL to the canonical project hash
        window.history.replaceState(
          null,
          "",
          `#projects-${toSlug(selectedProject.title)}`,
        );
      }
      // Now push the closed project state
      window.location.href = "#projects";
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setSelectedProject(null);
        setIsAnimationComplete(true);
      }, slideDurationMs);
    };

    // Deep Link Handling
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash;
        const regex = /^#projects-(.+?)(?:-(\d+))?$/;
        const match = hash.match(regex);
        if (!match) return;

        const projectSlug = match[1];
        const matchingProject = allProjects.find(
          (project) => toSlug(project.title) === projectSlug,
        );
        if (matchingProject) {
          handleCardClick(matchingProject, true);
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      handleHashChange();

      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
      <MediaControlProvider>
        <Box
          component="section"
          id={id}
          sx={{
            py: 10,
            backgroundColor: backgroundColor,
            color: textColor,
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            width: "100%",
          }}
          ref={ref}
        >
          {/* Header */}
          <Box
            maxWidth="lg"
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
                      ml: "22px",
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

          {/* Project Card Groups */}
          <Box sx={{ width: "100%", px: 4 }}>
            <Box
              sx={{
                overflow: "visible",
              }}
            >
              <Collapsible
                durationMs={slideDurationMs}
                isOpen={!isProjectSelected}
              >
                <ProjectGroup
                  label="Featured"
                  projects={allProjects.filter(
                    (project) => project.focus === "Featured",
                  )}
                  direction="left"
                  useLight={useLight}
                  isProjectSelected={isProjectSelected}
                  isSectionVisibleLag={isSectionVisibleLag}
                  isAnimationComplete={isAnimationComplete}
                  slideDurationMs={slideDurationMs}
                  onHoverProject={onHoverProject}
                  hoveredProject={hoveredProject}
                  handleCardClick={handleCardClick}
                />
                <Box height={"40px"} />
                <ProjectGroup
                  label="Archived"
                  projects={allProjects.filter(
                    (project) => project.focus === "Archived",
                  )}
                  direction="right"
                  useLight={useLight}
                  isProjectSelected={isProjectSelected}
                  isSectionVisibleLag={isSectionVisibleLag}
                  isAnimationComplete={isAnimationComplete}
                  slideDurationMs={slideDurationMs}
                  onHoverProject={onHoverProject}
                  hoveredProject={hoveredProject}
                  handleCardClick={handleCardClick}
                />
              </Collapsible>
            </Box>
          </Box>

          {/* Selected Project Details */}
          <Box sx={{ width: "100%", px: 6, mt: isMobile ? 5 : 0 }}>
            <Collapsible
              durationMs={slideDurationMs}
              isOpen={isProjectSelected}
            >
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
          </Box>

          {!isTouchDevice &&
            isSectionVisibleLead &&
            selectedProject === null && (
              <FocusedProjectCard
                project={hoveredProject}
                useLight={useLight}
              />
            )}

          {/* Only hide the animated cursor after an explicit click */}
          {isSectionVisibleLead && (
            <AnimatedCursor
              size={25}
              durationMs={2000}
              color={interactable.highlighted}
              hoverKey={hoverKey}
            />
          )}
        </Box>
      </MediaControlProvider>
    );
  },
);

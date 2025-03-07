import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectDetails from "./Projects/ProjectDetails.tsx";
import { Project, allProjects } from "../../data/projectData";
import { ThemeMode, useCustomPalette } from "../../theme/theme.ts";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver.ts";
import { Collapsible } from "../components/Collapsible.tsx";
import { toSlug } from "../../utils/utils.ts";
import { MediaControlProvider } from "../components/MediaCarousel/Controls/MediaControlContext.tsx";
import ProjectGroup from "./Projects/ProjectGroup.tsx";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useNavigation } from "../../utils/hooks/useNavigation.ts";

interface ProjectsProps {
  backgroundColor: string;
  id: string;
  textColor: string;
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsProps>(
  ({ backgroundColor, textColor, id }, ref) => {
    const { mode, interactable } = useCustomPalette();
    const useLight = mode === ThemeMode.Dark;
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const { projectSlug } = useParams<{ projectSlug?: string }>();
    const navigate = useNavigate();
    const handleNavClick = useNavigation();

    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedProject, setSelectedProject] = useState<Project | null>(
      null,
    );
    const [isProjectSelected, setIsProjectSelected] = useState<boolean>(false);

    const [isAnimating, setIsAnimating] = useState<boolean>(true);
    const slideDurationMs = 750;
    const sectionRef = ref as React.RefObject<HTMLElement>;

    const isSectionVisibleLead = useIntersectionObserver(sectionRef, {
      threshold: [0.025],
    });
    const [isSectionVisibleLag, setIsSectionVisibleLag] =
      useState<boolean>(false);

    useEffect(() => {
      setIsAnimating(true);
      setIsSectionVisibleLag(isSectionVisibleLead);

      const timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, slideDurationMs);

      return () => clearTimeout(timeoutId);
    }, [isSectionVisibleLead, slideDurationMs]);

    const handleCardClick = (project: Project) => {
      setSelectedProject(project);
      setIsProjectSelected(true);

      setIsAnimating(true);
      navigate(`/projects/${toSlug(project.title)}`, { state: location.state });
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsAnimating(false);
      }, slideDurationMs);
    };

    const handleCloseProjectDetails = (useNav: boolean = true) => {
      setIsProjectSelected(false);
      setIsAnimating(true);
      if (location.state?.returnTo) {
        handleNavClick(location.state.returnTo);
      } else if (useNav) {
        handleNavClick("/projects");
      }
      setTimeout(() => {
        setSelectedProject(null);
        setIsAnimating(false);
      }, slideDurationMs);
    };

    // Deep Link Handling
    useEffect(() => {
      if (projectSlug === undefined) {
        handleCloseProjectDetails(false);
      }

      const matchingProject = allProjects.find(
        (project) => toSlug(project.title) === projectSlug,
      );

      if (matchingProject) {
        handleCardClick(matchingProject);
      }
    }, [projectSlug]);

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
                    onClick={() => handleCloseProjectDetails()}
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
                  isSectionVisible={isSectionVisibleLag}
                  isAnimating={isAnimating}
                  slideDurationMs={slideDurationMs}
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
                  isSectionVisible={isSectionVisibleLag}
                  isAnimating={isAnimating}
                  slideDurationMs={slideDurationMs}
                  handleCardClick={handleCardClick}
                />
              </Collapsible>
            </Box>
          </Box>

          {/* Selected Project Details */}
          <Box
            sx={{ width: "100%", px: isMobile ? 1 : 6, mt: isMobile ? 5 : 0 }}
          >
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
                  <ProjectDetails project={selectedProject} />
                )}
              </Box>
            </Collapsible>
          </Box>
        </Box>
      </MediaControlProvider>
    );
  },
);

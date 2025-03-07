import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Project } from "../../../data/projectData";
import { SpinningCardProvider } from "../../components/SpinningCardContext.tsx";
import ProjectCard from "./ProjectCard.tsx";
import { Flipper, Flipped } from "react-flip-toolkit";

interface ProjectGroupProps {
  label: string;
  projects: Project[];
  direction: "left" | "right";
  useLight: boolean;
  isProjectSelected: boolean;
  isSectionVisible: boolean;
  isAnimating: boolean;
  slideDurationMs: number;
  handleCardClick: (project: Project) => void;
}

const ProjectGroup: React.FC<ProjectGroupProps> = ({
  label,
  projects,
  direction,
  useLight,
  isProjectSelected,
  isSectionVisible,
  isAnimating,
  slideDurationMs,
  handleCardClick,
}) => {
  const [targetDestinationX, setTargetDestinationX] = useState<string>(
    isProjectSelected || !isSectionVisible
      ? direction === "left"
        ? "-100vw"
        : "100vw"
      : "0",
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHoverable, setIsHoverable] = useState<boolean>(false);

  useEffect(() => {
    setTargetDestinationX(
      isProjectSelected || !isSectionVisible
        ? direction === "left"
          ? "-100vw"
          : "100vw"
        : "0",
    );
    const isOnScreen = targetDestinationX === "0";
    setIsVisible(isOnScreen || isAnimating);
    setIsHoverable(isOnScreen && !isAnimating);
  }, [
    isAnimating,
    targetDestinationX,
    isProjectSelected,
    isSectionVisible,
    direction,
  ]);

  return (
    <Box
      sx={{
        position: "relative",
        transition: `transform ${slideDurationMs}ms ease-in-out`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: isHoverable ? "all" : "none",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "left", margin: 0, mb: 1 }}>
        {label}
      </Typography>
      <Flipper flipKey={projects.map((p) => p.title).join("-")}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fit, minmax(350px, 1fr))",
              sm: "repeat(auto-fit, minmax(390px, 1fr))",
            },
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <Flipped key={project.title} flipId={project.title}>
              {/* this div is key for effective animation */}
              <div>
                <SpinningCardProvider>
                  <ProjectCard
                    project={project}
                    useLight={useLight}
                    isSliding={isAnimating}
                    onClick={() => handleCardClick(project)}
                    isSectionVisible={isSectionVisible}
                  />
                </SpinningCardProvider>
              </div>
            </Flipped>
          ))}
        </Box>
      </Flipper>
    </Box>
  );
};

export default ProjectGroup;

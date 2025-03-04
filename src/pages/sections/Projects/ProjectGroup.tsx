import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard.tsx";
import { Project } from "../../../data/projectData";

interface ProjectGroupProps {
  label: string;
  projects: Project[];
  direction: "left" | "right";
  useLight: boolean;
  isProjectSelected: boolean;
  isSectionVisibleLag: boolean;
  isAnimationComplete: boolean;
  slideDurationMs: number;
  handleCardClick: (project: Project) => void;
}

const ProjectGroup: React.FC<ProjectGroupProps> = ({
  label,
  projects,
  direction,
  useLight,
  isProjectSelected,
  isSectionVisibleLag,
  isAnimationComplete,
  slideDurationMs,
  handleCardClick,
}) => {
  // Compute the slide offset for the entire group.
  const targetDestinationX =
    isProjectSelected || !isSectionVisibleLag
      ? direction === "left"
        ? "-100vw"
        : "100vw"
      : "0";

  // Determine if the group is on screen.
  const isOnScreen = targetDestinationX === "0";
  const isHoverable = isOnScreen && isAnimationComplete;

  return (
    <Box
      sx={{
        position: "relative",
        transition: `transform ${slideDurationMs}ms ease-in-out`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        visibility: !isOnScreen && isAnimationComplete ? "hidden" : "visible",
        pointerEvents: isHoverable ? "all" : "none",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "left", margin: 0, mb: 1 }}>
        {label}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            useLight={useLight}
            onClick={() => handleCardClick(project)}
            isSectionVisible={isSectionVisibleLag}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectGroup;

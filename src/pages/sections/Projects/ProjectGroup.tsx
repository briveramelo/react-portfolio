import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard.tsx";
import { Project } from "../../../data/projectData";
import { SpinningCardHandle } from "../../components/SpinningCard.tsx";

interface ProjectGroupProps {
  label: string;
  projects: Project[];
  direction: "left" | "right";
  useLight: boolean;
  isProjectSelected: boolean;
  isSectionVisibleLead: boolean;
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
  isSectionVisibleLead,
  isAnimating,
  slideDurationMs,
  handleCardClick,
}) => {
  const [targetDestinationX, setTargetDestinationX] = useState<string>(
    isProjectSelected || !isSectionVisibleLead
      ? direction === "left"
        ? "-100vw"
        : "100vw"
      : "0",
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHoverable, setIsHoverable] = useState<boolean>(false);

  useEffect(() => {
    setTargetDestinationX(
      isProjectSelected || !isSectionVisibleLead
        ? direction === "left"
          ? "-100vw"
          : "100vw"
        : "0",
    );
    const isOnScreen = targetDestinationX === "0";
    setIsVisible(isOnScreen || isAnimating);
    setIsHoverable(isOnScreen && !isAnimating);
  }, [isAnimating, targetDestinationX]);

  return (
    <Box
      sx={{
        position: "relative",
        transition: `transform ${slideDurationMs}ms ease-in-out`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        visibility: isVisible ? "isVisible" : "hidden",
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
            isSliding={isAnimating}
            onClick={() => handleCardClick(project)}
            isSectionVisible={isSectionVisibleLead}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectGroup;

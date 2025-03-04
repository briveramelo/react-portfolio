import React, { useState, useRef, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking";
import { SpinningCard } from "../../components/SpinningCard.tsx";
import { ProjectCardFront } from "./ProjectCardFront.tsx";
import { USER_TRANSITION_DURATION_MS } from "../Hero/heroHelpers.ts";
import { Project } from "../../../data/projectData.ts";
import { ProjectCardBack } from "./ProjectCardBack.tsx";

interface ProjectCardProps {
  project: Project;
  useLight: boolean;
  onClick: () => void;
  onHover: (project: Project, mouseEnter: boolean) => void;
  isAnyHovered: boolean;
  isSectionVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  useLight,
  onClick,
  onHover,
  isAnyHovered,
  isSectionVisible,
}) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [instantFlip, setInstantFlip] = useState<boolean>(false);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    USER_TRANSITION_DURATION_MS,
  );
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking(
    true,
    USER_TRANSITION_DURATION_MS,
  );
  const handleSpin = (deltaDeg: number) => {
    setTargetRotationDeg((prev) => prev + deltaDeg);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  const imageWidth = useMemo(() => ({ sm: "400px", xs: "375px" }), []);
  const imageHeight = useMemo(() => ({ sm: "600px", xs: "562.5px" }), []);
  const borderRadius = 20;

  return (
    <SpinningCard
      isCardAnimating={false}
      onSpin={handleSpin}
      containerRef={containerRef}
      containerProps={{
        sx: {
          perspective: "1000px",
          display: "block",
          position: "relative",
          width: imageWidth,
          height: imageHeight,
          borderRadius: `${borderRadius}px`,
        },
      }}
      targetRotationDeg={targetRotationDeg}
      instantFlip={instantFlip}
      transitionDurationMs={transitionDurationMs}
      isSectionVisible={isSectionVisible}
      isTouchDevice={isTouchDevice}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      borderRadius={borderRadius}
      onClickCard={(event) => {
        onHover(project, false);
        trackPointerLeave(event);
        onClick();
      }}
      onPointerEnterCard={(event) => {
        trackPointerEnter();
        onHover(project, true);
      }}
      onPointerLeaveCard={(event) => {
        trackPointerLeave(event);
        onHover(project, false);
      }}
      id={`project_card_${project.title}`}
    >
      <ProjectCardFront
        project={project}
        useLight={useLight}
        onClick={onClick}
        onHover={onHover}
      />
      {isSectionVisible && (
        <ProjectCardBack
          project={project}
          useLight={useLight}
          onClick={onClick}
          onHover={onHover}
        />
      )}
    </SpinningCard>
  );
};

export default ProjectCard;

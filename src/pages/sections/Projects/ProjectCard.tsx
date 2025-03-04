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
  isSectionVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  useLight,
  onClick,
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

  const cardWidth = "100%";
  const cardHeight = "auto";
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
          width: cardWidth,
          height: cardHeight,
          borderRadius: `${borderRadius}px`,
        },
      }}
      targetRotationDeg={targetRotationDeg}
      instantFlip={instantFlip}
      transitionDurationMs={transitionDurationMs}
      isSectionVisible={isSectionVisible}
      isTouchDevice={isTouchDevice}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      borderRadius={borderRadius}
      onClickCard={(event) => {
        trackPointerLeave(event);
        onClick();
      }}
      id={`project_card_${project.title}`}
    >
      {isSectionVisible && (
        <ProjectCardBack project={project} useLight={useLight} />
      )}
      <ProjectCardFront project={project} useLight={useLight} />
    </SpinningCard>
  );
};

export default ProjectCard;

import React, { useState, useRef, useLayoutEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
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
  const [transitionDurationMs] = useState<number>(USER_TRANSITION_DURATION_MS);
  const [cardHeight, setCardHeight] = useState<string | number>("100%");
  const handleSpin = (deltaDeg: number) => {
    setTargetRotationDeg((prev) => prev + deltaDeg);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const cardWidth = "100%";
  const borderRadius = "8px";

  useLayoutEffect(() => {
    if (!frontRef.current || !backRef.current) return;

    const measureHeights = () => {
      if (cardHeight !== "100%") return;

      const frontHeight = frontRef.current!.getBoundingClientRect().height;
      const backHeight = backRef.current!.getBoundingClientRect().height;
      const newHeight = Math.max(frontHeight, backHeight);
      setCardHeight(newHeight);
    };
    const setFlexHeights = () => {
      setCardHeight("100%");
    };

    measureHeights();
    window.addEventListener("resize", setFlexHeights);

    return () => {
      window.removeEventListener("resize", setFlexHeights);
    };
  }, [project, isSectionVisible, cardHeight]);

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
          borderRadius,
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
        onClick();
      }}
      id={`project_card_${project.title}`}
    >
      <ProjectCardBack
        project={project}
        useLight={useLight}
        height={cardHeight}
        borderRadius={borderRadius}
        ref={backRef}
      />
      <ProjectCardFront
        project={project}
        useLight={useLight}
        height={cardHeight}
        borderRadius={borderRadius}
        ref={frontRef}
      />
    </SpinningCard>
  );
};

export default ProjectCard;

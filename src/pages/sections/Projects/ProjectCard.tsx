import React, { useState, useRef, useLayoutEffect, MouseEvent } from "react";
import { useMediaQuery } from "@mui/material";
import {
  SpinningCard,
  SpinningCardHandle,
} from "../../components/SpinningCard.tsx";
import { ProjectCardFront } from "./ProjectCardFront.tsx";
import { USER_TRANSITION_DURATION_MS } from "../Hero/heroHelpers.ts";
import { Project } from "../../../data/projectData.ts";
import { ProjectCardBack } from "./ProjectCardBack.tsx";

interface ProjectCardProps {
  project: Project;
  useLight: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  isSectionVisible: boolean;
  isSliding: boolean;
}

export const ProjectCard = React.forwardRef<
  SpinningCardHandle,
  ProjectCardProps
>(({ project, useLight, isSliding, isSectionVisible, onClick }, ref) => {
  const [transitionDurationMs] = useState<number>(USER_TRANSITION_DURATION_MS);
  const [cardHeight, setCardHeight] = useState<string | number>("100%");

  const containerRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const spinningCardRef = useRef<SpinningCardHandle>(null);

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
      ref={spinningCardRef}
      isListeningForEvents={!isSliding && isSectionVisible}
      visibleLagTimeMs={800}
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
      transitionDurationMs={transitionDurationMs}
      isSectionVisible={isSectionVisible}
      isTouchDevice={isTouchDevice}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      borderRadius={borderRadius}
      id={`project_card_${project.title}`}
    >
      <ProjectCardBack
        ref={backRef}
        project={project}
        useLight={useLight}
        height={cardHeight}
        borderRadius={borderRadius}
        onClick={(event) => {
          spinningCardRef?.current?.onClear(event);
          onClick(event);
        }}
      />
      <ProjectCardFront
        ref={frontRef}
        project={project}
        useLight={useLight}
        height={cardHeight}
        borderRadius={borderRadius}
      />
    </SpinningCard>
  );
});

export default ProjectCard;

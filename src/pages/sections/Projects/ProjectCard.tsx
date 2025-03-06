import React, {
  useState,
  useRef,
  useLayoutEffect,
  MouseEvent,
  useEffect,
  useCallback,
} from "react";
import { SpinningCard } from "../../components/SpinningCard.tsx";
import { ProjectCardFront } from "./ProjectCardFront.tsx";
import { Project } from "../../../data/projectData.ts";
import { ProjectCardBack } from "./ProjectCardBack.tsx";
import { useSpinningCard } from "../../components/SpinningCardContext.tsx";

interface ProjectCardProps {
  project: Project;
  useLight: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  isSectionVisible: boolean;
  isSliding: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  useLight,
  onClick,
  isSectionVisible,
  isSliding,
}) => {
  const [cardHeight, setCardHeight] = useState<string | number>("100%");
  const {
    onReset,
    setIsCardAnimating,
    targetRotationDeg,
    setTargetRotationDeg,
  } = useSpinningCard();
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const cardWidth = "100%";
  const borderRadius = "8px";

  useEffect(() => {
    setIsCardAnimating(isSliding);
    if (isSliding && targetRotationDeg % 360 !== 0) {
      setTargetRotationDeg((prev) => prev + 180);
    }
  }, [isSliding, setIsCardAnimating]);

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

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCardClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        onReset();
        timeoutRef.current = null;
      }, 1000);

      onClick(event);
    },
    [onReset, onClick],
  );

  return (
    <SpinningCard
      id={`project_card_${project.title}`}
      isSectionVisible={isSectionVisible}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      borderRadius={borderRadius}
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
    >
      <ProjectCardBack
        ref={backRef}
        project={project}
        useLight={useLight}
        height={cardHeight}
        borderRadius={borderRadius}
        onClick={handleCardClick}
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
};

export default ProjectCard;

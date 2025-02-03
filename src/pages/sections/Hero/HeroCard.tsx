import React, { useState, useRef, MouseEvent, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import SparkFuseOutline from "./SparkFuseOutline.tsx";
import { FlareEffect } from "./FlareEffect.tsx";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import {
  ANIMATED_TRANSITION_DURATION_MS,
  ANIMATION_START_DELAY_MS,
  FIRST_ANIMATED_TRANSITION_DURATION_MS,
  FIRST_ANIMATION_START_DELAY_MS,
  USER_TRANSITION_DURATION_MS,
} from "./HeroHelpers";
import HeroCardBack from "./HeroCardBack.tsx";
import HeroCardFront from "./HeroCardFront.tsx";

interface HeroCardProps {
  isSectionVisible: boolean;
  onHoveredChange: (value: boolean) => void;
}

const HeroCard: React.FC<HeroCardProps> = ({
  isSectionVisible,
  onHoveredChange,
}) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [instantFlip, setInstantFlip] = useState<boolean>(false);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    FIRST_ANIMATED_TRANSITION_DURATION_MS,
  );
  const [isFirstCardAnimation, setIsFirstCardAnimation] =
    useState<boolean>(true);
  const [isCardAnimating, setIsCardAnimating] = useState<boolean>(true);

  const { trackMouseEnter, trackMouseLeave, hasBeenHovered } = useHoverTracking(
    USER_TRANSITION_DURATION_MS,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const entrySideRef = useRef<"left" | "right" | null>(null);
  const startTimeRefMs = useRef<number | null>(null);

  const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;
    const sequence = [
      {
        delay: isFirstCardAnimation
          ? FIRST_ANIMATION_START_DELAY_MS
          : ANIMATION_START_DELAY_MS,
        action: () => {
          setTransitionDurationMs(
            isFirstCardAnimation
              ? FIRST_ANIMATED_TRANSITION_DURATION_MS
              : ANIMATED_TRANSITION_DURATION_MS,
          );
          setTargetRotationDeg(360);
        },
      },
      {
        delay: isFirstCardAnimation
          ? FIRST_ANIMATED_TRANSITION_DURATION_MS
          : ANIMATED_TRANSITION_DURATION_MS,
        action: () => {
          setInstantFlip(true);
          setTargetRotationDeg(0);
          setTransitionDurationMs(USER_TRANSITION_DURATION_MS);
          requestAnimationFrame(() => {
            setInstantFlip(false);
            setIsCardAnimating(false);
            setIsFirstCardAnimation(false);
          });
        },
      },
    ];

    sequence.forEach((step) => {
      accumulatedDelay += step.delay;
      timers.push(setTimeout(step.action, accumulatedDelay));
    });

    return timers;
  };

  useEffect(() => {
    if (isSectionVisible) {
      // Reset the card state
      setIsCardAnimating(true);
      setInstantFlip(true);
      setTargetRotationDeg(0);
      requestAnimationFrame(() => setInstantFlip(false));

      // Clear existing timers
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = runSpinSequence();
    } else {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
      setIsCardAnimating(false);
      setInstantFlip(true);
      setTargetRotationDeg(0);
      requestAnimationFrame(() => setInstantFlip(false));
    }

    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    };
  }, [isSectionVisible]);

  const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    return event.clientX - left > width / 2;
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
    if (isCardAnimating) return;

    const entrySide = isRight(event) ? "right" : "left";
    entrySideRef.current = entrySide;

    setTargetRotationDeg((prev) => prev + (entrySide === "right" ? -180 : 180));
    startTimeRefMs.current = performance.now();
    trackMouseEnter();
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
    if (isCardAnimating || !entrySideRef.current) return;

    const exitSide = isRight(event) ? "right" : "left";
    const initialEffect = entrySideRef.current === "right" ? -180 : 180;
    const additional =
      exitSide === entrySideRef.current ? -initialEffect : initialEffect;
    setTargetRotationDeg((prev) => prev + additional);

    startTimeRefMs.current = null;
    entrySideRef.current = null;
    trackMouseLeave(event);
  };

  useEffect(() => {
    onHoveredChange(hasBeenHovered);
  }, [hasBeenHovered, onHoveredChange]);

  // Responsive image sizes
  const imageWidth = useMemo(() => ({ sm: "400px", xs: "375px" }), []);
  const imageHeight = useMemo(() => ({ sm: "600px", xs: "562.5px" }), []);

  return (
    <Box
      sx={{
        perspective: "1000px",
        display: "block",
        position: "relative",
      }}
      id="home_avatar_card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <Box
        sx={{
          width: imageWidth,
          height: imageHeight,
          position: "relative",
          transformStyle: "preserve-3d",
          transition: instantFlip
            ? "none"
            : `transform ${transitionDurationMs}ms ease`,
          transform: `rotateY(${targetRotationDeg}deg)`,
          pointerEvents: "none",
          willChange: isSectionVisible ? "transform" : undefined,
        }}
      >
        <SparkFuseOutline
          borderRadius={8}
          fuseHeadLoopDurationMs={2000}
          sparkBurstCount={20}
          sparkBurstDurationMs={2500}
          animationEnabled={!hasBeenHovered}
          width={imageWidth}
          height={imageHeight}
        />
        <FlareEffect
          containerRef={containerRef}
          durationMs={15000}
          phaseOffset={Math.PI * 0.275}
          xOffset={-40}
          yAmpFactor={0.65}
        />

        <HeroCardFront hasBeenHovered={hasBeenHovered} />
        <HeroCardBack />
      </Box>
    </Box>
  );
};

export default HeroCard;

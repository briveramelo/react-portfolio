import React, { useState, useRef, MouseEvent, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import FuseEffect from "./Fuse/FuseEffect";
import { FlareEffect } from "./Flare/FlareEffect";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking";
import {
  ANIMATED_TRANSITION_DURATION_MS,
  ANIMATION_START_DELAY_MS,
  FIRST_ANIMATED_TRANSITION_DURATION_MS,
  FIRST_ANIMATION_START_DELAY_MS,
  PROJECTILE_DURATION_MS,
  USER_TRANSITION_DURATION_MS,
} from "./heroHelpers";
import HeroCardBack from "./HeroCardBack";
import HeroCardFront from "./HeroCardFront";
import { useCardMetrics } from "./Fuse/useCardMetrics";

interface HeroCardProps {
  isSectionVisible: boolean;
  onHoveredChange: (value: boolean) => void;
}

const PERSPECTIVE = 1000;

const HeroCard: React.FC<HeroCardProps> = ({
  isSectionVisible,
  onHoveredChange,
}) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [startRotationDeg, setStartRotationDeg] = useState<number>(0);
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
  const [isFuseActive, setIsFuseActive] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const entrySideRef = useRef<"left" | "right" | null>(null);
  // This ref records when a transition begins.
  const transitionStartTimeRef = useRef<number>(performance.now());

  // Spin sequence for the card animation.
  const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;
    const sequence = [
      {
        delay: isFirstCardAnimation
          ? FIRST_ANIMATION_START_DELAY_MS
          : ANIMATION_START_DELAY_MS,
        action: () => {
          setStartRotationDeg(targetRotationDeg);
          transitionStartTimeRef.current = performance.now();
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
          setStartRotationDeg(targetRotationDeg);
          transitionStartTimeRef.current = performance.now();
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
      // Reset card state.
      setIsCardAnimating(true);
      setInstantFlip(true);
      setTargetRotationDeg(0);
      requestAnimationFrame(() => setInstantFlip(false));

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

  useEffect(() => {
    setTimeout(() => {
      if (!hasBeenHovered) return;
      setIsFuseActive(false);
    }, PROJECTILE_DURATION_MS);
  }, [hasBeenHovered]);

  const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    return event.clientX - left > width / 2;
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
    if (isCardAnimating) return;

    const entrySide = isRight(event) ? "right" : "left";
    entrySideRef.current = entrySide;

    setStartRotationDeg(targetRotationDeg);
    setTargetRotationDeg((prev) => prev + (entrySide === "right" ? -180 : 180));
    transitionStartTimeRef.current = performance.now();
    trackMouseEnter();
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
    if (isCardAnimating || !entrySideRef.current) return;

    const exitSide = isRight(event) ? "right" : "left";
    const initialEffect = entrySideRef.current === "right" ? -180 : 180;
    const additional =
      exitSide === entrySideRef.current ? -initialEffect : initialEffect;
    setStartRotationDeg(targetRotationDeg);
    setTargetRotationDeg((prev) => prev + additional);
    transitionStartTimeRef.current = performance.now();
    entrySideRef.current = null;
    trackMouseLeave(event);
  };

  useEffect(() => {
    onHoveredChange(hasBeenHovered);
  }, [hasBeenHovered, onHoveredChange]);

  const imageWidth = useMemo(() => ({ sm: "400px", xs: "375px" }), []);
  const imageHeight = useMemo(() => ({ sm: "600px", xs: "562.5px" }), []);
  const cardMetrics = useCardMetrics(containerRef);

  // Bundle the card animation parameters as a memoized object.
  const cardAnimationParams = useMemo(
    () => ({
      borderRadius: 8,
      width: imageWidth,
      height: imageHeight,
      startRotationDeg,
      targetRotationDeg,
      transitionStartTime: transitionStartTimeRef.current,
      transitionDurationMs,
      perspective: PERSPECTIVE,
    }),
    [
      imageWidth,
      imageHeight,
      startRotationDeg,
      targetRotationDeg,
      transitionDurationMs,
    ],
  );

  return (
    <Box
      sx={{
        perspective: `${PERSPECTIVE}px`,
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
        {isFuseActive && (
          <FuseEffect
            // Passing the bundled card animation parameters.
            {...cardAnimationParams}
            cardMetrics={cardMetrics}
            fuseHeadLoopDurationMs={3000}
            sparksPerBurst={2}
            burstIntervalMs={50}
            sparkBurstDurationMs={PROJECTILE_DURATION_MS}
            animationEnabled={!hasBeenHovered}
          />
        )}
        <FlareEffect
          containerRef={containerRef}
          durationMs={15000}
          phaseOffset={Math.PI * 0.275}
          xOffset={-40}
          yAmpFactor={0.65}
        />

        <HeroCardFront hasBeenHovered={hasBeenHovered} />
        {isSectionVisible && <HeroCardBack />}
      </Box>
    </Box>
  );
};

export default HeroCard;

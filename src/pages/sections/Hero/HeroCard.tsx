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

interface HeroCardProps {
  isSectionVisible: boolean;
  onHoveredChange: (value: boolean) => void;
  isFirstCardAnimationRef: React.MutableRefObject<boolean>;
}

const HeroCard: React.FC<HeroCardProps> = ({
  isSectionVisible,
  onHoveredChange,
  isFirstCardAnimationRef,
}) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [instantFlip, setInstantFlip] = useState<boolean>(false);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    FIRST_ANIMATED_TRANSITION_DURATION_MS,
  );
  const [isCardAnimating, setIsCardAnimating] = useState<boolean>(true);

  const { trackMouseEnter, trackMouseLeave, hasBeenHovered } = useHoverTracking(
    USER_TRANSITION_DURATION_MS,
  );
  const [isFuseActive, setIsFuseActive] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const entrySideRef = useRef<"left" | "right" | null>(null);
  const transitionStartTimeRef = useRef<number>(performance.now());

  // Spin sequence for the card animation.
  const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;

    const sequence = [
      {
        delay: isFirstCardAnimationRef.current
          ? FIRST_ANIMATION_START_DELAY_MS
          : ANIMATION_START_DELAY_MS,
        action: () => {
          transitionStartTimeRef.current = performance.now();
          setTransitionDurationMs(
            isFirstCardAnimationRef.current
              ? FIRST_ANIMATED_TRANSITION_DURATION_MS
              : ANIMATED_TRANSITION_DURATION_MS,
          );
          setTargetRotationDeg(360);
        },
      },
      {
        delay: isFirstCardAnimationRef.current
          ? FIRST_ANIMATED_TRANSITION_DURATION_MS
          : ANIMATED_TRANSITION_DURATION_MS,
        action: () => {
          setInstantFlip(true);
          transitionStartTimeRef.current = performance.now();
          setTargetRotationDeg(0);
          setTransitionDurationMs(USER_TRANSITION_DURATION_MS);
          requestAnimationFrame(() => {
            setInstantFlip(false);
            setIsCardAnimating(false);
            isFirstCardAnimationRef.current = false;
            if (!hasBeenHovered) {
              setIsFuseActive(true);
            }
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
      if (!isSectionVisible || hasBeenHovered) {
        setIsFuseActive(false);
      }
    }, PROJECTILE_DURATION_MS);
  }, [hasBeenHovered, isSectionVisible]);

  const isRight = (event: MouseEvent<HTMLDivElement>): boolean => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    return event.clientX - left > width / 2;
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
    if (isCardAnimating) return;

    const entrySide = isRight(event) ? "right" : "left";
    entrySideRef.current = entrySide;

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

  return (
    <Box
      sx={{
        perspective: `1000px`,
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
          willChange: isSectionVisible ? "transform" : undefined,
        }}
      >
        {isFuseActive && (
          <FuseEffect
            width={imageWidth}
            height={imageHeight}
            borderRadius={20}
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

        <HeroCardFront
          showRotationIcon={isSectionVisible && !isCardAnimating}
          hasBeenHovered={hasBeenHovered}
        />
        {isSectionVisible && <HeroCardBack />}
      </Box>
    </Box>
  );
};

export default HeroCard;

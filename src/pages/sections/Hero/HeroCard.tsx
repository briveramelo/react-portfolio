import React, { useState, useRef, useEffect, useMemo } from "react";
import { useMediaQuery, Box } from "@mui/material";
import FuseEffect from "./Fuse/FuseEffect";
import { FlareEffect } from "./Flare/FlareEffect";
import HeroCardBack from "./HeroCardBack";
import HeroCardFront from "./HeroCardFront";
import {
  ANIMATED_TRANSITION_DURATION_MS,
  ANIMATION_START_DELAY_MS,
  FIRST_ANIMATED_TRANSITION_DURATION_MS,
  FIRST_ANIMATION_START_DELAY_MS,
  PROJECTILE_DURATION_MS,
  USER_TRANSITION_DURATION_MS,
} from "./heroHelpers";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking";
import { useCustomPalette } from "../../../theme/theme";
import { SpinningCard } from "../../components/SpinningCard.tsx";

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
  const [isFuseActive, setIsFuseActive] = useState<boolean>(false);

  const { hasBeenHovered } = useHoverTracking(
    true,
    USER_TRANSITION_DURATION_MS,
  );
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { interactable } = useCustomPalette();

  const containerRef = useRef<HTMLDivElement>(null);
  const transitionStartTimeMsRef = useRef<number>(performance.now());

  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  // Initial spin sequence for the card.
  const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;

    const sequence = [
      {
        delay: isFirstCardAnimationRef.current
          ? FIRST_ANIMATION_START_DELAY_MS
          : ANIMATION_START_DELAY_MS,
        action: () => {
          transitionStartTimeMsRef.current = performance.now();
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
          transitionStartTimeMsRef.current = performance.now();
          setTargetRotationDeg(0);
          setTransitionDurationMs(USER_TRANSITION_DURATION_MS);

          // Force reflow to mitigate rendering issues.
          requestAnimationFrame(() => {
            containerRef.current?.getBoundingClientRect();
            requestAnimationFrame(() => {
              setInstantFlip(false);
              setIsCardAnimating(false);
              isFirstCardAnimationRef.current = false;
              if (!hasBeenHovered) {
                setIsFuseActive(true);
              }
            });
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

  useEffect(() => {
    onHoveredChange(hasBeenHovered);
  }, [hasBeenHovered, onHoveredChange]);

  // onSpin callback: updates the card's rotation
  const handleSpin = (deltaDeg: number) => {
    if (isCardAnimating) return;
    setTargetRotationDeg((prev) => prev + deltaDeg);
    transitionStartTimeMsRef.current = performance.now();
  };

  const imageWidth = useMemo(() => ({ sm: "400px", xs: "375px" }), []);
  const imageHeight = useMemo(() => ({ sm: "600px", xs: "562.5px" }), []);
  const borderRadius = 20;

  return (
    <SpinningCard
      isCardAnimating={isCardAnimating}
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
    >
      {isFuseActive && (
        <FuseEffect
          width={imageWidth}
          height={imageHeight}
          borderRadius={borderRadius}
          fuseHeadLoopDurationMs={3000}
          sparksPerBurst={2}
          burstIntervalMs={50}
          sparkBurstDurationMs={PROJECTILE_DURATION_MS}
          animationEnabled={!hasBeenHovered}
          color={interactable.highlighted}
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
    </SpinningCard>
  );
};

export default HeroCard;

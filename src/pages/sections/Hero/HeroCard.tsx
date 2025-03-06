import React, { useState, useRef, useEffect, useMemo } from "react";
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
import { useCustomPalette } from "../../../theme/theme";
import { SpinningCard } from "../../components/SpinningCard.tsx";
import { useSpinningCard } from "../../components/SpinningCardContext.tsx";

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
  const {
    setTransitionDurationMs,
    setTargetRotationDeg,
    containerRef,
    isCardAnimating,
    setIsCardAnimating,
    hasBeenHovered,
  } = useSpinningCard();
  const [isFuseActive, setIsFuseActive] = useState<boolean>(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { interactable } = useCustomPalette();

  // Initial spin sequence.
  const runSpinSequence = (): ReturnType<typeof setTimeout>[] => {
    setIsCardAnimating(true);
    const timers: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;

    const sequence = [
      {
        delay: isFirstCardAnimationRef.current
          ? FIRST_ANIMATION_START_DELAY_MS
          : ANIMATION_START_DELAY_MS,
        action: () => {
          setTransitionDurationMs(
            isFirstCardAnimationRef.current
              ? FIRST_ANIMATED_TRANSITION_DURATION_MS
              : ANIMATED_TRANSITION_DURATION_MS,
          );
          setTargetRotationDeg((prev) => prev + 360);
        },
      },
      {
        delay: isFirstCardAnimationRef.current
          ? FIRST_ANIMATED_TRANSITION_DURATION_MS
          : ANIMATED_TRANSITION_DURATION_MS,
        action: () => {
          setTransitionDurationMs(USER_TRANSITION_DURATION_MS);
          isFirstCardAnimationRef.current = false;
          setIsCardAnimating(false);
          if (!hasBeenHovered) {
            setIsFuseActive(true);
          }
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
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = runSpinSequence();
    } else {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
      setIsCardAnimating(false);
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

  const cardWidth = useMemo(() => ({ sm: "400px", xs: "375px" }), []);
  const cardHeight = useMemo(() => ({ sm: "600px", xs: "562.5px" }), []);
  const borderRadius = "20px";
  const borderRadiusPx = 20;

  return (
    <SpinningCard
      id={"home_avatar_card_enter"}
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
      isSectionVisible={isSectionVisible}
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      borderRadius={borderRadius}
    >
      {isFuseActive && (
        <FuseEffect
          width={cardWidth}
          height={cardHeight}
          borderRadius={borderRadiusPx}
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

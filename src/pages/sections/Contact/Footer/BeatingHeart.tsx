import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import "./BeatingHeart.css";
import { useHoverTracking } from "../../../../utils/tracking/hooks/useHoverTracking.ts";

interface BeatingHeartProps {
  heartTriggerRef?: React.RefObject<HTMLButtonElement>;
}

export const BeatingHeart: React.FC<BeatingHeartProps> = ({
  heartTriggerRef,
}) => {
  const heartRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Key to force animation re-trigger
  const [isHovered, setIsHovered] = useState(false);
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  const minHeartRateBPM = 40.0;
  const maxHeartRateBPM = 160.0;
  const fixedAnimationDurationSec = 0.5;
  const boxSize = 75;
  const minHRVPercent = 0.05;
  const maxHRVPercent = 0.2;

  const calculatePauseDuration = useCallback(() => {
    const heartRateBPM = isHovered ? maxHeartRateBPM : minHeartRateBPM;
    const totalCycleDurationSec = 60.0 / heartRateBPM;
    const basePauseDurationSec =
      totalCycleDurationSec - fixedAnimationDurationSec;
    const variabilityFactor =
      Math.random() * (maxHRVPercent - minHRVPercent) + minHRVPercent;
    const variation =
      basePauseDurationSec * variabilityFactor * (Math.random() < 0.5 ? -1 : 1);
    return basePauseDurationSec + variation;
  }, [isHovered]);

  const startHeartbeat = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel any ongoing heartbeat cycle
    }
    setAnimationKey((prev) => prev + 1);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    const pauseDurationSec = calculatePauseDuration();
    timeoutRef.current = window.setTimeout(
      startHeartbeat,
      pauseDurationSec * 1000,
    );
  }, [calculatePauseDuration, startHeartbeat]);

  const addHoverListeners = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const handlePointerEnter = () => {
        setIsHovered(true);
        startHeartbeat();
      };

      const handlePointerLeave = (event: Event) => {
        setIsHovered(false);
      };

      element.addEventListener("pointerenter", handlePointerEnter);
      element.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        element.removeEventListener("pointerenter", handlePointerEnter);
        element.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    [startHeartbeat],
  );

  useEffect(() => {
    if (heartRef.current) {
      const removeListeners = addHoverListeners(heartRef.current);
      return () => removeListeners && removeListeners();
    }
  }, [addHoverListeners]);

  useEffect(() => {
    if (heartTriggerRef?.current) {
      const removeListeners = addHoverListeners(heartTriggerRef.current);
      return () => removeListeners && removeListeners();
    }
  }, [heartTriggerRef, addHoverListeners]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Box
      display="inline-block"
      style={{
        width: boxSize,
        height: boxSize,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* invisible box to catch interactions */}
      <Box
        ref={heartRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          cursor: "default",
          zIndex: 2,
        }}
        id="beating_heart_ref"
        onPointerEnter={trackPointerEnter}
        onPointerLeave={trackPointerLeave}
      />
      <Box
        style={{
          position: "absolute",
          transition: "transform 0.15s ease-in-out",
          cursor: "default",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
          transformOrigin: "center",
        }}
      >
        <Box
          style={{
            fontSize: "60px",
            animation: `cardiacCycle ${fixedAnimationDurationSec}s linear 1`,
            cursor: "default",
            transformOrigin: `${boxSize / 2}px ${boxSize / 2}px`,
            // willChange no need to optimize. looks fine
          }}
          key={animationKey} // Forces re-render
          onAnimationEnd={handleAnimationEnd}
          aria-label="Beating Heart"
          id="beating_heart"
        >
          🫀
        </Box>
      </Box>
    </Box>
  );
};

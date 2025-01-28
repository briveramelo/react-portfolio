import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import "./BeatingHeart.css";
import { useHoverTracking } from "../../../tracking/useHoverTracking.ts";
import { useIntersectionObserver } from "../../../utils/useIntersectionObserver.ts";

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
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  const minHeartRateBPM = 40.0;
  const maxHeartRateBPM = 160.0;
  const fixedAnimationDurationSec = 0.5;

  const calculatePauseDuration = useCallback(() => {
    const heartRateBPM = isHovered ? maxHeartRateBPM : minHeartRateBPM;
    const totalCycleDurationSec = 60.0 / heartRateBPM;
    return totalCycleDurationSec - fixedAnimationDurationSec;
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

      const handleMouseEnter = () => {
        setIsHovered(true);
        startHeartbeat();
      };

      const handleMouseLeave = (event: Event) => {
        setIsHovered(false);
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    [startHeartbeat, trackMouseEnter, trackMouseLeave],
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
        width: "70px",
        height: "70px",
        textAlign: "center",
        position: "relative",
      }}
    >
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
        onMouseEnter={trackMouseEnter}
        onMouseLeave={trackMouseLeave}
      />
      <Box
        style={{
          animation: `cardiacCycle ${fixedAnimationDurationSec}s linear 1`,
          fontSize: isHovered ? "70px" : "60px",
          lineHeight: "70px",
          transition: "font-size 0.15s ease-in-out",
          cursor: "default",
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
  );
};

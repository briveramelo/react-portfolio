import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import "./BeatingHeart.css";

interface BeatingHeartProps {
  heartTriggerRef?: React.RefObject<HTMLButtonElement>;
}

export const BeatingHeart: React.FC<BeatingHeartProps> = ({ heartTriggerRef }) => {
  const heartRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Key to force animation re-trigger
  const [isHovered, setIsHovered] = useState(false);

  const minHeartRateBPM = 40.0;
  const maxHeartRateBPM = 160.0;
  const fixedAnimationSec = 0.5;

  const calculatePauseDuration = useCallback(() => {
    const heartRateBPM = isHovered ? maxHeartRateBPM : minHeartRateBPM;
    const totalCycleDurationSec = 60.0 / heartRateBPM;
    return totalCycleDurationSec - fixedAnimationSec;
  }, [isHovered]);

  const startHeartbeat = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel any ongoing heartbeat cycle
    }
    setAnimationKey((prev) => prev + 1);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    const pauseDurationSec = calculatePauseDuration();
    timeoutRef.current = window.setTimeout(() => {
      startHeartbeat();
    }, pauseDurationSec * 1000);
  }, [calculatePauseDuration, startHeartbeat]);

  const addHoverListeners = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      startHeartbeat();
    };

    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [startHeartbeat]);

  useEffect(() => {
    const removeTriggerListeners = addHoverListeners(heartRef?.current);
    return () => removeTriggerListeners && removeTriggerListeners();
  }, [heartRef, addHoverListeners]);

  useEffect(() => {
    const triggerElement = heartTriggerRef?.current ?? null;
    if (triggerElement) {
      const removeHeartListeners = addHoverListeners(triggerElement);
      return () => removeHeartListeners && removeHeartListeners();
    }
  }, [heartTriggerRef, addHoverListeners]);

  return (
    <Box display="inline-block" style={{ width: "70px", height: "70px", textAlign: "center", position: "relative" }}>
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
      />
      <Box
        style={{
          animation: `cardiacCycle ${fixedAnimationSec}s linear 1`,
          fontSize: isHovered ? "70px" : "60px",
          lineHeight: "70px",
          transition: "font-size 0.3s ease-in-out",
          cursor: "default",
        }}
        key={animationKey} // Forces re-render of span
        onAnimationEnd={handleAnimationEnd}
        aria-label="Beating Heart"
      >
        🫀
      </Box>
    </Box>
  );
};

import React, { useEffect, useState } from "react";
import { trackMouseEvent } from "../plausibleHelpers.ts";

export const useHoverTracking = (hasBeenHoveredTimeMs: number = 400) => {
  const [hoverStartTimeMillis, setHoverStartTimeMillis] = useState<
    number | null
  >(null);
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const trackPointerEnter = () => {
    setHoverStartTimeMillis(performance.now());
    setIsHovered(true);
  };

  const trackPointerLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (hoverStartTimeMillis !== null) {
      const dwellTimeMs = performance.now() - hoverStartTimeMillis;
      if (dwellTimeMs >= hasBeenHoveredTimeMs) {
        setHasBeenHovered(true);
        trackMouseEvent(event, "hover", {
          event_version: "0.1.0",
          hover_duration_ms: dwellTimeMs,
        });
      }
    }
    setHoverStartTimeMillis(null);
    setIsHovered(false);
  };

  // Effect to check if dwell time exceeds threshold while hovering
  useEffect(() => {
    if (!hasBeenHovered && isHovered && hoverStartTimeMillis !== null) {
      const interval = setInterval(() => {
        const dwellTimeMs = performance.now() - hoverStartTimeMillis;
        if (dwellTimeMs >= hasBeenHoveredTimeMs) {
          setHasBeenHovered(true);
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isHovered, hoverStartTimeMillis, hasBeenHoveredTimeMs]);

  // Cleanup in case of unmounting or window changes
  useEffect(() => {
    const trackWindowPointerLeave = () => trackPointerLeave(null as any);

    window.addEventListener("blur", trackWindowPointerLeave);
    window.addEventListener("pointerleave", trackWindowPointerLeave);

    return () => {
      window.removeEventListener("blur", trackWindowPointerLeave);
      window.removeEventListener("pointerleave", trackWindowPointerLeave);
    };
  }, []);

  return {
    trackPointerEnter,
    trackPointerLeave,
    hasBeenHovered,
    isHovered,
  };
};

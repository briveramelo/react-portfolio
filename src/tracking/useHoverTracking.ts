import React, { useEffect, useState } from "react";
import { trackMouseEvent } from "./plausibleHelpers.ts";

export const useHoverTracking = () => {
  const [hoverStartTimeMillis, setHoverStartTimeMillis] = useState<
    number | null
  >(null);
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const trackMouseEnter = () => {
    setHoverStartTimeMillis(performance.now());
    setIsHovered(true);
  };

  const trackMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (hoverStartTimeMillis !== null) {
      const dwellTimeMs = performance.now() - hoverStartTimeMillis;
      if (dwellTimeMs >= 400) {
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

  // Cleanup in case of unmounting or window changes
  useEffect(() => {
    const trackWindowMouseExit = () => trackMouseLeave(null as any);

    window.addEventListener("blur", trackWindowMouseExit);
    window.addEventListener("mouseleave", trackWindowMouseExit);

    return () => {
      window.removeEventListener("blur", trackWindowMouseExit);
      window.removeEventListener("mouseleave", trackWindowMouseExit);
    };
  }, []);

  return {
    trackMouseEnter,
    trackMouseLeave,
    hasBeenHovered,
    isHovered,
  };
};

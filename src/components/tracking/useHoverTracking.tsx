import React, { useEffect, useState } from "react";
import { trackMouseEvent } from "./plausibleSetup";

export const useHoverTracking = () => {
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);

  const trackMouseEnter = () => {
    setHoverStartTime(Date.now());
  };

  const trackMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (hoverStartTime !== null) {
      const dwellTime = Date.now() - hoverStartTime;
      if (dwellTime >= 400) {
        trackMouseEvent(event, 'hover', {
          eventVersion: "0.1.0",
          hoverDuration: dwellTime,
        });
      }
    }
    setHoverStartTime(null);
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
  };
};

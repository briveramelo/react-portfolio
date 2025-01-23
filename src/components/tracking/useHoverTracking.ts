import React, { useEffect, useState } from "react";
import { trackMouseEvent } from "./plausibleHelpers";

export const useHoverTracking = () => {
  const [hoverStartTimeMillis, setHoverStartTimeMillis] = useState<
    number | null
  >(null);

  const trackMouseEnter = () => {
    setHoverStartTimeMillis(Date.now());
  };

  const trackMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (hoverStartTimeMillis !== null) {
      const dwellTimeMs = Date.now() - hoverStartTimeMillis;
      if (dwellTimeMs >= 400) {
        trackMouseEvent(event, "hover", {
          event_version: "0.1.0",
          hover_duration_ms: dwellTimeMs,
        });
      }
    }
    setHoverStartTimeMillis(null);
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

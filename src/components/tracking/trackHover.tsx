import { trackMouseEvent } from "./plausibleSetup";
import React from "react";

/**
 * Tracks hover events on elements with default and custom properties.
 */
export const trackHover = (
  additionalProps: Record<string, string | number | boolean> = {},
) => {
  const hoverStart = Date.now();
  const minHoverTimeMs = 400;

  return (event: React.MouseEvent<HTMLElement>) => {
    const dwellTime = Date.now() - hoverStart;

    if (dwellTime >= minHoverTimeMs) {
      trackMouseEvent(event, "hover", {
        props: {
          ...additionalProps,
          eventVersion: "0.1.0",
          hoverDuration: dwellTime,
        },
      });
    }
  };
};

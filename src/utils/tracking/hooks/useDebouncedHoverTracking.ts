import React, { useEffect, useRef } from "react";
import { useHoverTracking } from "./useHoverTracking";

export const useDebouncedHoverTracking = (
  debounceDelayMs: number = 300,
  sendEvents: boolean = true,
  hasBeenHoveredTimeMs: number = 400,
) => {
  // Extract functions and any additional values from the original hook
  const { trackPointerEnter, trackPointerLeave, ...rest } = useHoverTracking(
    sendEvents,
    hasBeenHoveredTimeMs,
  );

  // Use number type for timer ID in DOM environments
  const enterTimerRef = useRef<number | null>(null);

  // Debounced pointer enter accepts an optional callback
  const debouncedTrackPointerEnter = (callback?: () => void) => {
    if (enterTimerRef.current !== null) {
      clearTimeout(enterTimerRef.current);
    }
    enterTimerRef.current = window.setTimeout(() => {
      trackPointerEnter();
      if (callback) {
        callback();
      }
    }, debounceDelayMs);
  };

  // Pointer leave triggers immediately and clears any pending enter timer
  const debouncedTrackPointerLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (enterTimerRef.current !== null) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    trackPointerLeave(event);
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (enterTimerRef.current !== null) clearTimeout(enterTimerRef.current);
    };
  }, []);

  return {
    ...rest,
    trackPointerEnter: debouncedTrackPointerEnter,
    trackPointerLeave: debouncedTrackPointerLeave,
  };
};

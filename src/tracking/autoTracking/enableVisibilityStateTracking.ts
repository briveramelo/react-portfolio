import { trackCustomEvent } from "../plausibleHelpers.ts";

export const enableVisibilityStateTracking = () => {
  const trackVisibilityChange = () => {
    trackCustomEvent("visibility_change", {
      visibility_state: document.visibilityState,
      event_version: "0.1.0",
    });
  };

  document.addEventListener("visibilitychange", trackVisibilityChange);

  return () => {
    document.removeEventListener("visibilitychange", trackVisibilityChange);
  };
};

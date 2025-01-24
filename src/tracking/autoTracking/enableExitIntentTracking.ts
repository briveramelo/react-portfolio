import { trackCustomEvent } from "../plausibleHelpers.ts";

export const enableExitIntentTracking = () => {
  const trackExitIntent = (event: MouseEvent) => {
    if (event.clientY < 10) {
      trackCustomEvent("exit_intent", {
        exit_at: window.location.href,
        event_version: "0.1.0",
      });
    }
  };

  document.addEventListener("mouseleave", trackExitIntent);

  return () => {
    document.removeEventListener("mouseleave", trackExitIntent);
  };
};

import { trackCustomEvent } from "../plausibleHelpers";

export const enableIdleTracking = () => {
  let idleTimer: any;
  const idleDurationMs = 30000;
  const resetIdleTimer = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      trackCustomEvent("user_idle", {
        idle_duration_ms: idleDurationMs,
        event_version: "0.1.0",
      });
    }, idleDurationMs);
  };

  document.addEventListener("mousemove", resetIdleTimer);
  document.addEventListener("keydown", resetIdleTimer);
  document.addEventListener("scroll", resetIdleTimer);

  resetIdleTimer();

  return () => {
    clearTimeout(idleTimer);
    document.removeEventListener("mousemove", resetIdleTimer);
    document.removeEventListener("keydown", resetIdleTimer);
    document.removeEventListener("scroll", resetIdleTimer);
  };
};

import { trackCustomEvent } from "../plausibleHelpers.ts";

export const enableScrollTracking = () => {
  const getScrollMilestone = (milestoneStep: number): number => {
    const scrollPercentage =
      ((window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight) *
      100;
    return Math.floor(scrollPercentage / milestoneStep) * milestoneStep;
  };

  const milestoneStep = 10; // Track every 10% increment
  let lastTrackedMilestone = getScrollMilestone(milestoneStep);

  const trackScroll = () => {
    const currentMilestone = getScrollMilestone(milestoneStep);

    // Only track when the user crosses into a new milestone, in either direction
    if (currentMilestone !== lastTrackedMilestone) {
      trackCustomEvent("scroll_milestone", {
        direction: currentMilestone > lastTrackedMilestone ? "down" : "up",
        event_version: "0.1.0",
      });

      lastTrackedMilestone = currentMilestone;
    }
  };

  window.addEventListener("scroll", trackScroll);

  return () => {
    window.removeEventListener("scroll", trackScroll);
  };
};

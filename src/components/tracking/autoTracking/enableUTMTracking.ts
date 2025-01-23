import { trackCustomEvent } from "../plausibleHelpers";

export const enableUTMTracking = () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("utm_campaign") || urlParams.has("utm_source")) {
    trackCustomEvent("utm_tracking", {
      utm_campaign: urlParams.get("utm_campaign") || "unknown",
      utm_source: urlParams.get("utm_source") || "unknown",
      utm_medium: urlParams.get("utm_medium") || "unknown",
      utm_term: urlParams.get("utm_term") || "unknown",
      utm_content: urlParams.get("utm_content") || "unknown",
      site_search: urlParams.get("q") || "unknown",
      event_version: "0.1.0",
    });
  }
};

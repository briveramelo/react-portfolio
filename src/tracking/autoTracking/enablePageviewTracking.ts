import { trackCustomEvent } from "../plausibleHelpers.ts";

let previousURL = "";

export const enablePageviewTracking = () => {
  const trackPageView = () => {
    if (window.location.href === previousURL) return;

    trackCustomEvent("custom_pageview", {
      page_url: window.location.href,
      referrer: document.referrer || "direct",
      event_version: "0.1.0",
    });
    previousURL = window.location.href;
  };

  // Patch history.pushState
  const originalPushState = history.pushState;
  history.pushState = function (
    this: History,
    data: any,
    unused: string,
    url?: string | URL | null,
  ) {
    originalPushState.call(this, data, unused, url);
    trackPageView();
  };

  // Listen for URL changes
  window.addEventListener("popstate", trackPageView);
  window.addEventListener("hashchange", trackPageView);

  // Fire an initial pageview
  trackPageView();

  // Return cleanup function
  return () => {
    // Restore original pushState
    history.pushState = originalPushState;
    window.removeEventListener("popstate", trackPageView);
    window.removeEventListener("hashchange", trackPageView);
  };
};

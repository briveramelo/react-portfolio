import React, { useEffect } from "react";
import { plausible, trackCustomEvent, trackMouseEvent } from "./plausibleSetup";

let previousURL = "";
let previousHash = window.location.hash;
let observer: MutationObserver;

// --- 1. Custom Auto Pageviews ---
const enableCustomAutoPageviews = () => {
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

// --- 2. Anchor click events ---
const anchorClickEventMap = [
  {
    eventName: "email_click",
    isMatch: (target: HTMLAnchorElement) => target.href?.startsWith("mailto:"),
    getProps: (target: HTMLAnchorElement) => ({
      email_address: target.href.replace("mailto:", ""),
      event_version: "0.1.0",
    }),
  },
  {
    eventName: "tel_click",
    isMatch: (target: HTMLAnchorElement) => target.href?.startsWith("tel:"),
    getProps: (target: HTMLAnchorElement) => ({
      phone_number: target.href.replace("tel:", ""),
      event_version: "0.1.0",
    }),
  },
  {
    eventName: "file_download",
    isMatch: (target: HTMLAnchorElement) =>
      /\.(pdf|docx|doc|xls|xlsx|csv|txt|png|jpg|jpeg|webp|gif|svg|)$/i.test(
        target.href,
      ),
    getProps: (target: HTMLAnchorElement) => ({
      file_url: target.href,
      file_type: target.href.split(".").pop() || "unknown",
      event_version: "0.1.0",
    }),
  },
];

const enableClickTracking = () => {
  const handleAnchorClicks = (event: Event): boolean => {
    const target = event.target as HTMLElement;
    if (!(target instanceof HTMLAnchorElement)) return false;
    if (target.host !== location.host) return false;

    for (const clickEventData of anchorClickEventMap) {
      if (!clickEventData.isMatch(target)) continue;

      trackMouseEvent(
        event as unknown as React.MouseEvent<HTMLElement>,
        clickEventData.eventName,
        clickEventData.getProps(target),
      );
      return true;
    }

    return false;
  };

  const trackAllClicks = (event: Event) => {
    if (handleAnchorClicks(event)) return;

    trackMouseEvent(
      event as unknown as React.MouseEvent<HTMLElement>,
      "general_click",
      {
        event_version: "0.1.0",
      },
    );
  };

  document.addEventListener("click", trackAllClicks);

  return () => {
    document.removeEventListener("click", trackAllClicks);
  };
};

// --- Auto Hash Tracking ---
const enableAutoHashTracking = () => {
  const onHashChange = () => {
    trackCustomEvent("hash_change", {
      new_hash: window.location.href,
      previous_hash: previousHash,
      event_version: "0.1.0",
    });
    previousHash = window.location.hash;
  };

  window.addEventListener("hashchange", onHashChange);

  return () => {
    window.removeEventListener("hashchange", onHashChange);
  };
};

// --- Auto UTM Tracking ---
const enableAutoUTMTracking = () => {
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

// --- Outbound link tracking ---
function trackOutboundLink(event: Event) {
  const target = event.target as HTMLElement;
  if (!(target instanceof HTMLAnchorElement)) return;

  // Ensure it's an external link
  if (!target.href.startsWith("http") || target.host === location.host) return;

  trackCustomEvent("outbound_link_click", {
    link_url: target.href,
    event_version: "0.1.0",
  });

  event.preventDefault();

  // Delay navigation to ensure tracking completion
  setTimeout(() => {
    window.location.href = target.href;
  }, 150);
}

const handleBodyClick = (event: Event) => {
  const target = event.target as HTMLElement;
  const link = target.closest("a") as HTMLAnchorElement | null;
  if (link && link.href && link.host !== location.host) {
    trackOutboundLink(event);
  }
};

const enableCustomAutoOutboundTracking = () => {
  document.body.addEventListener("click", handleBodyClick);

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLAnchorElement && node.host !== location.host) {
          node.addEventListener("click", trackOutboundLink);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    document.body.removeEventListener("click", handleBodyClick);
    observer?.disconnect();
  };
};

const enableScrollTracking = () => {
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

const enableIdleTracking = () => {
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

const enableVisibilityStateTracking = () => {
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

const enableExitIntentTracking = () => {
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

// --- The main hook ---
export const useTracking = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    plausible.trackPageview();
    enableAutoUTMTracking(); // no cleanup needed

    const disablePageviews = enableCustomAutoPageviews();
    const disableHashTracking = enableAutoHashTracking();
    const disableIdleTracking = enableIdleTracking();
    const disableClickTracking = enableClickTracking();
    const disableScrollTracking = enableScrollTracking();
    const disableOutboundTracking = enableCustomAutoOutboundTracking();
    const disableExitIntentTracking = enableExitIntentTracking();
    const disableVisibilityStateTracking = enableVisibilityStateTracking();

    const originalPushState = history.pushState;

    return () => {
      disablePageviews();
      disableHashTracking();
      disableIdleTracking();
      disableClickTracking();
      disableScrollTracking();
      disableOutboundTracking();
      disableExitIntentTracking();
      disableVisibilityStateTracking();

      history.pushState = originalPushState;
    };
  }, []);
};

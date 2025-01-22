import React, { useEffect } from "react";
import { plausible, trackCustomEvent, trackMouseEvent } from "./plausibleSetup";

let previousURL = "";
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

  // Listen to history API changes
  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    trackPageView();
  };

  window.addEventListener("popstate", trackPageView);
  window.addEventListener("hashchange", trackPageView);

  // Trigger first page view
  trackPageView();
};

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

const handleAnchorClicks = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!(target instanceof HTMLAnchorElement)) return;
  if (target.host !== location.host) return;

  anchorClickEventMap.forEach((clickEventData) => {
    if (!clickEventData.isMatch(target)) return;

    trackMouseEvent(
      event as unknown as React.MouseEvent<HTMLElement>,
      clickEventData.eventName,
      clickEventData.getProps(target),
    );
  });
};

const handleAllClicks = (event: Event) => {
  // General click tracking
  trackMouseEvent(
    event as unknown as React.MouseEvent<HTMLElement>,
    "general_click",
    {
      event_version: "0.1.0",
    },
  );
  handleAnchorClicks(event);
};

let previousHash = window.location.hash;
const enableAutoHashTracking = () => {
  window.addEventListener("hashchange", () => {
    trackCustomEvent("hash_change", {
      new_hash: window.location.href,
      previous_hash: previousHash,
      event_version: "0.1.0",
    });
    previousHash = window.location.hash;
  });
};

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

let observer: MutationObserver;

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
};

const disableCustomAutoOutboundTracking = () => {
  document.body.removeEventListener("click", handleBodyClick);
  observer?.disconnect();
};

export const useTracking = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    plausible.trackPageview();
    enableCustomAutoPageviews();
    enableAutoHashTracking();
    enableAutoUTMTracking();
    enableCustomAutoOutboundTracking();

    document.addEventListener("click", handleAllClicks);

    const originalPushState = history.pushState;

    return () => {
      document.removeEventListener("click", handleAllClicks);
      disableCustomAutoOutboundTracking();
      history.pushState = originalPushState;
    };
  }, []);
};

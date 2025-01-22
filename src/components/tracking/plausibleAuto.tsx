import React from "react";
import { trackCustomEvent, trackMouseEvent } from "./plausibleSetup";

let previousURL = window.location.href;
const enableCustomAutoPageviews = () => {
  const trackPageView = () => {
    if (window.location.href !== previousURL) {
      trackCustomEvent("pageview", {
        page_url: window.location.href,
        referrer: document.referrer || "direct",
        eventVersion: "0.1.0",
      });
      previousURL = window.location.href;
    }
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
    eventName: "email:click",
    isMatch: (target: HTMLAnchorElement) => target.href?.startsWith("mailto:"),
    getProps: (target: HTMLAnchorElement) => ({
      email_address: target.href.replace("mailto:", ""),
      eventVersion: "0.1.0",
    }),
  },
  {
    eventName: "tel:click",
    isMatch: (target: HTMLAnchorElement) => target.href?.startsWith("tel:"),
    getProps: (target: HTMLAnchorElement) => ({
      phone_number: target.href.replace("tel:", ""),
      eventVersion: "0.1.0",
    }),
  },
  {
    eventName: "file-download",
    isMatch: (target: HTMLAnchorElement) =>
      /\.(pdf|docx|doc|xls|xlsx|csv|txt|png|jpg|jpeg|webp|gif|svg|)$/i.test(
        target.href,
      ),
    getProps: (target: HTMLAnchorElement) => ({
      file_url: target.href,
      file_type: target.href.split(".").pop() || "unknown",
      eventVersion: "0.1.0",
    }),
  },
];

const handleAnchorClicks = (event: Event) => {
  const target = event.target as HTMLElement;
  if (
    target.tagName.toLowerCase() === "a" &&
    target instanceof HTMLAnchorElement
  ) {
    anchorClickEventMap.forEach((clickEventData) => {
      if (clickEventData.isMatch(target)) {
        trackMouseEvent(
          event as unknown as React.MouseEvent<HTMLElement>,
          clickEventData.eventName,
          {
            ...clickEventData.getProps(target),
          },
        );
      }
    });
  }
};

let previousHash = window.location.hash;
const enableAutoHashTracking = () => {
  window.addEventListener("hashchange", () => {
    trackCustomEvent("hashchange", {
      new_hash: window.location.href,
      previous_hash: previousHash,
      eventVersion: "0.1.0",
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
      eventVersion: "0.1.0",
    });
  }
};

const enableCustomAutoOutboundTracking = () => {
  function trackOutboundLink(event: Event) {
    const target = event.target as HTMLAnchorElement;

    if (
      target.tagName.toLowerCase() === "a" &&
      target.href.startsWith("http") &&
      target.host !== location.host
    ) {
      trackCustomEvent("outbound-link:click", {
        link_url: target.href,
        eventVersion: "0.1.0",
      });

      // Delay navigation to ensure tracking completion
      setTimeout(() => {
        window.location.href = target.href;
      }, 150);

      event.preventDefault();
    }
  }

  // Track clicks on existing links
  document.querySelectorAll("a").forEach((link) => {
    if (link.host !== location.host) {
      link.addEventListener("click", trackOutboundLink);
    }
  });

  // Observe new anchor elements dynamically added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLAnchorElement && node.host !== location.host) {
          node.addEventListener("click", trackOutboundLink);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

enableCustomAutoPageviews();
enableAutoHashTracking();
enableAutoUTMTracking();
enableCustomAutoOutboundTracking();
document.addEventListener("click", handleAnchorClicks);

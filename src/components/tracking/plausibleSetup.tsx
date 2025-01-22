import Plausible from "plausible-tracker";
import React from "react";

export const plausible = Plausible({
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "brandon.riveramelo.com",
  apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST || "plausible.brm.ninja",
  trackLocalhost: true,
});

// Generate or retrieve session UUID
if (!sessionStorage.getItem("session_uuid")) {
  const sessionUUID = crypto.randomUUID();
  sessionStorage.setItem("session_uuid", sessionUUID);
}

const sessionUUID = sessionStorage.getItem("session_uuid") || "unknown";
const appVersion = import.meta.env.VITE_APP_VERSION || "unknown";

/**
 * Finds the ID of the closest <section> ancestor or returns "unknown".
 */
function getSectionId(el: Element | null): string {
  if (!el) return "unknown";

  // If `.closest` is supported and available, use it:
  if (typeof el.closest === "function") {
    const section = el.closest("section");
    return section?.id || "unknown";
  }

  // Fallback for older browsers or any edge cases:
  let current: Element | null = el;
  while (current) {
    if (current.tagName?.toLowerCase() === "section") {
      return current.id || "unknown";
    }
    current = current.parentElement;
  }
  return "unknown";
}

export function getMouseProps(event: React.MouseEvent<HTMLElement> | null) {
  const targetElement =
    event?.currentTarget instanceof Element ? event.currentTarget : null;
  return {
    parent_section: getSectionId(targetElement),
    element_tag: targetElement?.tagName.toLowerCase() || "unknown",
    element_id: targetElement?.id || "unknown",
    scroll_height: document.documentElement.scrollHeight,
    scroll_position: window.scrollY + window.innerHeight,
    mouse_x: event?.clientX || "",
    mouse_y: event?.clientY || "",
  };
}
export function getCommonProps() {
  return {
    session_id: sessionUUID,
    app_version: appVersion,
    timestamp: new Date().toISOString(),
    millis: new Date().getTime(),
  };
}

export const trackCustomEvent = (
  eventName: string,
  props: Record<string, any> = {},
) => {
  plausible.trackEvent(eventName, {
    props: {
      ...getCommonProps(),
      ...props,
    },
  });
};

export const trackMouseEvent = (
  event: React.MouseEvent<HTMLElement>,
  eventName: string,
  props: Record<string, any> = {},
) => {
  plausible.trackEvent(eventName, {
    props: {
      ...getCommonProps(),
      ...getMouseProps(event),
      ...props,
    },
  });
};

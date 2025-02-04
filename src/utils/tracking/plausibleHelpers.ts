import { plausible } from "./plausibleConfig.ts";
import { v4 as uuidv4 } from "uuid";
import React from "react";

// Generate or retrieve session UUID
if (!sessionStorage.getItem("session_uuid")) {
  const sessionUUID = uuidv4();
  sessionStorage.setItem("session_uuid", sessionUUID);
}

const sessionUUID = sessionStorage.getItem("session_uuid") || "unknown";
const appVersion = import.meta.env.VITE_APP_VERSION || "unknown";

const getSessionStartTime = () => {
  let startTime = sessionStorage.getItem("session_start_time");
  if (!startTime) {
    startTime = Date.now().toString();
    sessionStorage.setItem("session_start_time", startTime);
  }
  return parseInt(startTime, 10);
};

const sessionStartTime = getSessionStartTime();

/**
 * Finds the ID of the closest <section> ancestor or returns "unknown".
 */
function getParentId(el: Element | null): string {
  if (!el) return "unknown";

  if (typeof el.closest === "function") {
    const parentElement = el.closest("section, header");
    return parentElement?.id || "unknown";
  }

  // Fallback for older browsers or edge cases:
  let current: Element | null = el;
  while (current) {
    const tagName = current.tagName?.toLowerCase();
    if (tagName === "section" || tagName === "header") {
      return current.id || "unknown";
    }
    current = current.parentElement;
  }
  return "unknown";
}

export function getMouseProps(event: React.MouseEvent<HTMLElement> | null) {
  const targetElement = event?.target instanceof Element ? event.target : null;
  const currentTargetElement =
    event?.currentTarget instanceof Element ? event.currentTarget : null;

  return {
    parent_id: getParentId(targetElement),
    element_tag: targetElement?.tagName.toLowerCase() || "unknown",
    element_id: targetElement?.id || "unknown",
    handler_element_id: currentTargetElement?.id || "unknown",
    mouse_x: event?.clientX || "",
    mouse_y: event?.clientY || "",
  };
}
export function getCommonProps() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  const scrollDepthPercentage = ((scrollPosition / scrollHeight) * 100).toFixed(
    1,
  );

  const now = new Date();
  const timestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Ensures AM/PM format
  }).format(now);

  // Replace commas and adjust formatting to match MM/DD/YYYY HH:mm:ss AM/PM
  const formattedTimestamp = timestamp.replace(",", "");
  const millis = now.getTime();
  const sessionTimeMs = millis - sessionStartTime;

  return {
    session_id: sessionUUID,
    app_version: appVersion,
    timestamp: formattedTimestamp,
    millis,
    session_time_ms: sessionTimeMs,
    scroll_height: scrollHeight,
    scroll_position: scrollPosition,
    scroll_depth_percentage: scrollDepthPercentage,
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

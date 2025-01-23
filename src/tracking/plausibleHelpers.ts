import { plausible } from "./plausibleConfig.ts";

// Generate or retrieve session UUID
if (!sessionStorage.getItem("session_uuid")) {
  const sessionUUID = crypto.randomUUID();
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
  const targetElement = event?.target instanceof Element ? event.target : null;
  return {
    parent_section: getSectionId(targetElement),
    element_tag: targetElement?.tagName.toLowerCase() || "unknown",
    element_id: targetElement?.id || "unknown",
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

  return {
    session_id: sessionUUID,
    app_version: appVersion,
    timestamp: new Date().toISOString(),
    millis: new Date().getTime(),
    session_time_ms: Date.now() - sessionStartTime,
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

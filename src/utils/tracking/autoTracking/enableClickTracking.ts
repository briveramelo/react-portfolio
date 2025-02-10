import { trackMouseEvent } from "../plausibleHelpers.ts";
import React from "react";

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

export const enableClickTracking = () => {
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

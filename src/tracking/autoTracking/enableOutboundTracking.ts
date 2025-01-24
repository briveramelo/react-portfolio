import { trackCustomEvent } from "../plausibleHelpers.ts";

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

export const enableOutboundTracking = () => {
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

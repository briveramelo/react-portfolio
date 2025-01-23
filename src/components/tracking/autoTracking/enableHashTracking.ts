import { trackCustomEvent } from "../plausibleHelpers";

let previousHash = window.location.hash;
export const enableHashTracking = () => {
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

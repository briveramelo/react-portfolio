import { useEffect } from "react";
import { plausible } from "./plausibleConfig";
import { enableClickTracking } from "./autoTracking/enableClickTracking";
import { enableScrollTracking } from "./autoTracking/enableScrollTracking";
import { enableExitIntentTracking } from "./autoTracking/enableExitIntentTracking";
import { enableVisibilityStateTracking } from "./autoTracking/enableVisibilityStateTracking";
import { enableHashTracking } from "./autoTracking/enableHashTracking";
import { enableIdleTracking } from "./autoTracking/enableIdleTracking";
import { enablePageviewTracking } from "./autoTracking/enablePageviewTracking";
import { enableOutboundTracking } from "./autoTracking/enableOutboundTracking";
import { enableUTMTracking } from "./autoTracking/enableUTMTracking";

export const usePlausibleTracking = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    plausible.trackPageview();
    enableUTMTracking(); // no cleanup needed

    const disablePageviews = enablePageviewTracking();
    const disableHashTracking = enableHashTracking();
    const disableIdleTracking = enableIdleTracking();
    const disableClickTracking = enableClickTracking();
    const disableScrollTracking = enableScrollTracking();
    const disableOutboundTracking = enableOutboundTracking();
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

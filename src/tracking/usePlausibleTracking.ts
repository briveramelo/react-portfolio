import { useEffect } from "react";
import { plausible } from "./plausibleConfig.ts";
import { enableClickTracking } from "./autoTracking/enableClickTracking.ts";
import { enableScrollTracking } from "./autoTracking/enableScrollTracking.ts";
import { enableExitIntentTracking } from "./autoTracking/enableExitIntentTracking.ts";
import { enableVisibilityStateTracking } from "./autoTracking/enableVisibilityStateTracking.ts";
import { enableHashTracking } from "./autoTracking/enableHashTracking.ts";
import { enableIdleTracking } from "./autoTracking/enableIdleTracking.ts";
import { enablePageviewTracking } from "./autoTracking/enablePageviewTracking.ts";
import { enableOutboundTracking } from "./autoTracking/enableOutboundTracking.ts";
import { enableUTMTracking } from "./autoTracking/enableUTMTracking.ts";

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

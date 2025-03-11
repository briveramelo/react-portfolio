import React, { useEffect } from "react";
import { trackCustomEvent } from "./plausibleHelpers.ts";

interface TrackingDataGetter<P> {
  (props: P): Record<string, any>;
}

function withDwellTimeTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  eventName: string,
  getTrackingData?: TrackingDataGetter<P>,
): React.FC<P> {
  return (props) => {
    useEffect(() => {
      const start = performance.now();
      return () => {
        const duration = performance.now() - start;
        const extraData = getTrackingData ? getTrackingData(props) : {};
        trackCustomEvent(eventName, { duration, ...extraData });
      };
    }, [props]);

    return <WrappedComponent {...props} />;
  };
}

export default withDwellTimeTracking;

import { onCLS, onFID, onLCP, onTTFB, onINP } from "web-vitals";
import { trackCustomEvent } from "../plausibleHelpers.ts";

/**
 * Sends performance metrics to Plausible using trackCustomEvent.
 */
const trackPerformance = (metric: { name: string; value: number }) => {
  const formattedValue =
    metric.name === "CLS"
      ? (metric.value * 100).toFixed(2) // Convert CLS to percentage
      : metric.value.toFixed(2);

  const unit = metric.name === "CLS" ? "%" : "ms";

  trackCustomEvent(`Performance: ${metric.name}`, {
    metric_name: metric.name,
    value: formattedValue,
    unit: unit,
  });
};

/**
 * Initializes Web Vitals monitoring.
 */
export const enablePerformanceTracking = () => {
  onCLS(trackPerformance); // Cumulative Layout Shift (CLS)
  onFID(trackPerformance); // First Input Delay (FID)
  onLCP(trackPerformance); // Largest Contentful Paint (LCP)
  onTTFB(trackPerformance); // Time to First Byte (TTFB)
  onINP(trackPerformance); // Interaction to Next Paint (INP)
};

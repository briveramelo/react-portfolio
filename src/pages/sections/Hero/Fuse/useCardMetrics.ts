import React, { useState, useEffect } from "react";

export function useCardMetrics(containerRef: React.RefObject<HTMLElement>) {
  const [metrics, setMetrics] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  }>({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateMetrics = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      setMetrics({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
    };
    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });
    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", updateMetrics);
    return () => {
      window.removeEventListener("resize", updateMetrics);
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return metrics;
}

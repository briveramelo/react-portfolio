import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import "./BeatingHeart.css";

export const BeatingHeart: React.FC = () => {
  const heartRef = useRef<HTMLDivElement>(null!);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationKey, setAnimationKey] = useState(0); // Key to force animation re-trigger

  const minHeartRateBPM = 40.0;
  const maxHeartRateBPM = 160.0;
  const fixedAnimationSec = 0.5;
  const maxDistance = 200; // 'safe' distance

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePauseDuration = useCallback(() => {
    const heartRect = heartRef.current?.getBoundingClientRect();
    if (!heartRect) return 1;
    const heartCenter = {
      x: heartRect.left + heartRect.width / 2,
      y: heartRect.top + heartRect.height / 2,
    };

    const distanceToHeart = Math.sqrt(
      Math.pow(mousePosition.x - heartCenter.x, 2) +
        Math.pow(mousePosition.y - heartCenter.y, 2),
    );

    const heartRateBPM = Math.max(
      minHeartRateBPM,
      Math.min(
        maxHeartRateBPM,
        // Calculate heart rate based on distance to heart
        // to create a responsive, nervous effect
        minHeartRateBPM +
          (maxHeartRateBPM - minHeartRateBPM) *
            (1 - Math.pow(distanceToHeart / maxDistance, 2)),
      ),
    );

    const totalCycleDurationSec = 60.0 / heartRateBPM;
    return totalCycleDurationSec - fixedAnimationSec;
  }, [mousePosition.x, mousePosition.y]);

  const startHeartbeat = useCallback(() => {
    // dom change triggers animation rendering
    setAnimationKey((prev) => prev + 1);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    const pauseDurationSec = calculatePauseDuration();
    setTimeout(() => {
      startHeartbeat();
    }, pauseDurationSec * 1000);
  }, [calculatePauseDuration, startHeartbeat]);

  return (
    <Box display="inline-block">
      <div
        ref={heartRef}
        className="heart"
        style={{ animation: `cardiacCycle ${fixedAnimationSec}s linear 1` }}
        key={animationKey} // Forces re-render of span
        onAnimationEnd={handleAnimationEnd}
        aria-label="Beating Heart"
      >
        🫀
      </div>
    </Box>
  );
};

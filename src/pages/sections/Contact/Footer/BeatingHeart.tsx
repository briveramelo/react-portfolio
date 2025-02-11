import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useHoverTracking } from "../../../../utils/tracking/hooks/useHoverTracking";
import FirebaseImage from "../../Projects/MediaCarousel/FirebaseImage";
import { useAuth } from "../../../../context/AuthContext";

interface BeatingHeartProps {
  heartTriggerRef?: React.RefObject<HTMLButtonElement>;
}

// Define the cardiac cycle keyframes as a native Keyframe array
const cardiacCycleKeyframes: Keyframe[] = [
  { offset: 0, transform: "scale(1)" }, // 0% - Resting size
  { offset: 0.1453, transform: "scale(1.05)", easing: "ease-in-out" }, // 14.53% - P wave peak
  { offset: 0.2444, transform: "scale(1)" }, // 24.44% - P wave end
  { offset: 0.3829, transform: "scale(1)" }, // 38.29% - Q wave start
  { offset: 0.4325, transform: "scale(0.9)" }, // 43.25% - Q wave
  { offset: 0.4769, transform: "scale(1.5)" }, // 47.69% - R wave
  { offset: 0.5316, transform: "scale(0.85)" }, // 53.16% - S wave
  { offset: 0.5744, transform: "scale(1)" }, // 57.44% - S wave end
  { offset: 0.7624, transform: "scale(1)" }, // 76.24% - T wave start
  { offset: 0.9009, transform: "scale(1.15)", easing: "ease-in-out" }, // 90.09% - T wave peak
  { offset: 1, transform: "scale(1)" }, // 100% - T wave end
];

export const BeatingHeart: React.FC<BeatingHeartProps> = ({
  heartTriggerRef,
}) => {
  // Refs for the animated element, active Animation, and for pointer listeners.
  const animationRef = useRef<HTMLDivElement | null>(null);
  const animationInstanceRef = useRef<Animation | null>(null);
  const heartRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // State for hover status (affects the heartbeat rate and scaling)
  const [isHovered, setIsHovered] = useState(false);
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();
  const { user } = useAuth();

  // Configuration values
  const minHeartRateBPM = 40.0;
  const maxHeartRateBPM = 160.0;
  const fixedAnimationDurationSec = 0.5;
  const boxSize = 75;
  const minHRVPercent = 0.05;
  const maxHRVPercent = 0.2;

  // Animation options for the Web Animations API
  const cardiacAnimOptions: KeyframeAnimationOptions = {
    duration: fixedAnimationDurationSec * 1000,
    easing: "linear",
    iterations: 1,
  };

  // Calculate the pause duration (in seconds) between heartbeats.
  // This is based on the BPM (which changes on hover) plus some variability.
  const calculatePauseDuration = useCallback(() => {
    const heartRateBPM = isHovered ? maxHeartRateBPM : minHeartRateBPM;
    const totalCycleDurationSec = 60.0 / heartRateBPM;
    const basePauseDurationSec =
      totalCycleDurationSec - fixedAnimationDurationSec;
    const variabilityFactor =
      Math.random() * (maxHRVPercent - minHRVPercent) + minHRVPercent;
    const variation =
      basePauseDurationSec * variabilityFactor * (Math.random() < 0.5 ? -1 : 1);
    return basePauseDurationSec + variation;
  }, [isHovered]);

  // This function starts the heartbeat animation.
  // It cancels any existing animation and timeout before starting a new one.
  const startHeartbeat = useCallback(() => {
    // Cancel any pending timeout.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Cancel any ongoing animation.
    if (animationInstanceRef.current) {
      animationInstanceRef.current.cancel();
      animationInstanceRef.current = null;
    }
    // Start a new animation if the element is present.
    if (animationRef.current) {
      animationInstanceRef.current = animationRef.current.animate(
        cardiacCycleKeyframes,
        cardiacAnimOptions,
      );
      animationInstanceRef.current.onfinish = () => {
        animationInstanceRef.current = null;
        const pauseDurationSec = calculatePauseDuration();
        // Schedule the next heartbeat after the calculated pause.
        timeoutRef.current = window.setTimeout(() => {
          startHeartbeat();
        }, pauseDurationSec * 1000);
      };
    }
  }, [cardiacAnimOptions, calculatePauseDuration]);

  // Attach hover listeners so that pointer events can control the heartbeat.
  // When the pointer enters, we set hover state and restart the heartbeat.
  const addHoverListeners = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const handlePointerEnter = () => {
        setIsHovered(true);
        startHeartbeat();
      };

      const handlePointerLeave = () => {
        setIsHovered(false);
      };

      element.addEventListener("pointerenter", handlePointerEnter);
      element.addEventListener("pointerleave", handlePointerLeave);

      // Return a cleanup function.
      return () => {
        element.removeEventListener("pointerenter", handlePointerEnter);
        element.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    [startHeartbeat],
  );

  // Add hover listeners to the invisible heart box.
  useEffect(() => {
    if (heartRef.current) {
      const removeListeners = addHoverListeners(heartRef.current);
      return () => {
        removeListeners && removeListeners();
      };
    }
  }, [addHoverListeners]);

  // If a separate heartTrigger element is provided, attach listeners to it as well.
  useEffect(() => {
    if (heartTriggerRef?.current) {
      const removeListeners = addHoverListeners(heartTriggerRef.current);
      return () => {
        removeListeners && removeListeners();
      };
    }
  }, [heartTriggerRef, addHoverListeners]);

  // Start the heartbeat loop when the component mounts.
  useEffect(() => {
    startHeartbeat();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationInstanceRef.current) animationInstanceRef.current.cancel();
    };
  }, [startHeartbeat]);

  return (
    <Box
      display="inline-block"
      sx={{
        width: boxSize,
        height: boxSize,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Invisible box to catch interactions */}
      <Box
        ref={heartRef}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          cursor: "default",
          zIndex: 2,
        }}
        id="beating_heart_trigger_ref"
        onPointerEnter={trackPointerEnter}
        onPointerLeave={trackPointerLeave}
      />
      <Box
        sx={{
          position: "absolute",
          transition: "transform 0.15s ease-in-out",
          cursor: "default",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1.5})`,
          transformOrigin: "center",
        }}
      >
        <Box
          ref={animationRef}
          sx={{
            fontSize: "40px",
            cursor: "default",
            transformOrigin: `${boxSize / 2}px ${boxSize / 2}px`,
          }}
          aria-label="Beating Heart"
          id="beating_heart"
        >
          {user ? (
            <FirebaseImage
              alt="Beating Heart"
              firebaseImagePath="misc/anatomical-heart.webp"
              height={boxSize}
            />
          ) : (
            "🫀"
          )}
        </Box>
      </Box>
    </Box>
  );
};

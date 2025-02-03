import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import coffee from "@/assets/coffee.webp";
import { ThemeMode, useCustomPalette } from "../../../../theme.ts";
import { useHoverTracking } from "../../../../utils/tracking/hooks/useHoverTracking.ts";

export function SteamingCoffee() {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  // Create refs for the steam puffs
  const steamRefs = [
    useRef<HTMLDivElement>(null!),
    useRef<HTMLDivElement>(null!),
    useRef<HTMLDivElement>(null!),
    useRef<HTMLDivElement>(null!),
  ];

  // Animation constants
  const xAmpPx = 4;
  const maxYPx = -60;
  const numKeyframes = 30;
  const animationTimeMs = 6000;
  const delayMs = 2000; // Staggered delay between puffs
  const extraDelayMs = 2000; // Additional delay after animation
  const durationMs = animationTimeMs + extraDelayMs; // Total duration
  const { mode } = useCustomPalette();
  const useDark = mode === ThemeMode.Light;

  /**
   * generateSinusoidalKeyframes dynamically generates keyframes for sinusoidal X translation and linear Y motion.
   */
  const generateSinusoidalKeyframes = (flipDirection: boolean): Keyframe[] => {
    const keyframes: Keyframe[] = [];

    for (let i = 0; i <= numKeyframes; i++) {
      const progress = i / numKeyframes;
      const xPosition = Math.sin(progress * Math.PI * 2) * xAmpPx;
      const adjustedXPosition = flipDirection ? -xPosition : xPosition;
      const yPosition = progress * maxYPx; // Linear Y motion
      const opacity =
        progress < 0.5
          ? progress * 2 // ease in
          : (1 - progress) * 2; // ease out

      keyframes.push({
        transform: `translate(${adjustedXPosition}px, ${yPosition}px)`,
        opacity: opacity,
      });
    }

    // Add a final keyframe to pause the animation at the end
    keyframes.push({
      transform: `translate(0px, ${maxYPx}px)`,
      opacity: 0,
    });

    return keyframes;
  };

  /**
   * animatePuff creates and starts the rising steam puff animation.
   */
  const animatePuff = (
    element: HTMLDivElement,
    durationMs: number,
    delayMs: number,
    flipDirection: boolean,
  ) => {
    const keyframes = generateSinusoidalKeyframes(flipDirection);

    const options = {
      duration: durationMs,
      iterations: Infinity,
      delay: delayMs,
      easing: "linear",
    };

    element.animate(keyframes, options);
  };

  // Start animations for all puffs with a staggered start
  useEffect(() => {
    steamRefs.forEach((steamRef, index) => {
      if (steamRef.current) {
        animatePuff(
          steamRef.current,
          durationMs,
          index * delayMs, // Staggered delay
          index % 2 === 1, // Flip direction for alternate puffs
        );
      }
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "40px",
        height: "0px",
        zIndex: 1,
        marginTop: "-40px",
      }}
      id="steaming_coffee_wrapper"
      onMouseEnter={trackMouseEnter}
      onMouseLeave={trackMouseLeave}
    >
      <img id="steaming-coffee" src={coffee} alt="coffee" width={60} />
      {steamRefs.map((steamRef, index) => (
        <Box
          key={index}
          ref={steamRef}
          sx={{
            position: "absolute",
            width: "4px",
            height: "33px",
            marginTop: "-65px",
            marginLeft: "28px",
            background: useDark
              ? "radial-gradient(circle, rgba(  0,   0,   0, 0.6) 0%, rgba(  0,   0,   0, 0) 70%)"
              : "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
            borderRadius: "50%",
            opacity: 0, // Initial opacity
          }}
        />
      ))}
    </Box>
  );
}

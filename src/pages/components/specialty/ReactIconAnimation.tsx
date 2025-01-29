import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useHoverTracking } from "../../../tracking/useHoverTracking.ts";

export const ReactIconAnimation = () => {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();
  const [isHovered, setIsHovered] = useState(false);
  const ellipseRefs = useRef<(SVGElement | null)[]>([]);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const ellipseAnglesRef = useRef<number[]>([0, 120, 240]);
  const lastTimeRef = useRef<number>(0);

  const setEllipseRef = (index: number, el: SVGElement | null) => {
    ellipseRefs.current[index] = el;
  };

  const getCurrentAngleDeg = (element: Element | null) => {
    if (!element) return 0;
    const style = window.getComputedStyle(element);
    const transform = style.getPropertyValue("transform");

    if (transform && transform !== "none") {
      // transform is something like "matrix(a, b, c, d, tx, ty)"
      const values = transform
        .match(/matrix\(([^)]+)\)/)?.[1]
        .split(",")
        .map((v) => parseFloat(v.trim()));

      if (values && values.length >= 4) {
        const [a, b] = values; // a = cosθ, b = sinθ
        const angle = Math.atan2(b, a) * (180 / Math.PI);
        return angle;
      }
    }
    return 0;
  };

  const handleOnHover = (
    event: MouseEvent<HTMLDivElement> | null,
    entering: boolean,
  ) => {
    setIsHovered(entering);

    if (entering) {
      trackMouseEnter();
    } else if (event) {
      trackMouseLeave(event);
    }

    // IMPORTANT: read current angles from the DOM so rotation doesn't reset
    ellipseRefs.current.forEach((ellipse, i) => {
      ellipseAnglesRef.current[i] = getCurrentAngleDeg(ellipse);
    });
  };

  // Main animation loop via requestAnimationFrame
  useEffect(() => {
    let animId = 0;

    function animate(timestamp: number) {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const dt = timestamp - lastTimeRef.current; // ms since last frame
      lastTimeRef.current = timestamp;

      const rotationSpeedDegPerSec = isHovered ? 180 : 60;
      const pulsingPeriodMs = isHovered ? 1000 : 2000;

      // A simple sinusoid for "pulsing" from [1..0.833] in X, [1..1.5] in Y
      // We'll param via cos(2π * t / period)
      const cosPart = Math.cos((2 * Math.PI * timestamp) / pulsingPeriodMs);
      // Ellipse scale in X from 1 down to ~0.833, in Y up to 1.5
      // We'll define them so that at cosPart=1 => scale is (1,1)
      // and at cosPart=-1 => scale is (0.833, 1.5).
      // A straightforward approach:
      //   x(t): 0.91665 + 0.0833*cos(...) => range [0.8333..1]
      //   y(t): 1.25 + 0.25*cos(...)      => range [1..1.5]
      const xScale = 0.91665 + 0.0833 * cosPart;
      const yScale = 1.25 + 0.25 * cosPart;

      // For center circle, we want it from 1..1.5..1
      // so scale(t) = 1.25 + 0.25*cos(...), same as yScale
      const circleScale = 1.25 + 0.25 * cosPart;

      // Update each ellipse
      ellipseRefs.current.forEach((ellipse, i) => {
        if (!ellipse) return;

        // Advance the rotation
        ellipseAnglesRef.current[i] += rotationSpeedDegPerSec * (dt / 1000);
        const angle = ellipseAnglesRef.current[i];

        const transformStr = `
          rotate(${angle}deg)
          scale(${xScale}, ${yScale})
        `.replace(/\s+/g, " "); // tidy up spaces

        (ellipse as SVGElement).style.transform = transformStr;
      });

      if (circleRef.current) {
        circleRef.current.style.transform = `
          scale(${circleScale})
        `.replace(/\s+/g, " ");
      }

      // Next frame
      animId = requestAnimationFrame(animate);
    }

    // Start animation
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: "visible",
        position: "relative",
      }}
    >
      {/*
        Invisible Box that covers the same area as the icon
        to capture hover events (enter/leave).
      */}
      <Box
        zIndex={1}
        sx={{ position: "absolute", height: 65, width: 65 }}
        onMouseEnter={() => handleOnHover(null, true)}
        onMouseLeave={(e) => handleOnHover(e, false)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{
          transform: isHovered ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {[0, 1, 2].map((index) => (
          <ellipse
            key={index}
            ref={(el) => setEllipseRef(index, el)}
            cx="50"
            cy="50"
            rx="30"
            ry="10"
            stroke="#61DAFB"
            strokeWidth={3}
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ transformOrigin: "center", willChange: "transform" }}
          />
        ))}

        {/* Center "nucleus" circle */}
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="3"
          fill="#61DAFB"
          style={{ transformOrigin: "center", willChange: "transform" }}
        />
      </svg>
    </Box>
  );
};

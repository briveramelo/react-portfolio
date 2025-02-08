import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box } from "@mui/material";
import { useHoverTracking } from "../../../../utils/tracking/hooks/useHoverTracking.ts";

interface ReactIconAnimationProps {
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

export const ReactIconAnimation: React.FC<ReactIconAnimationProps> = ({
  triggerRef,
}) => {
  const { trackPointerEnter, trackPointerLeave, hasBeenHovered } =
    useHoverTracking();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const boxRef = useRef<HTMLElement | null>(null);
  const ellipseRefs = useRef<(SVGElement | null)[]>([]);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const ellipseAnglesRef = useRef<number[]>([0, 120, 240]);
  const lastTimeRef = useRef<number>(performance.now());
  const hoverStartTimeRef = useRef<number>(performance.now());
  const prevAnimValuesRef = useRef({
    xScale: 1,
    yScale: 1,
    circleScale: 1,
    rotationSpeedDegPerSec: 60,
  });

  const setEllipseRef = (index: number, el: SVGElement | null) => {
    ellipseRefs.current[index] = el;
  };

  const getCurrentAngleDeg = (element: Element | null) => {
    if (!element) return 0;
    const style = window.getComputedStyle(element);
    const transform = style.getPropertyValue("transform");

    if (transform && transform !== "none") {
      const values = transform
        .match(/matrix\(([^)]+)\)/)?.[1]
        .split(",")
        .map((v) => parseFloat(v.trim()));

      if (values && values.length >= 4) {
        const [a, b] = values; // a = cosθ, b = sinθ
        const angleDeg = Math.atan2(b, a) * (180 / Math.PI);
        return angleDeg;
      }
    }
    return 0;
  };

  const handleOnHover = (entering: boolean) => {
    setIsHovered(entering);
    hoverStartTimeRef.current = performance.now();
    ellipseRefs.current.forEach((ellipse, i) => {
      ellipseAnglesRef.current[i] = getCurrentAngleDeg(ellipse);
    });
  };

  function smootherstep(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function getSmoothValue(
    prev: number,
    target: number,
    smoothFactor: number,
  ): number {
    return prev + (target - prev) * smoothFactor;
  }

  useEffect(() => {
    let animId = 0;

    function animate(timestamp: number) {
      const dt = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const hoverFactor = isHovered ? 2 : 1;
      const targetPulsingPeriodMs = isHovered ? 1000 : 2000;
      const hoverTransitionDurationMs = 1000;
      const progress = Math.min(
        1,
        (timestamp - hoverStartTimeRef.current) / hoverTransitionDurationMs,
      );
      const smoothingFactor = smootherstep(progress);

      const phase = (2 * Math.PI * timestamp) / targetPulsingPeriodMs;
      const targetCosPart = hoverFactor * Math.cos(phase);

      const targetAnimValues = {
        xScale: 0.91665 + 0.0833 * targetCosPart,
        yScale: 1.5 + 0.35 * targetCosPart,
        circleScale: 1.25 + 0.5 * targetCosPart,
        rotationSpeedDegPerSec: isHovered ? 210 : 60,
      };

      const smoothAnimValues = {
        xScale: getSmoothValue(
          prevAnimValuesRef.current.xScale,
          targetAnimValues.xScale,
          smoothingFactor,
        ),
        yScale: getSmoothValue(
          prevAnimValuesRef.current.yScale,
          targetAnimValues.yScale,
          smoothingFactor,
        ),
        circleScale: getSmoothValue(
          prevAnimValuesRef.current.circleScale,
          targetAnimValues.circleScale,
          smoothingFactor,
        ),
        rotationSpeedDegPerSec: getSmoothValue(
          prevAnimValuesRef.current.rotationSpeedDegPerSec,
          targetAnimValues.rotationSpeedDegPerSec,
          smoothingFactor,
        ),
      };

      ellipseRefs.current.forEach((ellipse, i) => {
        if (!ellipse) return;

        ellipseAnglesRef.current[i] +=
          smoothAnimValues.rotationSpeedDegPerSec * (dt / 1000);
        const angle = ellipseAnglesRef.current[i];

        ellipse.style.transform = `
                rotate(${angle}deg)
                scale(${smoothAnimValues.xScale.toFixed(2)}, ${smoothAnimValues.yScale.toFixed(2)})
            `.trim();
      });

      if (circleRef.current) {
        circleRef.current.style.transform = `scale(${smoothAnimValues.circleScale.toFixed(2)})`;
      }

      prevAnimValuesRef.current = smoothAnimValues;

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  const addHoverListeners = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const handlePointerEnter = () => {
      handleOnHover(true);
    };

    const handlePointerLeave = () => {
      handleOnHover(false);
    };

    element.addEventListener("pointerenter", handlePointerEnter);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      element.removeEventListener("pointerenter", handlePointerEnter);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    if (triggerRef?.current) {
      const removeListeners = addHoverListeners(triggerRef.current);
      return () => removeListeners && removeListeners();
    }
  }, [triggerRef, addHoverListeners]);

  useEffect(() => {
    if (boxRef?.current) {
      const removeListeners = addHoverListeners(boxRef.current);
      return () => removeListeners && removeListeners();
    }
  }, [boxRef, addHoverListeners]);

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
      {/* Invisible Box that covers the same area as the icon to capture hover events */}
      <Box
        zIndex={1}
        sx={{ position: "absolute", height: 65, width: 65 }}
        ref={boxRef}
        onPointerEnter={trackPointerEnter}
        onPointerLeave={trackPointerLeave}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
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
            style={{ transformOrigin: "50px 50px", willChange: "transform" }}
          />
        ))}

        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="3"
          fill={hasBeenHovered ? "#61DAFB" : "orange"}
          style={{ transformOrigin: "50px 50px", willChange: "transform" }}
        />
      </svg>
    </Box>
  );
};

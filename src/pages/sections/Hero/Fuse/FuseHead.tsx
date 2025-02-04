import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { styled, keyframes } from "@mui/material";
import {
  convertLocalToGlobal,
  getCurrentRotation,
} from "./convertLocalToGlobal";

// A type for the card's cached layout metrics.
export interface CardMetrics {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface FuseHeadProps {
  animationEnabled: boolean;
  fuseHeadLoopDurationMs: number;
  sparkBurstDurationMs: number;
  pathString: string;
  // Layout and transform parameters for the card:
  cardMetrics: CardMetrics;
  // Transition parameters—these should be stored when a rotation transition begins.
  startRotationDeg: number; // Rotation when the transition started.
  targetRotationDeg: number; // The intended final rotation.
  transitionStartTime: number; // Timestamp (ms) when the transition began.
  transitionDurationMs: number; // Duration (ms) of the rotation transition.
  perspective: number; // The perspective value used on the parent (e.g., 1000)
}

/**
 * This handle exposes a method to get the current fuse head position.
 */
export interface FuseHeadHandle {
  getCurrentPosition: () => { x: number; y: number };
}

const fuseHeadAnim = keyframes`
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
`;

const StyledFuseHead = styled("div")<{
  animationEnabled: boolean;
  fuseHeadLoopDurationMs: number;
  sparkBurstDurationMs: number;
  pathString: string;
}>(
  ({
    animationEnabled,
    fuseHeadLoopDurationMs,
    sparkBurstDurationMs,
    pathString,
  }) => ({
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #ffffff 0%, #ffa500 70%)",
    filter: "drop-shadow(0 0 8px #ffa500)",
    offsetPath: `path("${pathString}")`,
    offsetDistance: "0%",
    offsetRotate: "0deg",
    animation: `${fuseHeadAnim} ${fuseHeadLoopDurationMs}ms linear infinite`,
    opacity: animationEnabled ? 1 : 0,
    transition: `opacity ${sparkBurstDurationMs}ms ease-in-out`,
  }),
);

const FuseHead = forwardRef<FuseHeadHandle, FuseHeadProps>(
  (
    {
      animationEnabled,
      fuseHeadLoopDurationMs,
      sparkBurstDurationMs,
      pathString,
      cardMetrics,
      startRotationDeg,
      targetRotationDeg,
      transitionStartTime,
      transitionDurationMs,
      perspective,
    },
    ref,
  ) => {
    const fuseHeadRef = useRef<HTMLDivElement>(null);

    // Create an offscreen SVG path element for position calculation.
    const offscreenPathRef = useRef<SVGPathElement | null>(null);
    const totalLengthRef = useRef<number>(0);
    // Record a reference start time (this could be reset when the path changes).
    const startTimeRef = useRef<number>(performance.now());

    useEffect(() => {
      const svgNS = "http://www.w3.org/2000/svg";
      const pathEl = document.createElementNS(svgNS, "path");
      pathEl.setAttribute("d", pathString);
      offscreenPathRef.current = pathEl;
      totalLengthRef.current = pathEl.getTotalLength();
      startTimeRef.current = performance.now();
    }, [pathString]);

    useImperativeHandle(ref, () => ({
      getCurrentPosition: () => {
        if (!offscreenPathRef.current) {
          // Return an offscreen value if not available.
          return { x: -9999, y: -9999 };
        }
        const now = performance.now();
        const elapsed = now - startTimeRef.current;
        const progress =
          (elapsed % fuseHeadLoopDurationMs) / fuseHeadLoopDurationMs;
        // Compute the fuse head's local position along its SVG path.
        const localPos = offscreenPathRef.current.getPointAtLength(
          totalLengthRef.current * progress,
        );
        // Compute the current rotation of the card using interpolation.
        const currentRotationDeg = getCurrentRotation(
          startRotationDeg,
          targetRotationDeg,
          transitionStartTime,
          transitionDurationMs,
        );
        // Convert the local position into a global position.
        const globalPos = convertLocalToGlobal(
          localPos,
          cardMetrics,
          currentRotationDeg,
          perspective,
        );
        return globalPos;
      },
    }));

    return (
      <StyledFuseHead
        ref={fuseHeadRef}
        animationEnabled={animationEnabled}
        fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
        sparkBurstDurationMs={sparkBurstDurationMs}
        pathString={pathString}
      />
    );
  },
);

export default FuseHead;

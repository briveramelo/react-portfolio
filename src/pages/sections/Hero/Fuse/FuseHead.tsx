import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { styled, keyframes } from "@mui/material";

export interface FuseHeadProps {
  animationEnabled: boolean;
  fuseHeadLoopDurationMs: number;
  sparkBurstDurationMs: number;
  pathString: string;
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
    },
    ref,
  ) => {
    const fuseHeadRef = useRef<HTMLDivElement>(null);

    // Create an offscreen SVG path element to compute positions without layout reads.
    const offscreenPathRef = useRef<SVGPathElement | null>(null);
    const totalLengthRef = useRef<number>(0);
    // Record the start time so we can sync the computed position with the CSS animation.
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
          return { x: 0, y: 0 };
        }

        const now = performance.now();
        const elapsed = now - startTimeRef.current;
        const progress =
          (elapsed % fuseHeadLoopDurationMs) / fuseHeadLoopDurationMs;
        const point = offscreenPathRef.current.getPointAtLength(
          totalLengthRef.current * progress,
        );
        return { x: point.x, y: point.y };
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

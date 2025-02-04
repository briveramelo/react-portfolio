import React, { forwardRef, useImperativeHandle, useRef } from "react";
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
    zIndex: 2,
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

    useImperativeHandle(ref, () => ({
      getCurrentPosition: () => {
        if (!fuseHeadRef.current) {
          // Return an offscreen value if not available.
          return { x: -9999, y: -9999 };
        }
        const rect = fuseHeadRef.current.getBoundingClientRect();
        // Return the center of the fuse head.
        const pos = {
          x: rect.x + rect.width / 2 + window.scrollX,
          y: rect.y + rect.height / 2 + window.scrollY,
        };
        return pos;
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

import React, { forwardRef } from "react";
import { styled, keyframes } from "@mui/material";

export interface FuseHeadProps {
  animationEnabled: boolean;
  fuseHeadLoopDurationMs: number;
  sparkBurstDurationMs: number;
  pathString: string;
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

const FuseHead = forwardRef<HTMLDivElement, FuseHeadProps>(
  (
    {
      animationEnabled,
      fuseHeadLoopDurationMs,
      sparkBurstDurationMs,
      pathString,
    },
    ref,
  ) => {
    return (
      <StyledFuseHead
        ref={ref}
        animationEnabled={animationEnabled}
        fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
        sparkBurstDurationMs={sparkBurstDurationMs}
        pathString={pathString}
      />
    );
  },
);

export default FuseHead;

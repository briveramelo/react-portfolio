import React, { useRef, useCallback } from "react";
import { useTheme, SxProps, Theme } from "@mui/material";
import {
  resolveResponsiveValue,
  useBreakpointMatches,
} from "../../../../utils/muiSizeUtils";
import FuseHead, { FuseHeadHandle } from "./FuseHead";
import SparkEmitter from "./SparkEmitter";

export interface FuseEffectProps {
  // @ts-ignore
  width: SxProps<Theme>["width"];
  // @ts-ignore
  height: SxProps<Theme>["height"];
  borderRadius: number;
  sparksPerBurst: number;
  burstIntervalMs: number;
  fuseHeadLoopDurationMs?: number;
  sparkBurstDurationMs?: number;
  animationEnabled?: boolean;
}

const FuseEffect: React.FC<FuseEffectProps> = ({
  width,
  height,
  borderRadius,
  fuseHeadLoopDurationMs = 2000,
  sparksPerBurst = 3,
  burstIntervalMs = 50,
  sparkBurstDurationMs = 500,
  animationEnabled = false,
}) => {
  const theme = useTheme();
  const breakpointMatches = useBreakpointMatches();
  const effectiveWidth = resolveResponsiveValue(
    width,
    theme,
    breakpointMatches,
  );
  const effectiveHeight = resolveResponsiveValue(
    height,
    theme,
    breakpointMatches,
  );

  // an SVG path string that traces the container’s outline.
  const pathString = `M ${borderRadius},0 H ${
    effectiveWidth - borderRadius
  } Q ${effectiveWidth},0 ${effectiveWidth},${borderRadius} V ${
    effectiveHeight - borderRadius
  } Q ${effectiveWidth},${effectiveHeight} ${
    effectiveWidth - borderRadius
  } ${effectiveHeight} H ${borderRadius} Q 0,${effectiveHeight} 0,${
    effectiveHeight - borderRadius
  } V ${borderRadius} Q 0,0 ${borderRadius},0 Z`;

  const fuseHeadRef = useRef<FuseHeadHandle>(null);

  const getFuseHeadPosition = useCallback(() => {
    if (fuseHeadRef.current) {
      return fuseHeadRef.current.getCurrentPosition();
    }
    return null;
  }, []);

  return (
    <>
      <FuseHead
        ref={fuseHeadRef}
        animationEnabled={animationEnabled}
        fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
        sparkBurstDurationMs={sparkBurstDurationMs}
        pathString={pathString}
      />

      {animationEnabled && (
        <SparkEmitter
          animationEnabled={animationEnabled}
          sparksPerBurst={sparksPerBurst}
          burstIntervalMs={burstIntervalMs}
          fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
          sparkBurstDurationMs={sparkBurstDurationMs}
          getFuseHeadPosition={getFuseHeadPosition}
        />
      )}
    </>
  );
};

export default React.memo(FuseEffect);

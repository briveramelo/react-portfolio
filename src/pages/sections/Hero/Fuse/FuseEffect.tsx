import React, { useRef } from "react";
import { styled, useTheme, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import {
  resolveResponsiveValue,
  useBreakpointMatches,
} from "../../../../utils/muiSizeUtils.ts";
import FuseHead from "./FuseHead.tsx";
import SparkEmitter from "./SparkEmitter.tsx";

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

const OverlayContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  overflow: "visible",
  zIndex: 10,
});

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

  // Construct an SVG path string for the container’s outline.
  const pathString = `M ${borderRadius},0 H ${
    effectiveWidth - borderRadius
  } Q ${effectiveWidth},0 ${effectiveWidth},${borderRadius} V ${
    effectiveHeight - borderRadius
  } Q ${effectiveWidth},${effectiveHeight} ${
    effectiveWidth - borderRadius
  } ${effectiveHeight} H ${borderRadius} Q 0,${effectiveHeight} 0,${
    effectiveHeight - borderRadius
  } V ${borderRadius} Q 0,0 ${borderRadius},0 Z`;

  // Ref for the fuse head.
  const fuseHeadRef = useRef<HTMLDivElement>(null);

  const getFuseHeadPosition = (): { x: number; y: number } | null => {
    if (fuseHeadRef.current) {
      const fuseRect = fuseHeadRef.current.getBoundingClientRect();
      return {
        x: fuseRect.left + fuseRect.width / 2,
        y: fuseRect.top + fuseRect.height / 2,
      };
    }
    return null;
  };

  return (
    <>
      <OverlayContainer>
        <FuseHead
          ref={fuseHeadRef}
          animationEnabled={animationEnabled}
          fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
          sparkBurstDurationMs={sparkBurstDurationMs}
          pathString={pathString}
        />
      </OverlayContainer>
      <SparkEmitter
        animationEnabled={animationEnabled}
        sparksPerBurst={sparksPerBurst}
        burstIntervalMs={burstIntervalMs}
        fuseHeadLoopDurationMs={fuseHeadLoopDurationMs}
        sparkBurstDurationMs={sparkBurstDurationMs}
        getFuseHeadPosition={getFuseHeadPosition}
      />
    </>
  );
};

export default React.memo(FuseEffect);

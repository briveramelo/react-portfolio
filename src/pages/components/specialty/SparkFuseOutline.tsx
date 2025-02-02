import React, { useRef, useState } from "react";
import { styled, useTheme, SxProps, Theme, keyframes } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { generateProjectileKeyframes } from "../../../utils/keyframeGenerator";

/**
 * Helper: Convert a fixed value (number or string ending in "px") to a number.
 */
function parsePx(value: number | string): number {
  if (typeof value === "number") return value;
  if (value.trim().endsWith("px")) {
    return parseFloat(value);
  }
  throw new Error(
    `Expected a pixel value (e.g., "400px" or 400), but got: ${value}`,
  );
}

/**
 * Helper: Resolve a responsive value into a pixel number.
 *
 * The value can be a fixed number/string or an object keyed by breakpoints.
 * We use the MUI theme’s breakpoints and media queries to pick the appropriate value.
 */
function resolveResponsiveValue(
  value: number | string | { [key: string]: number | string },
  theme: Theme,
  breakpointMatches: Record<string, boolean>,
): number {
  if (typeof value === "number" || typeof value === "string") {
    return parsePx(value);
  }
  // Try breakpoints in descending order (largest first)
  const bpOrder = [...theme.breakpoints.keys].reverse();
  for (const bp of bpOrder) {
    if (breakpointMatches[bp] && value[bp] !== undefined) {
      return parsePx(value[bp]);
    }
  }
  // Fallback: use first defined value in ascending order
  for (const bp of theme.breakpoints.keys) {
    if (value[bp] !== undefined) {
      return parsePx(value[bp]);
    }
  }
  throw new Error("No valid responsive value provided");
}

export interface SparkFuseOutlineProps {
  // @ts-ignore
  width: SxProps<Theme>["width"];
  // @ts-ignore
  height: SxProps<Theme>["height"];
  borderRadius: number;
  fuseHeadLoopDurationMs?: number;
  sparkBurstCount?: number;
  sparkBurstDurationMs?: number;
}

const SparkFuseOutline: React.FC<SparkFuseOutlineProps> = ({
  width,
  height,
  borderRadius,
  fuseHeadLoopDurationMs = 2000,
  sparkBurstCount = 3,
  sparkBurstDurationMs = 500,
}) => {
  const theme = useTheme();

  // Build media queries for each breakpoint.
  const breakpointMatches: Record<string, boolean> = {
    xs: useMediaQuery(theme.breakpoints.up("xs")),
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  };

  // Resolve effective pixel dimensions.
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
  // This path follows the border (with rounded corners) of the container.
  const pathString = `M ${borderRadius},0 H ${effectiveWidth - borderRadius} Q ${effectiveWidth},0 ${effectiveWidth},${borderRadius} V ${effectiveHeight - borderRadius} Q ${effectiveWidth},${effectiveHeight} ${effectiveWidth - borderRadius},${effectiveHeight} H ${borderRadius} Q 0,${effectiveHeight} 0,${effectiveHeight - borderRadius} V ${borderRadius} Q 0,0 ${borderRadius},0 Z`;

  // The overlay container fills its parent.
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

  const fuseHeadAnim = keyframes`
      0% { offset-distance: 0%; }
      100% { offset-distance: 100%; }
  `;
  const opacityAnim = keyframes`
      0% { opacity: 1; }
      100% { opacity: 0; }
  `;

  // The fuse head moves along the container's border.
  // It uses CSS offset-path to follow the pathString.
  const FuseHead = styled("div")({
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
  });

  const Spark = styled("div")({
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #ffa500 0%, #ff4500 70%)",
    pointerEvents: "none",
  });

  const sparks = Array.from({ length: sparkBurstCount }).map((_, index) => {
    // Evenly stagger delays over the duration of the spark burst.
    const delay = (sparkBurstDurationMs / sparkBurstCount) * index;

    const MIN_VELOCITY = 175;
    const MAX_VELOCITY = 250;
    const MIN_ANGLE = 15;
    const MAX_ANGLE = 165;
    const randomAngle = (MAX_ANGLE - MIN_ANGLE + MIN_ANGLE) * Math.random();
    const randomVelocity =
      (MAX_VELOCITY - MIN_VELOCITY + MIN_VELOCITY) * Math.random();

    const customSparkArcAnimation = generateProjectileKeyframes(
      randomAngle,
      randomVelocity,
      1500,
      40,
      3,
      500,
    );

    return (
      <Spark
        key={index}
        sx={{
          animation: `${customSparkArcAnimation} ${sparkBurstDurationMs}ms ease-out infinite, ${opacityAnim} ${sparkBurstDurationMs}ms ease-out infinite`,
          animationDelay: `${delay}ms`,
        }}
      />
    );
  });

  return (
    <OverlayContainer>
      <FuseHead>{sparks}</FuseHead>
    </OverlayContainer>
  );
};

export default React.memo(SparkFuseOutline);

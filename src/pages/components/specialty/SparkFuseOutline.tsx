import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { styled, useTheme, SxProps, Theme, keyframes } from "@mui/material";
import Box from "@mui/material/Box";
import { generateProjectileKeyframes } from "../../../utils/keyframeGenerator";
import {
  resolveResponsiveValue,
  useBreakpointMatches,
} from "../../../utils/muiSizeUtils";

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

/**
 * A Spark component that exposes an imperative restart method.
 * Its animation is defined solely via its sx prop (using the memoized sparkAnimation value),
 * and its position (left/top) is controlled via its internal state.
 */
export interface SparkHandle {
  restart: (left: number, top: number) => void;
}

interface SparkProps {
  sparkAnimation: string;
}

const Spark = forwardRef<SparkHandle, SparkProps>(({ sparkAnimation }, ref) => {
  // Internal state for position and a restart counter.
  const [state, setState] = useState<{
    left: number;
    top: number;
    restartKey: number;
  }>({
    left: 0,
    top: 0,
    restartKey: 0,
  });

  // Expose an imperative method to update position (and restart the animation).
  useImperativeHandle(ref, () => ({
    restart(left: number, top: number) {
      setState((prev) => ({
        left,
        top,
        restartKey: prev.restartKey + 1, // change the key so the sx prop re-evaluates
      }));
    },
  }));

  // Use a Box so that we can leverage the sx prop.
  return (
    <Box
      // We include the restartKey in the sx so that the animation is re-applied on change.
      key={state.restartKey}
      sx={{
        position: "absolute",
        background: "radial-gradient(circle, #ffffff 0%, #ffa500 70%)",
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        pointerEvents: "none",
        left: state.left,
        top: state.top,
        animation: sparkAnimation,
      }}
    />
  );
});

Spark.displayName = "Spark";

// Main component.
const SparkFuseOutline: React.FC<SparkFuseOutlineProps> = ({
  width,
  height,
  borderRadius,
  fuseHeadLoopDurationMs = 2000,
  sparkBurstCount = 3,
  sparkBurstDurationMs = 500,
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

  // The fuse head animation along the outline.
  const fuseHeadAnim = keyframes`
      0% { offset-distance: 0%; }
      100% { offset-distance: 100%; }
  `;
  // Fuse head styled component that follows the SVG path using CSS offset-path.
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

  // Refs to get DOM nodes.
  const fuseHeadRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /**
   * Helper to get the fuse head's position relative to the overlay container.
   */
  const getFuseHeadPosition = (): { x: number; y: number } | null => {
    if (fuseHeadRef.current && overlayRef.current) {
      const fuseRect = fuseHeadRef.current.getBoundingClientRect();
      const overlayRect = overlayRef.current.getBoundingClientRect();
      return {
        x: fuseRect.left - overlayRect.left + fuseRect.width / 2,
        y: fuseRect.top - overlayRect.top + fuseRect.height / 2,
      };
    }
    return null;
  };

  // Memoize an array of animation strings (one per spark).
  const sparkAnimations = useMemo(() => {
    const MIN_VELOCITY = 175;
    const MAX_VELOCITY = 250;
    const MIN_ANGLE = 15;
    const MAX_ANGLE = 165;
    // Define the opacity animation once.
    const opacityAnim = keyframes`
      0% { opacity: 1; }
      100% { opacity: 0; }
    `;
    return Array.from({ length: sparkBurstCount }, () => {
      const randomAngle = MIN_ANGLE + (MAX_ANGLE - MIN_ANGLE) * Math.random();
      const randomVelocity =
        MIN_VELOCITY + (MAX_VELOCITY - MIN_VELOCITY) * Math.random();
      const projectileKeyframes = generateProjectileKeyframes({
        initialAngleDeg: randomAngle,
        initialVelocityPxPerSec: randomVelocity,
        totalTimeMs: 1500,
        numKeyframes: 40,
        numDecimals: 3,
        gravity: 500,
      });
      return `${projectileKeyframes} ${sparkBurstDurationMs}ms ease-out forwards, ${opacityAnim} ${sparkBurstDurationMs}ms ease-out forwards`;
    });
  }, [sparkBurstCount, sparkBurstDurationMs]);

  // Create a ref array for sparks. The sparks will be rendered once.
  const sparkRefs = useRef<Array<React.RefObject<SparkHandle>>>(
    Array.from({ length: sparkBurstCount }, () =>
      React.createRef<SparkHandle>(),
    ),
  );
  // Track which spark to update next.
  const currentSparkIndex = useRef<number>(0);

  /**
   * Emit a spark by calling the corresponding spark’s restart method.
   * This will update the spark’s internal state so that its SX prop (including its animation)
   * is re‑applied.
   */
  const emitSpark = () => {
    const pos = getFuseHeadPosition();
    if (!pos) return;

    const index = currentSparkIndex.current;
    const sparkRef = sparkRefs.current[index];
    if (sparkRef.current) {
      sparkRef.current.restart(pos.x, pos.y);
    }
    currentSparkIndex.current = (index + 1) % sparkBurstCount;
  };

  /**
   * Set up an interval to emit sparks in bursts.
   *
   * We trigger sparkBurstCount emissions evenly over each fuse head animation cycle.
   */
  useEffect(() => {
    const intervalTime = fuseHeadLoopDurationMs / sparkBurstCount;
    const intervalId = setInterval(() => {
      emitSpark();
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [fuseHeadLoopDurationMs, sparkBurstCount]);

  return (
    <OverlayContainer ref={overlayRef}>
      <FuseHead ref={fuseHeadRef} />
      {Array.from({ length: sparkBurstCount }).map((_, index) => (
        <Spark
          key={index}
          ref={sparkRefs.current[index]}
          sparkAnimation={sparkAnimations[index]}
        />
      ))}
    </OverlayContainer>
  );
};

export default React.memo(SparkFuseOutline);

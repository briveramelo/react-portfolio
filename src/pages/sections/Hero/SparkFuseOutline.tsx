import React, { useRef, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { styled, useTheme, SxProps, Theme, keyframes } from "@mui/material";
import Box from "@mui/material/Box";
import { generateProjectileKeyframes } from "../../../utils/keyframeGenerator.ts";
import {
  resolveResponsiveValue,
  useBreakpointMatches,
} from "../../../utils/muiSizeUtils.ts";
import Spark, { SparkHandle } from "./Spark.tsx";

export interface SparkFuseOutlineProps {
  // @ts-ignore
  width: SxProps<Theme>["width"];
  // @ts-ignore
  height: SxProps<Theme>["height"];
  borderRadius: number;
  sparksPerBurst: number;
  burstIntervalMs: number;
  fuseHeadLoopDurationMs?: number;
  sparkBurstDurationMs?: number;
  /** Toggle the entire animation state (fuse head and sparks) */
  animationEnabled?: boolean;
}

const SparkFuseOutline: React.FC<SparkFuseOutlineProps> = ({
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
  const totalSparkCount = Math.ceil(
    sparksPerBurst * (fuseHeadLoopDurationMs / burstIntervalMs),
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

  // The overlay container for the fuse head – this may be transformed,
  // but note that sparks will be rendered in a portal so they won’t be affected.
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
  // We pass in animationEnabled to control the play state.
  const FuseHead = styled("div")<{ animationEnabled: boolean }>(
    ({ animationEnabled }) => ({
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
      transition: `opacity ${sparkBurstDurationMs}ms ease-in-out ${burstIntervalMs}ms`,
    }),
  );

  // Ref to get the fuse head DOM node.
  const fuseHeadRef = useRef<HTMLDivElement>(null);

  /**
   * Helper to get the fuse head's position in viewport coordinates.
   */
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

  const sparkAnimations = useMemo(() => {
    const MIN_VELOCITY = 250;
    const MAX_VELOCITY = 350;
    const MIN_ANGLE = 60;
    const MAX_ANGLE = 120;
    return Array.from({ length: totalSparkCount }).map(() => {
      const randomAngle = MIN_ANGLE + (MAX_ANGLE - MIN_ANGLE) * Math.random();
      const randomVelocity =
        MIN_VELOCITY + (MAX_VELOCITY - MIN_VELOCITY) * Math.random();
      const keyframes = generateProjectileKeyframes({
        initialAngleDeg: randomAngle,
        initialVelocityPxPerSec: randomVelocity,
        totalTimeMs: sparkBurstDurationMs,
        numKeyframes: 30,
        numDecimals: 3,
        gravity: 500,
      });
      const animationOptions: KeyframeAnimationOptions = {
        duration: sparkBurstDurationMs,
        easing: "ease-out",
        fill: "forwards",
      };
      return {
        keyframes,
        animationOptions,
      };
    });
  }, [sparkBurstDurationMs, totalSparkCount]);

  const sparkRefs = useRef<Array<React.RefObject<SparkHandle>>>(
    Array.from({ length: totalSparkCount }, () =>
      React.createRef<SparkHandle>(),
    ),
  );
  const currentSparkIndex = useRef<number>(0);

  /**
   * Emit a spark by calling the corresponding spark’s restart method.
   * This will update the spark’s internal state so that its sx prop (including its animation)
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
    currentSparkIndex.current = (index + 1) % totalSparkCount;
  };

  /**
   * Set up an interval to emit sparks in bursts.
   *
   * We trigger sparkBurstCount emissions evenly over each fuse head animation cycle.
   */
  useEffect(() => {
    if (!animationEnabled) return;

    const intervalId = setInterval(() => {
      for (let i = 0; i < sparksPerBurst; i++) {
        emitSpark();
      }
    }, burstIntervalMs);

    return () => clearInterval(intervalId);
  }, [fuseHeadLoopDurationMs, totalSparkCount, animationEnabled]);

  /**
   * Create a portal container for the sparks so that their positions are not affected by any
   * parent transformations. This container is appended to document.body.
   */
  const [sparkContainer, setSparkContainer] = useState<HTMLDivElement | null>(
    null,
  );

  useEffect(() => {
    const container = document.createElement("div");
    // Make sure the container spans the viewport and does not interfere with pointer events.
    Object.assign(container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 3,
    });
    document.body.appendChild(container);
    setSparkContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return (
    <>
      <OverlayContainer>
        <FuseHead ref={fuseHeadRef} animationEnabled={animationEnabled} />
      </OverlayContainer>
      {sparkContainer &&
        ReactDOM.createPortal(
          <>
            {Array.from({ length: totalSparkCount }).map((_, index) => (
              <Spark
                key={index}
                ref={sparkRefs.current[index]}
                keyframes={sparkAnimations[index].keyframes}
                animationOptions={sparkAnimations[index].animationOptions}
              />
            ))}
          </>,
          sparkContainer,
        )}
    </>
  );
};

export default React.memo(SparkFuseOutline);

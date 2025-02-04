import React, { useRef, useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { generateProjectileKeyframes } from "../../../../utils/keyframeGenerator.ts";
import Spark from "./Spark.tsx";
import { SparkHandle } from "./Spark.tsx";

export interface SparkEmitterProps {
  animationEnabled: boolean;
  sparksPerBurst: number;
  burstIntervalMs: number;
  fuseHeadLoopDurationMs: number;
  sparkBurstDurationMs: number;
  /** A function returning the current fuse head position */
  getFuseHeadPosition: () => { x: number; y: number } | null;
}

const SparkEmitter: React.FC<SparkEmitterProps> = ({
  animationEnabled,
  sparksPerBurst,
  burstIntervalMs,
  fuseHeadLoopDurationMs,
  sparkBurstDurationMs,
  getFuseHeadPosition,
}) => {
  // Compute the total number of sparks needed
  const totalSparkCount = useMemo(
    () =>
      Math.ceil(sparksPerBurst * (fuseHeadLoopDurationMs / burstIntervalMs)),
    [sparksPerBurst, fuseHeadLoopDurationMs, burstIntervalMs],
  );

  // Create spark animations
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

  // Create an array of refs for the Spark components.
  const sparkRefs = useRef<Array<React.RefObject<SparkHandle>>>(
    Array.from({ length: totalSparkCount }, () =>
      React.createRef<SparkHandle>(),
    ),
  );

  // For rotating through sparks in a round-robin fashion.
  const currentSparkIndex = useRef(0);

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

  // Set up an interval to emit sparks in bursts.
  useEffect(() => {
    if (!animationEnabled) return;
    const intervalId = setInterval(() => {
      for (let i = 0; i < sparksPerBurst; i++) {
        emitSpark();
      }
    }, burstIntervalMs);
    return () => clearInterval(intervalId);
  }, [
    animationEnabled,
    sparksPerBurst,
    burstIntervalMs,
    totalSparkCount,
    getFuseHeadPosition,
  ]);

  // Create a portal container so that sparks are positioned relative to the viewport.
  const [sparkContainer, setSparkContainer] = useState<HTMLDivElement | null>(
    null,
  );
  useEffect(() => {
    const container = document.createElement("div");
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

  if (!sparkContainer) return null;

  return ReactDOM.createPortal(
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
  );
};

export default SparkEmitter;

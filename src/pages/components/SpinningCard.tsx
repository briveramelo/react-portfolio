import React, { useRef, useCallback, MouseEvent, useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";

export interface SpinningCardProps {
  id?: string;
  isCardAnimating: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRotationDeg: number;
  instantFlip: boolean;
  transitionDurationMs: number;
  isSectionVisible: boolean;
  isTouchDevice?: boolean;
  onHasBeenHovered?: () => void;
  onClickCard?: (event: MouseEvent<HTMLDivElement>) => void;
  onSpin?: (deltaDeg: number) => void;
  cardWidth: any; // e.g. { sm: "400px", xs: "375px" }
  cardHeight: any;
  borderRadius: number;
  children?: React.ReactNode;
  containerProps?: BoxProps;
}

export const SpinningCard: React.FC<SpinningCardProps> = ({
  id,
  isCardAnimating,
  onSpin,
  containerRef,
  targetRotationDeg,
  instantFlip,
  transitionDurationMs,
  isSectionVisible,
  isTouchDevice = false,
  onHasBeenHovered,
  onClickCard,
  cardWidth,
  cardHeight,
  borderRadius,
  children,
  containerProps,
}) => {
  const { trackPointerEnter, trackPointerLeave, isHovered, hasBeenHovered } =
    useHoverTracking(true, USER_TRANSITION_DURATION_MS);
  useEffect(() => {
    if (hasBeenHovered) {
      onHasBeenHovered?.();
    }
  }, [hasBeenHovered, onHasBeenHovered]);

  const entrySideRef = useRef<"left" | "right" | null>(null);
  const transitionStartTimeMsRef = useRef<number>(performance.now());

  const isRight = useCallback(
    (event: MouseEvent<HTMLDivElement>): boolean => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return false;
      return event.clientX - rect.left > rect.width / 2;
    },
    [containerRef.current],
  );

  const isInsideContainer = useCallback(
    (event: MouseEvent<HTMLDivElement>): boolean => {
      const tolerance = 1;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (
          event.clientX >= rect.left - tolerance &&
          event.clientX <= rect.right + tolerance &&
          event.clientY >= rect.top - tolerance &&
          event.clientY <= rect.bottom + tolerance
        ) {
          return true;
        }
      }
      return false;
    },
    [containerRef.current],
  );

  // Pointer enter: if not animating and no entry side stored, determine side and spin.
  const handlePointerEnter = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isCardAnimating || entrySideRef.current) return;

      if (!isInsideContainer(event)) {
        return;
      }

      const entrySide = isRight(event) ? "right" : "left";
      entrySideRef.current = entrySide;
      onSpin?.(entrySide === "right" ? -180 : 180);
      transitionStartTimeMsRef.current = performance.now();
      trackPointerEnter();
    },
    [isCardAnimating, isRight, onSpin, trackPointerEnter, isInsideContainer],
  );

  // Pointer leave: if not animating and an entry side exists, check if leaving the container
  // and then compute the proper additional spin.
  const handlePointerLeave = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isCardAnimating || !entrySideRef.current) return;

      if (isInsideContainer(event)) {
        return;
      }

      const exitSide = isRight(event) ? "right" : "left";
      const initialEffect = entrySideRef.current === "right" ? -180 : 180;
      const additional =
        exitSide === entrySideRef.current ? -initialEffect : initialEffect;
      onSpin?.(additional);
      transitionStartTimeMsRef.current = performance.now();
      entrySideRef.current = null;
      // Call the hover tracking callback provided by the parent
      trackPointerLeave(event);
    },
    [isCardAnimating, isRight, onSpin, trackPointerLeave, isInsideContainer],
  );

  const handleTap = useCallback(
    (event: MouseEvent<HTMLDivElement>): void => {
      const isFlipping =
        performance.now() - transitionStartTimeMsRef.current <
        transitionDurationMs;
      if (isCardAnimating || isFlipping) return;
      onSpin?.(180);
      transitionStartTimeMsRef.current = performance.now();
    },
    [isCardAnimating, onSpin, transitionDurationMs],
  );

  return (
    <Box
      onClick={isTouchDevice ? handleTap : onClickCard}
      onPointerEnter={!isTouchDevice ? handlePointerEnter : undefined}
      onPointerLeave={!isTouchDevice ? handlePointerLeave : undefined}
      {...containerProps}
      sx={{
        perspective: "1000px",
        display: "block",
        position: "relative",
        ...containerProps?.sx,
      }}
      id={`${id}_container`}
    >
      {/* For non-touch devices, an invisible overlay to capture pointer enter events */}
      {!isTouchDevice && (
        <Box
          ref={containerRef}
          sx={{
            position: "absolute",
            width: cardWidth,
            height: cardHeight,
            zIndex: isCardAnimating || isHovered ? -1 : 2,
            borderRadius: `${borderRadius}px`,
            pointerEvents: isCardAnimating || isHovered ? "none" : "auto",
          }}
          id={id}
          onPointerEnter={handlePointerEnter}
        />
      )}
      <Box
        sx={{
          width: cardWidth,
          height: cardHeight,
          position: "relative",
          transformStyle: "preserve-3d",
          transition: instantFlip
            ? "none"
            : `transform ${transitionDurationMs}ms ease`,
          transform: `rotateY(${targetRotationDeg}deg)`,
          willChange: isSectionVisible ? "transform" : undefined,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

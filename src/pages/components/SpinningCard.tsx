import React, { useRef, useCallback, MouseEvent } from "react";
import { Box, BoxProps } from "@mui/material";

export interface SpinningCardProps {
  id?: string;
  isCardAnimating: boolean;
  onSpin?: (deltaDeg: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRotationDeg: number;
  instantFlip: boolean;
  transitionDurationMs: number;
  isSectionVisible: boolean;
  isTouchDevice?: boolean;
  onPointerEnterCard?: (event: MouseEvent<HTMLDivElement>) => void;
  onPointerLeaveCard?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCard?: (event: MouseEvent<HTMLDivElement>) => void;
  imageWidth: any; // e.g. { sm: "400px", xs: "375px" }
  imageHeight: any;
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
  onClickCard,
  imageWidth,
  imageHeight,
  borderRadius,
  children,
  containerProps,
  onPointerEnterCard,
  onPointerLeaveCard,
}) => {
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

  // Pointer enter: if not animating and no entry side stored, determine side and spin.
  const handlePointerEnter = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isCardAnimating || entrySideRef.current) return;
      const entrySide = isRight(event) ? "right" : "left";
      entrySideRef.current = entrySide;
      onSpin?.(entrySide === "right" ? -180 : 180);
      transitionStartTimeMsRef.current = performance.now();
      // Call the hover tracking callback provided by the parent
      onPointerEnterCard?.(event);
    },
    [isCardAnimating, isRight, onSpin, onPointerEnterCard],
  );

  // Pointer leave: if not animating and an entry side exists, check if leaving the container
  // and then compute the proper additional spin.
  const handlePointerLeave = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isCardAnimating || !entrySideRef.current) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        if (
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom
        ) {
          return;
        }
      }
      const exitSide = isRight(event) ? "right" : "left";
      const initialEffect = entrySideRef.current === "right" ? -180 : 180;
      const additional =
        exitSide === entrySideRef.current ? -initialEffect : initialEffect;
      onSpin?.(additional);
      transitionStartTimeMsRef.current = performance.now();
      entrySideRef.current = null;
      // Call the hover tracking callback provided by the parent
      onPointerLeaveCard?.(event);
    },
    [
      isCardAnimating,
      isRight,
      onSpin,
      onPointerLeaveCard,
      containerRef.current,
    ],
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
      ref={containerRef}
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
          sx={{
            position: "absolute",
            width: imageWidth,
            height: imageHeight,
            zIndex: isCardAnimating || isSectionVisible ? -1 : 2,
            borderRadius: `${borderRadius}px`,
            pointerEvents:
              isCardAnimating || isSectionVisible ? "none" : "auto",
          }}
          id={id}
          onPointerEnter={handlePointerEnter}
        />
      )}
      <Box
        sx={{
          width: imageWidth,
          height: imageHeight,
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

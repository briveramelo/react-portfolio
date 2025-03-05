import React, {
  useRef,
  useCallback,
  MouseEvent,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Box, BoxProps } from "@mui/material";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";

export interface SpinningCardHandle {
  onClear: (event: MouseEvent<HTMLElement>) => void;
}

export interface SpinningCardProps {
  id?: string;
  isListeningForEvents: boolean;
  visibleLagTimeMs?: number;
  targetRotationDegRef?: React.RefObject<number>;
  containerRef: React.RefObject<HTMLDivElement>;
  transitionDurationMs: number;
  isSectionVisible: boolean;
  isTouchDevice?: boolean;
  onHasBeenHovered?: () => void;
  onClickCard?: (event: MouseEvent<HTMLDivElement>) => void;
  onSpin?: (deltaDeg: number) => void;
  cardWidth: any; // e.g. { sm: "400px", xs: "375px" }
  cardHeight: any;
  borderRadius: string | number;
  children?: React.ReactNode;
  containerProps?: BoxProps;
}

export const SpinningCard = forwardRef<SpinningCardHandle, SpinningCardProps>(
  (
    {
      id,
      isListeningForEvents,
      onSpin,
      containerRef,
      visibleLagTimeMs = 500,
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
    },
    ref,
  ) => {
    const { trackPointerEnter, trackPointerLeave, isHovered, hasBeenHovered } =
      useHoverTracking(true, USER_TRANSITION_DURATION_MS);
    const [isVisibleLag, setIsVisibleLag] = useState<boolean>(false);
    const targetRotationDegRef = useRef<number>(0);
    const entrySideRef = useRef<"left" | "right" | null>(null);
    const exitSideRef = useRef<"left" | "right" | null>(null);
    const transitionStartTimeMsRef = useRef<number>(performance.now());

    useEffect(() => {
      if (hasBeenHovered) {
        onHasBeenHovered?.();
      }
    }, [hasBeenHovered, onHasBeenHovered]);

    useImperativeHandle(ref, () => ({
      onClear: (event: MouseEvent<HTMLElement>) => {
        entrySideRef.current = null;
        exitSideRef.current = null;
        transitionStartTimeMsRef.current = performance.now();
        trackPointerLeave(event);
      },
    }));

    const isLeft = useCallback(
      (event: MouseEvent<HTMLDivElement>): boolean => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return false;
        return event.clientX < rect.right - rect.width / 2;
      },
      [containerRef.current],
    );

    const isInsideContainer = useCallback(
      (event: MouseEvent<HTMLDivElement>): boolean => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          return (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
          );
        }
        return false;
      },
      [containerRef.current],
    );

    const isFlipping = useCallback(() => {
      return (
        performance.now() - transitionStartTimeMsRef.current <
        transitionDurationMs
      );
    }, [transitionDurationMs]);

    const handlePointerEnter = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        if (!isListeningForEvents || !isVisibleLag || entrySideRef.current) {
          return;
        }

        entrySideRef.current = isLeft(event) ? "left" : "right";
        exitSideRef.current = null;
        transitionStartTimeMsRef.current = performance.now();
        trackPointerEnter();
      },
      [isListeningForEvents, isLeft, trackPointerEnter, isVisibleLag],
    );

    const handlePointerLeave = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        if (!isListeningForEvents || !isVisibleLag || !entrySideRef.current) {
          return;
        }

        if (isInsideContainer(event)) {
          return;
        }

        entrySideRef.current = null;
        exitSideRef.current = isLeft(event) ? "left" : "right";
        transitionStartTimeMsRef.current = performance.now();
        trackPointerLeave(event);
      },
      [
        isListeningForEvents,
        isLeft,
        trackPointerLeave,
        isInsideContainer,
        isVisibleLag,
      ],
    );

    useEffect(() => {
      const sideRef = isHovered ? entrySideRef : exitSideRef;
      if (!sideRef.current) return;

      let addition = sideRef?.current === "left" ? 180 : -180;
      addition *= isHovered ? 1 : -1;
      targetRotationDegRef.current += addition;
      onSpin?.(addition);
    }, [isHovered]);

    const handleTap = useCallback(
      (event: MouseEvent<HTMLDivElement>): void => {
        if (!isListeningForEvents || isFlipping()) return;
        onSpin?.(180);
        transitionStartTimeMsRef.current = performance.now();
      },
      [isListeningForEvents, onSpin, isFlipping],
    );

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisibleLag(isSectionVisible);
      }, visibleLagTimeMs);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [isSectionVisible, visibleLagTimeMs]);

    return (
      <Box
        onClick={
          isTouchDevice
            ? handleTap
            : (event) => {
                onClickCard?.(event);
              }
        }
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
        {!isTouchDevice && (
          <Box
            ref={containerRef}
            sx={{
              position: "absolute",
              width: cardWidth,
              height: cardHeight,
              zIndex:
                !isListeningForEvents || !isVisibleLag || isHovered ? -1 : 2,
              borderRadius,
              pointerEvents:
                !isListeningForEvents || !isVisibleLag || isHovered
                  ? "none"
                  : "auto",
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
            transition: `transform ${transitionDurationMs}ms ease`,
            transform: `rotateY(${targetRotationDegRef.current}deg)`,
            willChange: isSectionVisible ? "transform" : undefined,
          }}
        >
          {children}
        </Box>
      </Box>
    );
  },
);

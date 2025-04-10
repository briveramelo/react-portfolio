import React, {
  useRef,
  useCallback,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { Box, BoxProps, useMediaQuery } from "@mui/material";
import { useSpinningCard } from "./SpinningCardContext.tsx";
import { useHeaderContext } from "../../context/HeaderContext.tsx";

export interface SpinningCardProps {
  id?: string;
  isSectionVisible: boolean;
  visibleLagTimeMs?: number;
  cardWidth: any; // e.g. { sm: "400px", xs: "375px" }
  cardHeight: any;
  borderRadius: string | number;
  children?: React.ReactNode;
  containerProps?: BoxProps;
}

export const SpinningCard: React.FC<SpinningCardProps> = ({
  id,
  visibleLagTimeMs = 500,
  isSectionVisible,
  cardWidth,
  cardHeight,
  borderRadius,
  children,
  containerProps,
}) => {
  const {
    targetRotationDeg,
    setTargetRotationDeg,
    containerRef,
    transitionDurationMs,
    setOnReset,
    isCardAnimating,
    trackPointerEnter,
    trackPointerLeave,
    isHovered,
    isHoveredRef,
    resetHoverState,
    setHasBeenHovered,
  } = useSpinningCard();

  const [isVisibleLag, setIsVisibleLag] = useState<boolean>(false);
  const entrySideRef = useRef<"left" | "right" | null>(null);
  const exitSideRef = useRef<"left" | "right" | null>("left");
  const transitionStartTimeMsRef = useRef<number>(performance.now());
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  const [isListeningForEvents, setIsListeningForEvents] =
    useState<boolean>(false);
  const [isSensorOn, setIsSensorOn] = useState<boolean>(false);

  // set lagging section visibility state indicator
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisibleLag(isSectionVisible);
    }, visibleLagTimeMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSectionVisible, visibleLagTimeMs]);

  //set derivative state variables
  useEffect(() => {
    setIsSensorOn(
      !isCardAnimating && isSectionVisible && isVisibleLag && !isHovered,
    );
    setIsListeningForEvents(!isCardAnimating && isSectionVisible);
  }, [isVisibleLag, isHovered, isCardAnimating, isSectionVisible]);

  const reset = useCallback(() => {
    entrySideRef.current = null;
    exitSideRef.current = null;
    transitionStartTimeMsRef.current = performance.now();
    resetHoverState();
  }, [resetHoverState]);

  // set the context clear function
  useEffect(() => {
    setOnReset(() => reset);
  }, [reset]);

  const isLeft = useCallback(
    (event: MouseEvent<HTMLElement>): boolean => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return false;
      return event.clientX < rect.right - rect.width / 2;
    },
    [containerRef.current],
  );

  const isInsideContainer = useCallback(
    (event: MouseEvent<HTMLElement>): boolean => {
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

  const flip = useCallback(
    (side: "left" | "right" | null) => {
      if (!side) return;

      let addition = side === "left" ? -180 : 180;
      addition *= isHovered ? 1 : -1;
      setTargetRotationDeg((prev) => prev + addition);
      transitionStartTimeMsRef.current = performance.now();
    },
    [isHovered, setTargetRotationDeg],
  );

  const handlePointerEnter = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (
        !isListeningForEvents ||
        !isVisibleLag ||
        entrySideRef.current ||
        isHoveredRef.current
      ) {
        return;
      }

      entrySideRef.current = isLeft(event) ? "left" : "right";
      exitSideRef.current = null;
      transitionStartTimeMsRef.current = performance.now();
      trackPointerEnter();
      flip(entrySideRef.current);
    },
    [
      isListeningForEvents,
      isLeft,
      trackPointerEnter,
      isVisibleLag,
      flip,
      isHoveredRef.current,
    ],
  );

  const handlePointerLeave = useCallback(
    (event: MouseEvent<HTMLElement>, isForced: boolean = false) => {
      if (
        !isForced &&
        (!isListeningForEvents ||
          !isVisibleLag ||
          !entrySideRef.current ||
          !isHoveredRef.current)
      ) {
        return;
      }

      if (!isForced && isInsideContainer(event)) {
        return;
      }

      entrySideRef.current = null;
      exitSideRef.current = isLeft(event) ? "left" : "right";
      trackPointerLeave(event);
      flip(exitSideRef.current);
    },
    [
      isListeningForEvents,
      isLeft,
      trackPointerLeave,
      isInsideContainer,
      isVisibleLag,
      flip,
      isHoveredRef.current,
    ],
  );

  const { subscribeOnEnterHeader } = useHeaderContext();
  useEffect(() => {
    const unsubscribe = subscribeOnEnterHeader((event) => {
      if (isHoveredRef.current) {
        handlePointerLeave(event, true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [subscribeOnEnterHeader, handlePointerLeave]);

  const handleTap = useCallback(() => {
    if (!isListeningForEvents || isFlipping()) return;

    flip("left");
    setHasBeenHovered(true);
    transitionStartTimeMsRef.current = performance.now();
  }, [isListeningForEvents, isFlipping, flip, setHasBeenHovered]);

  return (
    <Box
      onClick={isTouchDevice ? handleTap : undefined}
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
            zIndex: isSensorOn ? 2 : -1,
            borderRadius,
            pointerEvents: isSensorOn ? "auto" : "none",
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
          transform: `rotateY(${targetRotationDeg}deg)`,
          willChange: isSectionVisible ? "transform" : undefined,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

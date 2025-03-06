import React, {
  useRef,
  useCallback,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { Box, BoxProps, useMediaQuery } from "@mui/material";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";
import { useSpinningCard } from "./SpinningCardContext.tsx";

export interface SpinningCardProps {
  id?: string;
  visibleLagTimeMs?: number;
  isSectionVisible: boolean;
  onHasBeenHovered?: () => void;
  onClickCard?: (event: MouseEvent<HTMLDivElement>) => void;
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
  onHasBeenHovered,
  onClickCard,
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
    setOnClear,
    isCardAnimating,
  } = useSpinningCard();
  const { trackPointerEnter, trackPointerLeave, isHovered, hasBeenHovered } =
    useHoverTracking(true, USER_TRANSITION_DURATION_MS);
  const [isVisibleLag, setIsVisibleLag] = useState<boolean>(false);
  const entrySideRef = useRef<"left" | "right" | null>(null);
  const exitSideRef = useRef<"left" | "right" | null>(null);
  const transitionStartTimeMsRef = useRef<number>(performance.now());
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  const [isListeningForEvents, setIsListeningForEvents] =
    useState<boolean>(false);
  const [isSensorOn, setIsSensorOn] = useState<boolean>(
    isListeningForEvents && isVisibleLag && !isHovered,
  );
  const isHero = useCallback(() => id === "home_avatar_card_enter", [id]);

  useEffect(() => {
    setIsSensorOn(
      !isCardAnimating && isSectionVisible && isVisibleLag && !isHovered,
    );
    setIsListeningForEvents(!isCardAnimating && isSectionVisible);
    if (isHero()) {
      console.log(
        "is Sensor on?",
        !isCardAnimating,
        isSectionVisible,
        isVisibleLag,
        !isHovered,
      );
    }
  }, [isVisibleLag, isHovered, isCardAnimating, isSectionVisible]);

  const clear = useCallback(() => {
    entrySideRef.current = null;
    exitSideRef.current = null;
    transitionStartTimeMsRef.current = performance.now();
  }, []);

  useEffect(() => {
    setOnClear(() => clear);
  }, [clear, setOnClear]);

  useEffect(() => {
    if (hasBeenHovered) {
      onHasBeenHovered?.();
    }
  }, [hasBeenHovered, onHasBeenHovered]);

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
      if (isHero()) {
        console.log(
          "pointer enter state:",
          !isListeningForEvents,
          !isVisibleLag,
          entrySideRef.current,
        );
      }
      if (!isListeningForEvents || !isVisibleLag || entrySideRef.current) {
        return;
      }

      entrySideRef.current = isLeft(event) ? "left" : "right";
      exitSideRef.current = null;
      transitionStartTimeMsRef.current = performance.now();
      trackPointerEnter();
    },
    [isListeningForEvents, isLeft, trackPointerEnter, isVisibleLag, isHero],
  );

  const handlePointerLeave = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isHero()) {
        console.log(
          "pointer leave state:",
          !isListeningForEvents,
          !isVisibleLag,
          !entrySideRef.current,
        );
      }
      if (!isListeningForEvents || !isVisibleLag || !entrySideRef.current) {
        return;
      }

      if (isInsideContainer(event)) {
        if (isHero()) {
          console.log("isInsideContainer");
        }
        return;
      }

      entrySideRef.current = null;
      exitSideRef.current = isLeft(event) ? "left" : "right";
      trackPointerLeave(event);
    },
    [
      isListeningForEvents,
      isLeft,
      trackPointerLeave,
      isInsideContainer,
      isVisibleLag,
      isHero,
    ],
  );

  useEffect(() => {
    const sideRef = isHovered ? entrySideRef : exitSideRef;
    if (!sideRef.current) return;

    let addition = sideRef?.current === "left" ? 180 : -180;
    addition *= isHovered ? 1 : -1;
    setTargetRotationDeg((prev) => prev + addition);
    transitionStartTimeMsRef.current = performance.now();
    if (isHero()) {
      console.log("isHovered changed to:", isHovered);
    }
  }, [isHovered]);

  const handleTap = useCallback(() => {
    if (!isListeningForEvents || isFlipping()) return;
    transitionStartTimeMsRef.current = performance.now();
  }, [isListeningForEvents, isFlipping]);

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

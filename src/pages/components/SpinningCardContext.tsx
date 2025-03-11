import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useMemo,
} from "react";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";
import { useHoverTracking } from "../../utils/tracking/hooks/useHoverTracking.ts";

interface SpinningCardContextProps {
  isCardAnimating: boolean;
  setIsCardAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  targetRotationDeg: number;
  setTargetRotationDeg: React.Dispatch<React.SetStateAction<number>>;
  containerRef: React.RefObject<HTMLDivElement>;
  transitionDurationMs: number;
  setTransitionDurationMs: React.Dispatch<React.SetStateAction<number>>;
  setHasBeenHovered: React.Dispatch<React.SetStateAction<boolean>>;
  onReset: () => void;
  setOnReset: React.Dispatch<React.SetStateAction<() => void>>;
  trackPointerEnter: () => void;
  trackPointerLeave: (event: React.MouseEvent<HTMLElement>) => void;
  isHovered: boolean;
  isHoveredRef: React.RefObject<boolean>;
  hasBeenHovered: boolean;
  resetHoverState: () => void;
}

const SpinningCardContext = createContext<SpinningCardContextProps | undefined>(
  undefined,
);

export const SpinningCardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    trackPointerEnter,
    trackPointerLeave,
    isHovered,
    hasBeenHovered,
    setHasBeenHovered,
    resetHoverState,
    isHoveredRef,
  } = useHoverTracking(true, USER_TRANSITION_DURATION_MS);
  const [isCardAnimating, setIsCardAnimating] = useState<boolean>(true);
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    USER_TRANSITION_DURATION_MS,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [onReset, setOnReset] = useState<() => void>(() => {});

  const contextValue = useMemo(
    () => ({
      targetRotationDeg,
      setTargetRotationDeg,
      isCardAnimating,
      setIsCardAnimating,
      transitionDurationMs,
      setTransitionDurationMs,
      onReset,
      setOnReset,
      containerRef,
      trackPointerEnter,
      trackPointerLeave,
      isHovered,
      isHoveredRef,
      hasBeenHovered,
      setHasBeenHovered,
      resetHoverState,
    }),
    [
      targetRotationDeg,
      isCardAnimating,
      transitionDurationMs,
      containerRef,
      onReset,
      trackPointerEnter,
      trackPointerLeave,
      isHovered,
      hasBeenHovered,
      resetHoverState,
      setHasBeenHovered,
    ],
  );

  return (
    <SpinningCardContext.Provider value={contextValue}>
      {children}
    </SpinningCardContext.Provider>
  );
};

export const useSpinningCard = (): SpinningCardContextProps => {
  const context = useContext(SpinningCardContext);
  if (!context) {
    throw new Error(
      "useSpinningCard must be used within a SpinningCardProvider",
    );
  }
  return context;
};

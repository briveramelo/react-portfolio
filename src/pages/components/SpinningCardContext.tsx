import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useMemo,
} from "react";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";

interface SpinningCardContextProps {
  isCardAnimating: boolean;
  setIsCardAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  targetRotationDeg: number;
  setTargetRotationDeg: React.Dispatch<React.SetStateAction<number>>;
  containerRef: React.RefObject<HTMLDivElement>;
  transitionDurationMs: number;
  setTransitionDurationMs: React.Dispatch<React.SetStateAction<number>>;
  onClear: () => void;
  setOnClear: React.Dispatch<React.SetStateAction<() => void>>;
}

const SpinningCardContext = createContext<SpinningCardContextProps | undefined>(
  undefined,
);

export const SpinningCardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isCardAnimating, setIsCardAnimating] = useState<boolean>(false);
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    USER_TRANSITION_DURATION_MS,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [onClear, setOnClear] = useState<() => void>(() => {});

  const contextValue = useMemo(
    () => ({
      targetRotationDeg,
      setTargetRotationDeg,
      isCardAnimating,
      setIsCardAnimating,
      transitionDurationMs,
      setTransitionDurationMs,
      onClear,
      setOnClear,
      containerRef,
    }),
    [
      targetRotationDeg,
      isCardAnimating,
      transitionDurationMs,
      containerRef,
      onClear,
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

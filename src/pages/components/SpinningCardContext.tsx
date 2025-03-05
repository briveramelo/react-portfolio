import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  MouseEvent,
} from "react";
import { USER_TRANSITION_DURATION_MS } from "../sections/Hero/heroHelpers.ts";

interface SpinningCardContextProps {
  targetRotationDeg: number;
  setTargetRotationDeg: React.Dispatch<React.SetStateAction<number>>;
  containerRef: React.RefObject<HTMLDivElement>;
  transitionDurationMs: number;
  setTransitionDurationMs: (deg: number) => void;
  onClear: (event: MouseEvent<HTMLElement>) => void;
  setOnClear: (fn: (event: MouseEvent<HTMLElement>) => void) => void;
}

const SpinningCardContext = createContext<SpinningCardContextProps | undefined>(
  undefined,
);

export const SpinningCardProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [targetRotationDeg, setTargetRotationDeg] = useState<number>(0);
  const [transitionDurationMs, setTransitionDurationMs] = useState<number>(
    USER_TRANSITION_DURATION_MS,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [onClearFn, setOnClearFn] = useState<
    (event: MouseEvent<HTMLElement>) => void
  >(() => () => {});

  const onClear = (event: MouseEvent<HTMLElement>) => {
    onClearFn(event);
  };

  return (
    <SpinningCardContext.Provider
      value={{
        targetRotationDeg,
        setTargetRotationDeg,
        containerRef,
        transitionDurationMs,
        setTransitionDurationMs,
        onClear,
        setOnClear: setOnClearFn,
      }}
    >
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

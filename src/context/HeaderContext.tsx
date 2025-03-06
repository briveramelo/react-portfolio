import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from "react";

interface HeaderContextType {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
  subscribeOnEnterHeader: (
    callback: (event: React.PointerEvent<HTMLElement>) => void,
  ) => () => void;
  triggerOnEnterHeader: (event: React.PointerEvent<HTMLElement>) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const subscribers = useRef<
    ((event: React.PointerEvent<HTMLElement>) => void)[]
  >([]);

  const subscribeOnEnterHeader = useCallback(
    (callback: (event: React.PointerEvent<HTMLElement>) => void) => {
      subscribers.current.push(callback);
      return () => {
        subscribers.current = subscribers.current.filter(
          (cb) => cb !== callback,
        );
      };
    },
    [],
  );

  const triggerOnEnterHeader = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      subscribers.current.forEach((callback) => callback(event));
    },
    [],
  );

  return (
    <HeaderContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        subscribeOnEnterHeader,
        triggerOnEnterHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

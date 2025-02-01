import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useMemo,
} from "react";

interface CursorContextProps {
  onHoverChange: (key: string, mouseEnter: boolean) => void;
  isHovered: () => boolean;
}

export const CursorContext = createContext<CursorContextProps | undefined>(
  undefined,
);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredKeys, setHoveredKeys] = useState<Record<string, boolean>>({});

  const onHoverChange = (key: string, mouseEnter: boolean) => {
    setHoveredKeys((prev) => {
      // Only update if the new state is different.
      if (prev[key] === mouseEnter) return prev;
      return { ...prev, [key]: mouseEnter };
    });
  };

  const hoverCount = useMemo(
    () => Object.values(hoveredKeys).filter(Boolean).length,
    [hoveredKeys],
  );

  const isHovered = () => hoverCount > 0;

  return (
    <CursorContext.Provider value={{ onHoverChange, isHovered }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextProps => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

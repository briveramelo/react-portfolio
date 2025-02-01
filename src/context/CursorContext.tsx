import React, { createContext, useState, ReactNode, useContext } from "react";

interface CursorContextProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}

export const CursorContext = createContext<CursorContextProps | undefined>(
  undefined,
);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextProps => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within the cursor context");
  }
  return context;
};

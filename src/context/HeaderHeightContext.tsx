import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderHeightContextType {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
}

const HeaderHeightContext = createContext<HeaderHeightContextType | undefined>(
  undefined,
);

export const useHeaderHeight = () => {
  const context = useContext(HeaderHeightContext);
  if (!context) {
    throw new Error(
      "useHeaderHeight must be used within a HeaderHeightProvider",
    );
  }
  return context;
};

export const HeaderHeightProvider = ({ children }: { children: ReactNode }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <HeaderHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};

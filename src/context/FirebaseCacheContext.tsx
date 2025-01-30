import React, { createContext, useContext, useState } from "react";

interface FirebaseCacheContextType {
  urlCache: { [key: string]: string };
  setUrlCache: (path: string, url: string) => void;
}

const FirebaseCacheContext = createContext<
  FirebaseCacheContextType | undefined
>(undefined);

export const FirebaseCacheProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [urlCache, setCache] = useState<{ [key: string]: string }>({});

  const setUrlCache = (path: string, url: string) => {
    setCache((prevCache) => ({
      ...prevCache,
      [path]: url,
    }));
  };

  return (
    <FirebaseCacheContext.Provider value={{ urlCache, setUrlCache }}>
      {children}
    </FirebaseCacheContext.Provider>
  );
};

export const useFirebaseCache = (): FirebaseCacheContextType => {
  const context = useContext(FirebaseCacheContext);
  if (!context) {
    throw new Error(
      "useFirebaseCache must be used within a FirebaseCacheProvider",
    );
  }
  return context;
};

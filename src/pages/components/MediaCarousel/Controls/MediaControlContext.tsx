import React, { createContext, useState, ReactNode, useCallback } from "react";

export interface MediaControlContextType {
  seekTo: (time: number) => void;
  setSeekTo: (fn: (time: number) => void) => void;
  goToPage: (page: number) => void;
  setGoToPage: (fn: (page: number) => void) => void;
  autoplay: boolean;
  setAutoplay: (value: boolean) => void;
}

export const MediaControlContext = createContext<MediaControlContextType>({
  seekTo: () => {},
  setSeekTo: () => {},
  goToPage: () => {},
  setGoToPage: () => {},
  autoplay: true,
  setAutoplay: () => {},
});

interface MediaControlProviderProps {
  children: ReactNode;
}

export const MediaControlProvider: React.FC<MediaControlProviderProps> = ({
  children,
}) => {
  const [seekToFn, setSeekToFn] = useState<(time: number) => void>(
    () => () => {},
  );
  const [goToPageFn, setGoToPageFn] = useState<(page: number) => void>(
    () => () => {},
  );
  const [autoplay, setAutoplay] = useState(true);

  const setSeekTo = useCallback((fn: (time: number) => void) => {
    setSeekToFn(() => fn);
  }, []);

  const setGoToPage = useCallback((fn: (page: number) => void) => {
    setGoToPageFn(() => fn);
  }, []);

  return (
    <MediaControlContext.Provider
      value={{
        seekTo: seekToFn,
        setSeekTo,
        goToPage: goToPageFn,
        setGoToPage,
        autoplay,
        setAutoplay,
      }}
    >
      {children}
    </MediaControlContext.Provider>
  );
};

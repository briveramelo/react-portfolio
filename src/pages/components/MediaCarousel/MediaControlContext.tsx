import React, { createContext, useState, ReactNode } from "react";

export interface MediaControlContextType {
  seekTo: (time: number) => void;
  setSeekTo: (fn: (time: number) => void) => void;
  autoplay: boolean;
  setAutoplay: (value: boolean) => void;
}

export const MediaControlContext = createContext<MediaControlContextType>({
  seekTo: () => {},
  setSeekTo: () => {},
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
  const [autoplay, setAutoplay] = useState(true);

  // This setter updates the current seek function.
  const setSeekTo = (fn: (time: number) => void) => {
    setSeekToFn(() => fn);
  };

  return (
    <MediaControlContext.Provider
      value={{ seekTo: seekToFn, setSeekTo, autoplay, setAutoplay }}
    >
      {children}
    </MediaControlContext.Provider>
  );
};

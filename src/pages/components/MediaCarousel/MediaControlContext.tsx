import React, { createContext, useState, ReactNode } from "react";

export interface MediaControlContextType {
  seekTo: (time: number) => void;
  setSeekTo: (fn: (time: number) => void) => void;
}

export const MediaControlContext = createContext<MediaControlContextType>({
  seekTo: () => {},
  setSeekTo: () => {},
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

  // This setter updates the current seek function.
  const setSeekTo = (fn: (time: number) => void) => {
    setSeekToFn(() => fn);
  };

  return (
    <MediaControlContext.Provider value={{ seekTo: seekToFn, setSeekTo }}>
      {children}
    </MediaControlContext.Provider>
  );
};

import React, { useCallback, useContext, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { MediaControlContext } from "../MediaControlContext";

export interface YouTubePlayerHandle {
  seekTo: (time: number) => void;
}

interface YouTubePlayerProps {
  src: string;
  title: string;
  isActive: boolean;
  borderRadius?: string;
  playAsGif?: boolean;
  // use a src format like this in conjunction with playAsGif = true
  // "https://www.youtube-nocookie.com/embed/9uP0CscXHB8?autoplay=1&mute=1&controls=0&loop=1&playlist=9uP0CscXHB8&disablekb=1",
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  src,
  title,
  isActive,
  borderRadius,
  playAsGif = false,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Pause the video when inactive
  useEffect(() => {
    if (!playAsGif && !isActive && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: [],
        }),
        "*",
      );
    }
  }, [isActive]);

  const seekTo = useCallback((timeSec: number) => {
    if (!iframeRef.current) return;

    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "seekTo",
        args: [timeSec, true],
      }),
      "*",
    );
  }, []);

  const { setSeekTo } = useContext(MediaControlContext);
  useEffect(() => {
    if (isActive) {
      setSeekTo(seekTo);
    }
  }, [isActive, seekTo, setSeekTo]);

  const padding = "27.125%";

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: playAsGif ? "100%" : undefined,
        paddingTop: playAsGif ? undefined : padding,
        paddingBottom: playAsGif ? undefined : padding,
        // 56.25% fills the play area,
        // 54.25% ensures the header overlay (icon, title, 'copy' link) shows
        // though this reduction adds small black letterboxing, this is OK
      }}
    >
      <iframe
        ref={iframeRef}
        src={`${src}`}
        title={title}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: borderRadius,
        }}
      />
    </Box>
  );
};

export default YouTubePlayer;

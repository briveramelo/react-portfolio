import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { MediaControlContext } from "../MediaControlContext";

interface YouTubePlayerProps {
  // Use a src format like this in conjunction with playAsGif = true:
  // "https://www.youtube-nocookie.com/embed/9uP0CscXHB8?autoplay=1&mute=1&controls=0&loop=1&playlist=9uP0CscXHB8&disablekb=1",
  src: string;
  title: string;
  isActive: boolean;
  height: number;
  borderRadius?: string;
  playAsGif?: boolean;
  startTime?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  src,
  title,
  isActive,
  height,
  borderRadius,
  playAsGif = false,
  startTime,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isFirstActivation = useRef(true);
  const [playerReady, setPlayerReady] = useState(false);

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

  // Set the global seekTo when the video is active.
  const { setSeekTo, autoplay } = useContext(MediaControlContext);
  useEffect(() => {
    if (isActive) {
      setSeekTo(seekTo);
    }
  }, [isActive, seekTo, setSeekTo]);

  // Handler to mark the player as ready once the iframe loads.
  const handlePlayerLoad = () => {
    setPlayerReady(true);
  };

  useEffect(() => {
    if (!iframeRef.current || !playerReady || playAsGif) return;

    // On first activation with a defined start time, seek to it.
    if (isActive && isFirstActivation.current && startTime !== undefined) {
      seekTo(startTime);
      isFirstActivation.current = false;
    }

    const command = isActive ? "playVideo" : "pauseVideo";
    if (!autoplay && command === "playVideo") return;

    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*",
    );
  }, [isActive, playerReady, startTime, playAsGif, seekTo]);

  const padding = "54.25%";
  const autoplayHeight = isMobile && playAsGif ? 0 : 30;
  const finalHeight = height - autoplayHeight;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        width: "100%",
        height: finalHeight,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: padding,
          pointerEvents: playAsGif ? "none" : "auto",
        }}
      >
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={handlePlayerLoad}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: finalHeight,
            borderRadius: borderRadius,
          }}
        />
      </Box>
    </Box>
  );
};

export default YouTubePlayer;

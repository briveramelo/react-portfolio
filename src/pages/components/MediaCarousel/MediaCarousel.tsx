import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../../../data/projectDetails.tsx";
import ChangeMediaButton from "./ChangeMediaButton.tsx";
import PdfViewer from "./MediaItems/PdfViewer.tsx";
import YouTubePlayer, {
  YouTubePlayerHandle,
} from "./MediaItems/YouTubePlayer.tsx";
import FirebaseImage from "./MediaItems/FirebaseImage.tsx";
import FirebasePdf from "./MediaItems/FirebasePdf.tsx";
import Quote from "./MediaItems/Quote.tsx";
import FirebaseImageWithAudioButtons from "./MediaItems/FirebaseImageWithAudioButtons.tsx";
import MediaImage from "./MediaItems/MediaImage.tsx";
import FirebaseVideoAsGif from "./MediaItems/FirebaseVideoAsGif.tsx";

interface MediaCarouselProps {
  media: MediaItem[];
  selectedIndex: number;
  onMediaChange: (index: number) => void;
  height: number;
  showArrows: boolean;
}

const MediaCarousel = forwardRef<YouTubePlayerHandle, MediaCarouselProps>(
  ({ media, selectedIndex, onMediaChange, height, showArrows = true }, ref) => {
    const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);
    const youtubePlayerRef = useRef<YouTubePlayerHandle>(null);

    const nextMedia = () => {
      onMediaChange((selectedIndex + 1) % media.length);
      setHasBeenClicked(true);
    };

    const prevMedia = () => {
      onMediaChange(selectedIndex === 0 ? media.length - 1 : selectedIndex - 1);
      setHasBeenClicked(true);
    };

    useImperativeHandle(ref, () => ({
      seekTo: (timeSec: number) => {
        if (!youtubePlayerRef.current) return;

        youtubePlayerRef.current.seekTo(timeSec);
      },
    }));

    const borderRadius = "10px";
    const activeMediaType = media[selectedIndex]?.type;
    const containerHeight = activeMediaType === "quote" ? "auto" : height;

    return (
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "auto",
          overflow: "visible",
        }}
      >
        {/* Previous Button */}
        {showArrows && (
          <ChangeMediaButton
            hasBeenClicked={hasBeenClicked}
            next={false}
            onClick={prevMedia}
          />
        )}

        {/* Media Display */}
        <Box
          sx={{
            width: "100%",
            height: containerHeight,
            backgroundColor: "transparent",
          }}
        >
          {media.map((item, index) => (
            <Box
              key={index}
              sx={{
                display:
                  index !== selectedIndex
                    ? "none"
                    : item.type === "quote" || item.type === "youtube"
                      ? "flex"
                      : "block",
                width: "100%",
                height: item.type === "quote" ? "auto" : height,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.type === "firebaseImage" ? (
                <FirebaseImage
                  firebaseImagePath={item.src}
                  height={height}
                  alt={item.alt}
                  isActive={index === selectedIndex}
                  style={{ borderRadius }}
                />
              ) : item.type === "firebaseVideoAsGif" ? (
                <FirebaseVideoAsGif
                  firebaseVideoPath={item.src}
                  height={height}
                  alt={item.alt}
                  isActive={index === selectedIndex}
                  style={{ borderRadius }}
                />
              ) : item.type === "firebaseImageWithAudioButtons" ? (
                <FirebaseImageWithAudioButtons
                  firebaseImagePath={item.src}
                  height={height}
                  alt={item.alt}
                  audioButtons={item.audioButtons || []}
                  isSelected={index === selectedIndex}
                  borderRadius={borderRadius}
                />
              ) : item.type === "image" ? (
                <MediaImage
                  src={item.src}
                  height={height}
                  alt={item.alt}
                  isActive={index === selectedIndex}
                  style={{ borderRadius }}
                />
              ) : item.type === "firebasePdf" ? (
                <FirebasePdf
                  firebasePdfPath={item.src}
                  height={height}
                  borderRadius={borderRadius}
                  isActive={index === selectedIndex}
                />
              ) : item.type === "pdf" ? (
                <PdfViewer
                  pdfUrl={item.src}
                  isActive={index === selectedIndex}
                  borderRadius={borderRadius}
                />
              ) : item.type === "youtube" ? (
                <YouTubePlayer
                  ref={index === selectedIndex ? youtubePlayerRef : undefined}
                  src={item.src}
                  title={item.alt}
                  borderRadius={borderRadius}
                  isActive={index === selectedIndex}
                  playAsGif={item.playAsGif}
                />
              ) : item.type === "quote" ? (
                <Quote
                  content={item.src}
                  quoteWidth={item.quoteWidth}
                  borderRadius={borderRadius}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    backgroundColor: "grey.200",
                  }}
                >
                  Unsupported media type
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* Next Button */}
        {showArrows && (
          <ChangeMediaButton
            hasBeenClicked={hasBeenClicked}
            next={true}
            onClick={nextMedia}
          />
        )}
      </Box>
    );
  },
);

export default MediaCarousel;

import React, { useState } from "react";
import { Box } from "@mui/material";
import { MediaItem } from "../../../data/projects/projectDetails.tsx";
import ChangeMediaButton from "./ChangeMediaButton.tsx";
import PdfViewer from "./MediaItems/PdfViewer.tsx";
import YouTubePlayer from "./MediaItems/YouTubePlayer.tsx";
import FirebaseImage from "./MediaItems/FirebaseImage.tsx";
import FirebasePdf from "./MediaItems/FirebasePdf.tsx";
import Quote from "./MediaItems/Quote.tsx";
import FirebaseImageWithAudioButtons from "./MediaItems/FirebaseImageWithAudioButtons.tsx";
import MediaImage from "./MediaItems/MediaImage.tsx";
import FirebaseVideoAsGif from "./MediaItems/FirebaseVideoAsGif.tsx";
import AutoplayToggle from "./Controls/AutoplayToggle.tsx";

interface MediaCarouselProps {
  media: MediaItem[];
  selectedIndex: number;
  onMediaChange: (index: number) => void;
  height: string;
  showArrows: boolean;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  media,
  selectedIndex,
  onMediaChange,
  height,
  showArrows = true,
}) => {
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

  const nextMedia = () => {
    onMediaChange((selectedIndex + 1) % media.length);
    setHasBeenClicked(true);
  };

  const prevMedia = () => {
    onMediaChange(selectedIndex === 0 ? media.length - 1 : selectedIndex - 1);
    setHasBeenClicked(true);
  };

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
              minHeight: height,
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
              <Box
                sx={{
                  mt: !item.playAsGif ? -10 : 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {!item.playAsGif && <AutoplayToggle />}
                <YouTubePlayer
                  src={item.src}
                  title={item.alt}
                  height={height}
                  borderRadius={borderRadius}
                  isActive={index === selectedIndex}
                  playAsGif={item.playAsGif}
                  startTime={item.startTime}
                />
              </Box>
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
};

export default MediaCarousel;

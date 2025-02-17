import React, { useState } from "react";
import { Box, CardMedia } from "@mui/material";
import { MediaItem } from "../../../../data/projectDetails.tsx";
import PdfViewer from "./PdfViewer.tsx";
import YouTubePlayer from "./YouTubePlayer.tsx";
import FirebaseImage from "./FirebaseImage.tsx";
import FirebasePdf from "./FirebasePdf.tsx";
import Quote from "./Quote.tsx";
import ChangeMediaButton from "./ChangeMediaButton.tsx";
import FirebaseImageWithAudioButtons from "./FirebaseImageWithAudioButtons.tsx";

interface MediaCarouselProps {
  media: MediaItem[];
  selectedIndex: number;
  onMediaChange: (index: number) => void;
  height: number;
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
          height,
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
              height: height,
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
                style={{
                  borderRadius,
                }}
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
              <CardMedia
                component="img"
                image={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  borderRadius,
                }}
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
                src={item.src}
                title={item.alt}
                borderRadius={borderRadius}
                isActive={index === selectedIndex}
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
};

export default MediaCarousel;

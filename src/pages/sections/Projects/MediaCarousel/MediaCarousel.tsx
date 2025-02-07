import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MediaItem } from "../../../../data/projectDetails.ts";
import PdfViewer from "./PdfViewer.tsx";
import YouTubePlayer from "./YouTubePlayer.tsx";
import FirebaseImage from "./FirebaseImage.tsx";
import FirebasePdf from "./FirebasePdf.tsx";
import Quote from "./Quote.tsx";

interface MediaCarouselProps {
  media: MediaItem[];
  selectedIndex: number;
  onMediaChange: (index: number) => void;
  height: number;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  media,
  selectedIndex,
  onMediaChange,
  height,
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

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {/* Previous Button */}
      <IconButton
        onClick={prevMedia}
        sx={{
          position: "absolute",
          left: 10,
          zIndex: 2,
          backgroundColor: hasBeenClicked
            ? "rgba(0,0,0,0.3)"
            : "rgba(255,106,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: hasBeenClicked
              ? "rgba(0,0,0,0.3)"
              : "rgba(255,106,0,1)",
          },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Media Display */}
      <Card
        sx={{
          width: "100%",
          borderRadius: 2,
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
                  : item.type === "quote"
                    ? "flex"
                    : "block",
              width: "100%",
              height: "100%",
              justifyContent: "center", // centers horizontally
              alignItems: "center", // centers vertically
            }}
          >
            {item.type === "firebaseImage" ? (
              <FirebaseImage
                firebaseImagePath={item.src}
                height={height}
                alt={item.alt}
              />
            ) : item.type === "image" ? (
              <CardMedia
                component="img"
                height={height}
                image={item.src}
                alt={item.alt}
                sx={{ objectFit: "cover" }}
              />
            ) : item.type === "firebasePdf" ? (
              <FirebasePdf firebasePdfPath={item.src} height={height} />
            ) : item.type === "pdf" ? (
              <PdfViewer pdfUrl={item.src} />
            ) : item.type === "youtube" ? (
              <YouTubePlayer src={item.src} height={height} />
            ) : item.type === "quote" ? (
              <Quote content={item.src} />
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
      </Card>

      {/* Next Button */}
      <IconButton
        onClick={nextMedia}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          backgroundColor: hasBeenClicked
            ? "rgba(0,0,0,0.3)"
            : "rgba(255,106,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: hasBeenClicked
              ? "rgba(0,0,0,0.3)"
              : "rgba(255,106,0,1)",
          },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default MediaCarousel;

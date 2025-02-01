import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { MediaItem } from "../../../data/media";
import PdfViewer from "./PdfViewer";
import YouTubePlayer from "./YouTubePlayer.tsx";
import FirebaseImage from "./FirebaseImage.tsx";
import FirebasePdf from "./FirebasePdf.tsx";

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
  const nextMedia = () => {
    onMediaChange((selectedIndex + 1) % media.length);
    setHasBeenClicked(true);
  };

  const prevMedia = () => {
    onMediaChange(selectedIndex === 0 ? media.length - 1 : selectedIndex - 1);
    setHasBeenClicked(true);
  };
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

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
          backgroundColor: hasBeenClicked ? "rgba(0,0,0,0.3)" : "rgba(255,106,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: hasBeenClicked ? "rgba(0,0,0,0.3)" : "rgba(255,106,0,1)", },
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
        {(() => {
          switch (media[selectedIndex].type) {
            case "firebaseImage":
              return (
                <FirebaseImage
                  firebaseImagePath={media[selectedIndex].src}
                  height={height}
                  alt={media[selectedIndex].alt}
                />
              );
            case "image":
              return (
                <CardMedia
                  component="img"
                  height={height}
                  image={media[selectedIndex].src}
                  alt={media[selectedIndex].alt}
                  sx={{ objectFit: "cover" }}
                />
              );
            case "firebasePdf":
              return (
                <FirebasePdf
                  firebasePdfPath={media[selectedIndex].src}
                  height={height}
                />
              );
            case "pdf":
              return <PdfViewer pdfUrl={media[selectedIndex].src} />;
            case "youtube":
              return (
                <YouTubePlayer src={media[selectedIndex].src} height={height} />
              );
            default:
              return (
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
              );
          }
        })()}
      </Card>

      {/* Next Button */}
      <IconButton
        onClick={nextMedia}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          backgroundColor: hasBeenClicked ? "rgba(0,0,0,0.3)" : "rgba(255,106,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: hasBeenClicked ? "rgba(0,0,0,0.3)" : "rgba(255,106,0,1)", },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default MediaCarousel;

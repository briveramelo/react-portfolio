import React, { useState } from "react";
import { Box, Button, Card, CardMedia, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  selectedIndex: number;
  onImageChange: (index: number) => void; // Callback to update story selection
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  selectedIndex,
  onImageChange,
}) => {
  const nextImage = () => {
    onImageChange((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    onImageChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
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
        onClick={prevImage}
        sx={{
          position: "absolute",
          left: 10,
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Image Display */}
      <Card sx={{ width: "100%", borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="600"
          image={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          sx={{ objectFit: "cover" }}
        />
      </Card>

      {/* Next Button */}
      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;

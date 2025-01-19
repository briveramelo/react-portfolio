import React, { useState } from "react";
import { Button } from "@mui/material";
import InvertableImage from "./InvertableImage";

interface IconToggleProps {
  icons: { src: string; alt: string }[];
  onToggle: (index: number) => void;
  invert?: boolean;
  height: number;
  width: number;
}

const IconToggle: React.FC<IconToggleProps> = ({
  icons,
  onToggle,
  invert,
  height,
  width,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggle = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % icons.length;
      onToggle(nextIndex);
      return nextIndex;
    });
  };

  return (
    <Button
      onClick={handleToggle}
      sx={{ height: `${height}px`, width: `${width}px` }}
    >
      <InvertableImage
        src={icons[currentIndex].src}
        alt={icons[currentIndex].alt}
        invert={!!invert}
      />
    </Button>
  );
};

export default IconToggle;

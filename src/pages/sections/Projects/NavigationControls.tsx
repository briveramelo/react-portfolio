import React from "react";
import { Box, Typography } from "@mui/material";
import ChangeMediaButton from "./MediaCarousel/ChangeMediaButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface NavigationControlsProps {
  selectedMediaIndex: number;
  currentPosition: number;
  totalInChapter: number;
  startingMediaIndex: number;
  hasBeenClicked: boolean;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (mediaIndex: number) => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  selectedMediaIndex,
  currentPosition,
  totalInChapter,
  startingMediaIndex,
  hasBeenClicked,
  onNext,
  onPrev,
  onDotClick,
}) => {
  return (
    <Box>
      {/* Navigation Buttons and Progress Indicator */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 0,
          mb: 0,
          width: "100%",
        }}
      >
        <ChangeMediaButton next={false} onClick={onPrev} />
        <Typography
          sx={{ fontSize: 14, mx: 2, mt: -2, color: "rgba(0,0,0,.5)" }}
        >
          {currentPosition} / {totalInChapter}
        </Typography>
        <ChangeMediaButton
          hasBeenClicked={hasBeenClicked}
          next={true}
          onClick={onNext}
        />
      </Box>

      {/* Dotted Media Selector */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          mt: -2,
          color: "rgba(0,0,0,.5)",
        }}
      >
        {Array.from({ length: totalInChapter }).map((_, idx) => {
          const mediaIndex = startingMediaIndex + idx;
          const isSelected = mediaIndex === selectedMediaIndex;
          return (
            <Box
              key={mediaIndex}
              onClick={() => onDotClick(mediaIndex)}
              sx={{
                width: 19,
                height: 19,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {isSelected ? (
                <FiberManualRecordIcon sx={{ fontSize: 19 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ fontSize: 15 }} />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NavigationControls;

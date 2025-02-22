import React from "react";
import { Box, Typography } from "@mui/material";
import ChangeMediaButton from "./ChangeMediaButton.tsx";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { MediaItem } from "../../../data/projects/projectDetails.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";

interface NavigationControlsProps {
  media: MediaItem[];
  selectedMediaIndex: number;
  hasBeenClicked: boolean;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (mediaIndex: number) => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  media,
  selectedMediaIndex,
  hasBeenClicked,
  onNext,
  onPrev,
  onDotClick,
}) => {
  const getChapterBounds = (
    media: MediaItem[],
    currentIndex: number,
  ): { chapterStartIndex: number; chapterEndIndex: number } => {
    let chapterStartIndex = currentIndex;
    while (chapterStartIndex > 0 && !media[chapterStartIndex].chapterTitle) {
      chapterStartIndex--;
    }
    let chapterEndIndex = currentIndex;
    for (let i = currentIndex + 1; i < media.length; i++) {
      if (media[i].chapterTitle) {
        break;
      }
      chapterEndIndex = i;
    }
    return { chapterStartIndex, chapterEndIndex };
  };

  const { chapterStartIndex, chapterEndIndex } = getChapterBounds(
    media,
    selectedMediaIndex,
  );
  const totalInChapter = chapterEndIndex - chapterStartIndex + 1;
  const { text, interactable } = useCustomPalette();

  return (
    <Box>
      {/* Navigation Buttons and Progress Indicator */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: { xs: 1, sm: 0 },
          width: "100%",
        }}
      >
        <ChangeMediaButton next={false} onClick={onPrev} />
        <Typography sx={{ fontSize: 14, mx: 2, mt: -2, color: text.paper }}>
          {selectedMediaIndex + 1} / {media.length}
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
        }}
      >
        {Array.from({ length: totalInChapter }).map((_, idx) => {
          const mediaIndex = chapterStartIndex + idx;
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
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 19,
                    color: interactable.idle,
                    "&:hover": {
                      color: interactable.hovered,
                    },
                  }}
                />
              ) : (
                <RadioButtonUncheckedIcon
                  sx={{
                    fontSize: 15,
                    color: interactable.idle,
                    "&:hover": {
                      color: interactable.hovered,
                    },
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NavigationControls;

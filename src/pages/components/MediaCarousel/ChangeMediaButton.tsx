import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { generateGravityBounceScaleKeyframes } from "../../../utils/keyframeGenerator.ts";
import { useCustomPalette } from "../../../theme/theme.ts";

interface ChangeMediaButtonProps {
  hasBeenClicked?: boolean;
  next: boolean;
  onClick: () => void;
}

const buttonAnim = generateGravityBounceScaleKeyframes(1, 1.3, 20, 3);
const arrowAnim = generateGravityBounceScaleKeyframes(1, 1.4, 20, 3);
const ChangeMediaButton: React.FC<ChangeMediaButtonProps> = ({
  next,
  onClick,
  hasBeenClicked = true,
}) => {
  const arrowStyle = {
    animation: hasBeenClicked ? undefined : `${arrowAnim} 2s infinite`,
  };
  const { interactable } = useCustomPalette();

  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: hasBeenClicked
          ? interactable.idle
          : interactable.highlighted,
        color: "white",
        "&:hover": {
          backgroundColor: hasBeenClicked
            ? interactable.hovered
            : interactable.highlightHovered,
        },
        animation: hasBeenClicked ? undefined : `${buttonAnim} 2s infinite`,
      }}
    >
      {next ? <ArrowForward sx={arrowStyle} /> : <ArrowBack sx={arrowStyle} />}
    </IconButton>
  );
};

export default ChangeMediaButton;

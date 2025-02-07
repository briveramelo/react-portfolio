import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { generateGravityBounceScaleKeyframes } from "../../../../utils/keyframeGenerator.ts";

interface ChangeMediaButtonProps {
  hasBeenClicked?: boolean;
  next: boolean;
  onClick: () => void;
}

const buttonAnim = generateGravityBounceScaleKeyframes(1, 1.3, 20, 3);
const arrowAnim = generateGravityBounceScaleKeyframes(1, 1.25, 20, 3);
const ChangeMediaButton: React.FC<ChangeMediaButtonProps> = ({
  next,
  onClick,
  hasBeenClicked = true,
}) => {
  const arrowStyle = {
    animation: hasBeenClicked ? undefined : `${arrowAnim} 2s infinite`,
    animationDelay: "-1s",
  };

  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: hasBeenClicked
          ? "rgba(0,0,0,0.3)"
          : "rgba(255,106,0,0.5)",
        color: "white",
        "&:hover": {
          backgroundColor: hasBeenClicked
            ? "rgba(0,0,0,0.3)"
            : "rgba(255,106,0,1)",
        },
        animation: hasBeenClicked ? undefined : `${buttonAnim} 2s infinite`,
      }}
    >
      {next ? <ArrowForward sx={arrowStyle} /> : <ArrowBack sx={arrowStyle} />}
    </IconButton>
  );
};

export default ChangeMediaButton;

import React from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface ChangeMediaButtonProps {
  hasBeenClicked: boolean;
  next: boolean;
  onClick: () => void;
}

const ChangeMediaButton: React.FC<ChangeMediaButtonProps> = ({
  hasBeenClicked,
  next,
  onClick,
}) => {
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
      }}
    >
      {next ? <ArrowForward /> : <ArrowBack />}
    </IconButton>
  );
};

export default ChangeMediaButton;

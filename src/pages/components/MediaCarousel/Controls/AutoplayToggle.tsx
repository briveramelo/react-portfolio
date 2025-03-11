import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { MediaControlContext } from "./MediaControlContext.tsx";
import { Box, Typography } from "@mui/material";

const AutoplayToggle: React.FC = () => {
  const { autoplay, setAutoplay } = useContext(MediaControlContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography sx={{ mr: 0 }}>Autoplay</Typography>
      <IconButton onClick={() => setAutoplay(!autoplay)}>
        {autoplay ? (
          <ToggleOnIcon color="primary" />
        ) : (
          <ToggleOffIcon color="action" />
        )}
      </IconButton>
    </Box>
  );
};

export default AutoplayToggle;

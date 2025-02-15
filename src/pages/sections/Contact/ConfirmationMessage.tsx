import React from "react";
import { Box, Alert, Typography } from "@mui/material";
import { useCustomPalette } from "../../../theme/theme";

export const ConfirmationMessage: React.FC = () => {
  const { background, text } = useCustomPalette();
  return (
    <Box
      sx={{
        mt: 4,
        py: 3,
        backgroundColor: background.textSuccess,
        display: "flex",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        borderRadius: "8px",
      }}
    >
      <Alert
        severity="success"
        sx={{
          backgroundColor: "inherit",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold", color: text.paper }}>
        Mission Success 🎉
      </Typography>
      <Typography variant="body1" sx={{ color: text.paper }}>
        Your message has been sent. Thanks for reaching out!
      </Typography>
    </Box>
  );
};

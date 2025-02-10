import React from "react";
import { Box, Alert, Typography } from "@mui/material";
import { cp } from "../../../utils/utils";

export const ConfirmationMessage: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 3,
        backgroundColor: cp("background.textSuccess"),
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
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: cp("text.paper") }}
      >
        Mission Success 🎉
      </Typography>
      <Typography variant="body1" sx={{ color: cp("text.paper") }}>
        Your message has been sent. Thanks for reaching out!
      </Typography>
    </Box>
  );
};

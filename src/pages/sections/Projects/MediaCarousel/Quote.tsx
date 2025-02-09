import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { HighlightedText } from "../../../components/reusable/HighlightedText";
import { cp } from "../../../../utils/utils";
import { useTheme } from "@mui/material/styles";

interface QuoteProps {
  content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
  const theme = useTheme();
  const useSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: cp("background.paper"),
        borderRadius: "20px",
        borderLeft: "4px solid",
        borderColor: cp("background.paper"),
        width: { xs: "100%", sm: "55%" },
        mx: "auto",
        my: "auto",
      }}
      className={"moderate-shadow"}
    >
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <Typography variant="body1" sx={{ color: cp("text.paper") }}>
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography
              variant={useSmall ? "h5" : "h3"}
              sx={{ fontStyle: "italic", color: cp("text.paper"), mb: 1 }}
            >
              {children}
            </Typography>
          ),
          strong: ({ children }) => (
            <HighlightedText>{children}</HighlightedText>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default Quote;

import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";
import { HighlightedText } from "../../../components/reusable/HighlightedText";
import { cp } from "../../../../utils/utils";

interface QuoteProps {
  content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: cp("background.paper"),
        borderLeft: "4px solid",
        borderColor: cp("background.paper"),
        width: "50%",
        mx: "auto",
        my: "auto",
      }}
    >
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <Typography variant="body1" sx={{ color: cp("text.paper") }}>
              {children}
            </Typography>
          ),
          h4: ({ children }) => (
            <Typography
              variant="h4"
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

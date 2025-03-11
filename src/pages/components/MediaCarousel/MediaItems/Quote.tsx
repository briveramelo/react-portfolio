import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { HighlightedText } from "../../Markdown/HighlightedText.tsx";
import { useTheme } from "@mui/material/styles";
import { useCustomPalette } from "../../../../theme/theme.ts";
import remarkBreaks from "remark-breaks";

interface QuoteProps {
  content: string;
  quoteWidth?: string;
  borderRadius?: string;
}

const Quote: React.FC<QuoteProps> = ({ content, quoteWidth, borderRadius }) => {
  const theme = useTheme();
  const useSmall = useMediaQuery(theme.breakpoints.down("md"));
  const { background, text } = useCustomPalette();
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: background.paper,
        borderRadius,
        borderLeft: "4px solid",
        borderColor: background.paper,
        width: { xs: "100%", sm: quoteWidth },
      }}
      className={"moderate-shadow"}
    >
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          p: ({ children }) => (
            <Typography variant="body1" sx={{ color: text.paper }}>
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography
              variant={useSmall ? "body1" : "h3"}
              sx={{
                fontStyle: "italic",
                color: text.paper,
                mb: 1,
                lineHeight: useSmall ? "1.3rem" : "2.2rem",
              }}
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

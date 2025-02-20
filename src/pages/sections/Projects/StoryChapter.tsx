import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";
import { useCustomPalette } from "../../../theme/theme";

export interface StoryChapterProps {
  chapterTitle: string | undefined;
  isActive: boolean;
  onClick: () => void;
  markdown: string | undefined;
  mobile?: boolean;
}

const MemoizedMarkdown = React.memo(
  ({ markdown }: { markdown: string | undefined }) => {
    const { text } = useCustomPalette();

    return (
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          p: ({ children }) => (
            <Typography
              variant="body1"
              sx={{
                color: text.secondary,
                lineHeight: "1.25rem",
              }}
            >
              {children}
            </Typography>
          ),
          strong: ({ children }) => (
            <HighlightedText>{children}</HighlightedText>
          ),
          em: ({ children }) => (
            <Typography
              component="span"
              variant="body1"
              className="fade-in"
              sx={{ fontStyle: "italic" }}
            >
              {children}
            </Typography>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    );
  },
);

const StoryChapter: React.FC<StoryChapterProps> = ({
  isActive,
  chapterTitle,
  markdown,
  onClick,
  mobile = false,
}) => {
  const hasText = Boolean(isActive && markdown && markdown.trim().length > 0);
  const { background, text: textCp, interactable } = useCustomPalette();

  const cardStyles = {
    backgroundColor: isActive ? background.paper : interactable.idle,
    "&:hover": {
      backgroundColor: isActive ? undefined : interactable.hovered,
    },
    color: textCp.paper,
    borderRadius: "8px",
    width: "100%",
    border: hasText ? `2px solid ${interactable.idle}` : undefined,
  };

  const cardContent = (
    <Card sx={cardStyles} className={hasText ? undefined : "subtle-pop-shadow"}>
      <CardContent
        sx={{
          pt: hasText ? 2 : 1,
          mb: hasText ? -1 : 0,
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color={hasText ? textCp.paper : textCp.light}
          sx={{
            mb: hasText ? 0 : -2,
            textAlign: "left",
          }}
        >
          {chapterTitle}
        </Typography>
        {hasText && <MemoizedMarkdown markdown={markdown} />}
      </CardContent>
    </Card>
  );

  if (mobile) {
    return cardContent;
  }

  // When inactive, render as a button with customized styling.
  if (!isActive) {
    return (
      <Button
        onClick={onClick}
        disableRipple
        sx={{
          pb: 0.5,
          textTransform: "none",
          borderRadius: "8px",
          display: "block",
          width: "100%",
          px: 0,
          justifyContent: "flex-start",
          backgroundColor: "transparent",
          "& .MuiButton-label": {
            justifyContent: "flex-start",
          },
        }}
      >
        {cardContent}
      </Button>
    );
  }

  // When active, keep the current layout.
  return (
    <Box
      sx={{
        overflow: "visible",
        display: "flex",
        justifyContent: "space-between",
        cursor: "text",
        width: "105%",
        ml: "-5%",
      }}
      py={1}
    >
      {cardContent}
    </Box>
  );
};

export default StoryChapter;

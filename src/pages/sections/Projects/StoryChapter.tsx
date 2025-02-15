import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HighlightedText } from "../../components/reusable/HighlightedText";
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
              className="fade-in-text"
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
    backgroundColor: background.paper,
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
          sx={{
            mb: hasText ? 0 : -2,
          }}
        >
          {chapterTitle}
        </Typography>
        {isActive && hasText && <MemoizedMarkdown markdown={markdown} />}
      </CardContent>
    </Card>
  );

  if (mobile) {
    return cardContent;
  }

  return (
    <Box
      sx={{
        overflow: "visible",
        display: "flex",
        justifyContent: "space-between",
        cursor: isActive ? "text" : "pointer",
        width: isActive ? "105%" : "100%",
        ml: isActive ? "-5%" : "0",
      }}
      py={1}
      onClick={() => {
        if (!isActive) onClick();
      }}
    >
      {cardContent}
    </Box>
  );
};

export default StoryChapter;

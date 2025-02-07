import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { cp } from "../../../utils/utils";
import { HighlightedText } from "../../components/reusable/HighlightedText";

export interface StoryChapterProps {
  sectionTitle: string | undefined;
  isActive: boolean;
  onClick: () => void;
  text: string | undefined;
  mobile?: boolean;
}

// Memoized markdown renderer to avoid unnecessary re-renders
const MemoizedMarkdown = React.memo(
  ({ text }: { text: string | undefined }) => (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        p: ({ children }) => (
          <Typography
            variant="body1"
            sx={{
              color: cp("text.secondary"),
              lineHeight: "1.25rem",
            }}
          >
            {children}
          </Typography>
        ),
        strong: ({ children }) => <HighlightedText>{children}</HighlightedText>,
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
      {text}
    </ReactMarkdown>
  ),
);

const StoryChapter: React.FC<StoryChapterProps> = ({
  isActive,
  sectionTitle,
  text,
  onClick,
  mobile = false,
}) => {
  const hasText = Boolean(isActive && text && text.trim().length > 0);

  const cardStyles = {
    backgroundColor: cp("background.paper"),
    color: cp("text.paper"),
    borderRadius: "8px",
    width: "100%",
  };

  const cardContent = (
    <Card sx={cardStyles} className="subtle-shadow">
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
          {sectionTitle}
        </Typography>
        {isActive && hasText && <MemoizedMarkdown text={text} />}
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
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: isActive ? "scale(1.05)" : "scale(1)",
        transformOrigin: "right center",
      }}
      py={1}
      onClick={onClick}
    >
      {cardContent}
    </Box>
  );
};

export default StoryChapter;

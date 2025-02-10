import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "../../components/reusable/HighlightedText.tsx";
import { cp } from "../../../utils/utils.ts";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import { useEffect, useMemo, useState } from "react";
import "./TestimonialCard.css";
import { SiblingParagraph } from "../../components/reusable/SiblingParagraph.tsx";
import { Testimonial } from "../../../data/testimonialData.ts";
import { LinkedIn } from "@mui/icons-material";
import remarkBreaks from "remark-breaks";

export function TestimonialCard({
  data,
  backgroundColor,
  textColor,
  isSectionVisible,
}: {
  data: Testimonial;
  backgroundColor: string;
  textColor: string;
  isSectionVisible: boolean;
}) {
  const cardHover = useHoverTracking();
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    setIndex(index + 1);
  }, [isSectionVisible]);

  const markdownMemo = useMemo(
    () => (
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        key={index}
        components={{
          p: ({ children }) => (
            <SiblingParagraph
              className="fade-in-text"
              variant="body1"
              sx={{ color: cp("text.secondary") }}
            >
              {children}
            </SiblingParagraph>
          ),
          strong: ({ children }) => (
            <HighlightedText
              className="highlight-animation"
              style={{ color: cp("text.paper") }}
            >
              {children}
            </HighlightedText>
          ),
        }}
      >
        {data.quote}
      </ReactMarkdown>
    ),
    [index, data.quote],
  );
  const textStyle = {
    color: textColor,
    lineHeight: "1.2em",
  };
  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: backgroundColor,
        borderRadius: 2,
      }}
      id={`testimonial_card_${data.name}`}
      onPointerEnter={cardHover.trackPointerEnter}
      onPointerLeave={cardHover.trackPointerLeave}
      className="subtle-shadow"
    >
      <CardContent>
        {markdownMemo}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 2,
          }}
          mt={3}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              src={data.photo}
              alt={data.name}
              sx={{
                width: 100,
                height: 100,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                gap: -1,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: textColor }}
              >
                {data.name}
              </Typography>
              <Typography variant="h6" sx={textStyle}>
                {data.title}
              </Typography>
              <Typography variant="body1" sx={textStyle}>
                {data.company}
              </Typography>
              <Typography variant="body1" sx={textStyle}>
                {data.relation}
              </Typography>
            </Box>
          </Box>

          <IconButton
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={data.link}
            id={`testimonial_card_linkedin_${data.name}`}
            sx={{
              mb: -1.25,
              color: textColor,
              "&:hover": { transform: "scale(1.1)" },
              transition: "0.15s ease-out !important",
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute" }}></Box>
            <LinkedIn sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

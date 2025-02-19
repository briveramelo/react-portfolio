import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HighlightedText } from "../../components/Markdown/HighlightedText";
import { SiblingParagraph } from "../../components/Markdown/SiblingParagraph";
import { Testimonial } from "../../../data/testimonialData";
import { LinkedIn } from "@mui/icons-material";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";
import { useCustomPalette } from "../../../theme/theme";
import "./TestimonialCard.css";

function TestimonialCard({
  data,
  backgroundColor,
  textColor,
}: {
  data: Testimonial;
  backgroundColor: string;
  textColor: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });
  const { text } = useCustomPalette();
  const [animate, setAnimate] = useState(false);

  // When the testimonial card becomes visible, reset animations.
  useEffect(() => {
    if (isVisible && cardRef.current) {
      setAnimate(false);
      // reset animation by forcing a reflow
      void cardRef.current.offsetWidth;
      setAnimate(true);
    }
  }, [isVisible]);

  const textStyle = {
    color: textColor,
    lineHeight: "1.2em",
  };

  return (
    <Card
      ref={cardRef}
      sx={{
        p: 2,
        backgroundColor: backgroundColor,
        borderRadius: 2,
      }}
      id={`testimonial_card_${data.name}`}
      className="subtle-shadow"
    >
      <CardContent>
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            p: ({ children }) => (
              <SiblingParagraph
                className={animate ? "fade-in-text" : ""}
                variant="body1"
                sx={{ color: text.secondary }}
              >
                {children}
              </SiblingParagraph>
            ),
            strong: ({ children }) => (
              <HighlightedText
                className={animate ? "highlight-animation" : ""}
                style={{ color: text.paper }}
              >
                {children}
              </HighlightedText>
            ),
          }}
        >
          {data.quote}
        </ReactMarkdown>

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
                alignItems: "flex-start",
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

export default React.memo(TestimonialCard);

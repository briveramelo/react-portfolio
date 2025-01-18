import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./HighlightedText";

interface Testimonial {
  quote: string; // Includes <h>...</h> tags for highlighting
  name: string;
  title: string;
  company: string;
  photo: string;
  link: string;
}

export function TestimonialCard({
  data,
  backgroundColor,
  textColor,
}: {
  data: Testimonial;
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          p: 2,
          backgroundColor: backgroundColor,
          borderRadius: 2,
          "&:hover": { transform: "scale(1.02) !important" },
        }}
        className="pop-shadow"
        onClick={() => open(data.link)}
      >
        <CardContent>
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <Typography
                  variant="body1"
                  // fontSize="1.25rem"
                  sx={{ color: "text.secondary" }}
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <HighlightedText>{props.children}</HighlightedText>
              ),
            }}
          >
            {data.quote}
          </ReactMarkdown>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} mt={3}>
            <Avatar
              src={data.photo}
              alt={data.name}
              sx={{
                width: 100,
                height: 100,
              }}
            />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: textColor }}
              >
                {data.name}
              </Typography>
              <Typography variant="h6" sx={{ color: textColor }}>
                {data.title}
              </Typography>
              <Typography variant="h7" sx={{ color: "text.disabled" }}>
                {data.company}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </a>
  );
}

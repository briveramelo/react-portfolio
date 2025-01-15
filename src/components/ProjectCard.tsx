import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./HighlightedText";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  color: string; // Background color for category
  textColor: string; // Text color for category
}

export function ProjectCard({
  data,
  flipped = false,
}: {
  data: Project;
  flipped?: boolean;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: flipped ? "row-reverse" : "row" },
        backgroundColor: "background.paper",
        overflow: "hidden",
        borderRadius: 2,
      }}
      className="pop-shadow"
    >
      <CardMedia
        component="img"
        src={data.image}
        alt={data.title}
        sx={{
          width: { xs: "100%", md: "50%" },
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Space between top (category/title) and bottom (description)
          gap: 2,
          p: 3,
        }}
      >
        {/* Top Section: Category Tag and Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Category Tag and Title Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Category Tag */}
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: "bold",
                backgroundColor: data.color,
                color: data.textColor,
                whiteSpace: "nowrap", // Prevent wrapping
              }}
            >
              {data.category}
            </Box>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
                flexGrow: 1, // Let the title take remaining space
              }}
            >
              {data.title}
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section: Description */}
        <Box
          sx={{
            flexGrow: 1, // Push the description down if space allows
            display: "flex",
            alignItems: "left", // Center the description vertically
            flexDirection: "column",
            gap: 2,
          }}
        >
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <Typography
                  variant="body1"
                  fontSize="1.25rem"
                  sx={{ color: "text.secondary" }}
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <HighlightedText>{props.children}</HighlightedText>
              ),
            }}
          >
            {data.description}
          </ReactMarkdown>
        </Box>
      </CardContent>
    </Card>
  );
}

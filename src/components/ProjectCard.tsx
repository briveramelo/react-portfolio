import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./HighlightedText";
import { Project } from "../utils/projectData";
import InvertableImage from "./InvertableImage";

export function ProjectCard({
  projectData,
  flipped = false,
  useLight,
}: {
  projectData: Project;
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
        "&:hover": { transform: "scale(1.02) !important" },
      }}
      className="pop-shadow"
    >
      <CardMedia
        component="img"
        src={projectData.image}
        alt={projectData.title}
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
                backgroundColor: projectData.color,
                color: projectData.textColor,
                whiteSpace: "nowrap", // Prevent wrapping
              }}
            >
              {projectData.category}
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
              {projectData.title}
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section: Description */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "left",
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
            {projectData.description}
          </ReactMarkdown>
        </Box>
        {/* Skill Images */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allow wrapping to a new row
            gap: 1.5, // Spacing between images
          }}
        >
          {projectData.skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                width: "25px",
                height: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InvertableImage
                src={useLight ? skill.srcLight : skill.srcDark}
                alt={skill.name}
                invert={useLight && skill.invertIfLight}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

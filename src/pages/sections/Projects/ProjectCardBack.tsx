import React, { MouseEvent } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Project } from "../../../data/projectData";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif";
import { useCustomPalette } from "../../../theme/theme";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";

export interface ProjectCardBackProps {
  project: Project;
  useLight: boolean;
  height: string | number;
  borderRadius: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

export const ProjectCardBack = React.forwardRef<
  HTMLDivElement,
  ProjectCardBackProps
>(({ project, useLight, height, borderRadius, onClick }, ref) => {
  const { background, text } = useCustomPalette();

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        // pointerEvents: "none",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: background.paper,
          borderRadius,
          height,
        }}
        id={`project_card_back_${project.title}`}
      >
        {/* Media Container */}
        <Box
          sx={{
            position: "relative",
            maxHeight: "600px",
            aspectRatio: "16 / 9",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {project.gifSrc ? (
            <FirebaseVideoAsGif
              firebaseVideoPath={project.gifSrc}
              height="100%"
              alt={project.title}
              allowResizing={false}
              style={{
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
                objectFit: "cover",
              }}
            />
          ) : (
            <FirebaseImage
              firebaseImagePath={project.imageSrc}
              height="100%"
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
              }}
            />
          )}
        </Box>

        {/* Card Content */}
        <CardContent
          id={`project_card_content_${project.title}`}
          sx={{
            pt: 1.5,
            mb: -1.5,
            px: 2,
            flexGrow: 1,
            pointerEvents: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkBreaks]}
              components={{
                p: ({ children }) => (
                  <Typography
                    variant="body1"
                    fontSize={{ xs: "1rem", md: "1rem" }}
                    sx={{
                      color: text.secondary,
                      whiteSpace: "normal",
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
              {project.description}
            </ReactMarkdown>
          </Box>

          {/* Bottom Actions: Button and Media Count */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button variant="contained" onClick={onClick}>
              Click to Learn More
            </Button>
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.8)",
                color: "black",
                whiteSpace: "nowrap",
                border: "2px solid black",
              }}
            >
              {project.details.media.length}{" "}
              {project.details.media.length === 1
                ? "media item"
                : "media items"}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
});

import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Project } from "../../../data/projectData";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif";
import { useCustomPalette } from "../../../theme/theme";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";

interface ProjectCardBackProps {
  project: Project;
  useLight: boolean;
}

export const ProjectCardBack: React.FC<ProjectCardBackProps> = ({
  project,
}) => {
  const borderRadius = "8px";
  const { background, text } = useCustomPalette();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        position: "absolute",
        pointerEvents: "all",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          backgroundColor: background.paper,
          borderRadius,
        }}
        id={`project_card_${project.title}`}
      >
        {/* Media Container */}
        <Box
          ref={cardRef}
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
            pt: 1,
            px: 2,
            flexGrow: 1,
            pointerEvents: "none",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: text.secondary,
              fontSize: { xs: "1.75rem", sm: "2rem" },
              whiteSpace: "nowrap",
            }}
          >
            {project.title}
          </Typography>
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
        </CardContent>
      </Card>
    </Box>
  );
};

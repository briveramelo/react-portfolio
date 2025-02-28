import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";
import { Project } from "../../../data/projectData.ts";
import InvertableImage from "../../components/InvertableImage.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";
import { useAuth } from "../../../context/AuthContext.tsx";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif.tsx";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage.tsx";
import remarkBreaks from "remark-breaks";

interface ConsideredProjectProps {
  project: Project | null;
  useLight: boolean;
}

export const FocusedProjectCard: React.FC<ConsideredProjectProps> = ({
  project,
  useLight,
}) => {
  const borderRadius = "8px";
  const { user } = useAuth();
  const { background, text } = useCustomPalette();
  const boxRef = useRef<HTMLDivElement | null>(null);
  const boxWidth = project?.gifWidth ?? "50vw";
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // Reposition the card when the size changes
  useEffect(() => {
    if (!boxRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, [project]);

  if (!project) return null;

  return (
    <Box
      ref={boxRef}
      sx={{
        position: "fixed",
        top: dimensions ? `calc((100vh - ${dimensions.height}px) / 2)` : "20vh",
        left: `calc((100vw - ${boxWidth}) / 2)`,
        zIndex: 3,
        pointerEvents: "none",
        width: boxWidth,
        willChange: "opacity, top",
        transition: "top 1000ms ease",
        "--fade-duration": "1000ms",
      }}
      className={"fade-in"}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: background.paper,
          borderRadius,
        }}
        className="pop-shadow"
        id={`project_card_${project.title}`}
      >
        {/* IMAGE & VIDEO CONTAINER */}
        <Box
          sx={{
            position: "relative",
            flex: "1 1 auto",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {user && project.gifSrc ? (
            <FirebaseVideoAsGif
              firebaseVideoPath={project.gifSrc}
              alt={project.title}
              allowResizing={false}
              height={"100%"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
              }}
            />
          ) : (
            <FirebaseImage
              firebaseImagePath={project.imageSrc}
              alt={project.title}
              allowResizing={false}
              height={"100%"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
                transition: "opacity 0.5s ease",
              }}
            />
          )}
        </Box>

        {/* Header, Description, Skills, and Institutions */}
        <CardContent
          id={`project_card_content_${project.title}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 1,
            px: 2,
            gap: 3,
            flexShrink: 0,
          }}
        >
          {/* Header + Body */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Header: Category, Title, and Year */}
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
                  backgroundColor: project.category?.bgColor,
                  color: project.category?.textColor,
                  whiteSpace: "nowrap",
                }}
              >
                {project.category?.name}
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: text.secondary,
                }}
              >
                {project.title}
              </Typography>

              {/* Year */}
              <Typography
                variant="h5"
                sx={{
                  color: text.secondary,
                }}
              >
                {project.year}
              </Typography>
            </Box>

            {/* DESCRIPTION */}
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
          </Box>

          {/* Skills and Institutions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mt: "auto",
              mb: -1,
            }}
          >
            {/* Skills */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.17,
                alignContent: "flex-end",
              }}
            >
              {project.skills.map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <InvertableImage
                    id={`${project.title}_skills_${skill.name}`}
                    src={useLight ? skill.srcLight : skill.srcDark}
                    alt={skill.name}
                    invert={useLight && !!skill.invertIfLight}
                  />
                </Box>
              ))}
            </Box>

            {/* Right-side Group: Media Count and Institutions */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Media Count */}
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

              {/* Institutions */}
              {project.institutions && project.institutions.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "nowrap",
                  }}
                >
                  {project.institutions.map((institution, index) => (
                    <Box
                      key={`${institution.name}-${index}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 30,
                        flexShrink: 1,
                      }}
                    >
                      <img
                        src={institution.logoSrc}
                        alt={institution.name}
                        style={{
                          maxHeight: "100%",
                          width: "auto",
                          display: "block",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

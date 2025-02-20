import React, { useRef } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";
import { Project } from "../../../data/projectData.ts";
import InvertableImage from "../../components/InvertableImage.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";
import { useAuth } from "../../../context/AuthContext.tsx";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif.tsx";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage.tsx";

interface ConsideredProjectProps {
  project: Project | null;
  useLight: boolean;
}

export const ConsideredProject: React.FC<ConsideredProjectProps> = ({
  project,
  useLight,
}) => {
  if (project === null) return null;

  const borderRadius = "8px";
  const { user } = useAuth();
  const { background, text } = useCustomPalette();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        position: "fixed",
        pointerEvents: "none",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        "--fade-duration": "400ms",
      }}
      className={"fade-in"}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          backgroundColor: background.paper,
          borderRadius,
        }}
        className="pop-shadow"
        id={`project_card_${project.title}`}
      >
        {/* IMAGE & VIDEO CONTAINER */}
        <Box
          ref={cardRef}
          sx={{
            position: "relative",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            overflow: "hidden",
          }}
        >
          {/* ANIMATED IMAGE OR STATIC IMAGE */}
          {user && project.gifSrc ? (
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
              height={"100%"}
              alt={project.title}
              allowResizing={false}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
                transition: "opacity 0.5s ease",
              }}
            />
          )}
        </Box>

        {/* Header, Body, Skills, and Institutions */}
        <CardContent
          id={`project_card_content_${project.title}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 1,
            px: 2,
            gap: 3,
            flexGrow: 1,
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
        </CardContent>
      </Card>
    </Box>
  );
};

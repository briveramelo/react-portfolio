import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Project } from "../../../data/projectData";
import { useCustomPalette } from "../../../theme/theme";
import InvertableImage from "../../components/InvertableImage";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage";

interface ProjectCardFrontProps {
  project: Project;
  useLight: boolean;
  height: string | number;
  borderRadius: string;
}

export const ProjectCardFront = React.forwardRef<
  HTMLDivElement,
  ProjectCardFrontProps
>(({ project, useLight, height, borderRadius }, ref) => {
  const { background, text } = useCustomPalette();

  return (
    <Box
      ref={ref}
      sx={{
        backfaceVisibility: "hidden",
        pointerEvents: "none",
        position: "relative",
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          cursor: "pointer",
          backgroundColor: background.paper,
          borderRadius,
          height,
        }}
      >
        {/* IMAGE & VIDEO CONTAINER */}
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
          {/* IMAGE */}
          <FirebaseImage
            firebaseImagePath={project.imageSrc}
            height={"100%"}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            }}
          />

          {/* Media Count */}
          <Box
            sx={{
              position: "absolute",
              top: "4px",
              right: "4px",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.8)",
              border: "2px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "black", fontWeight: "bold", lineHeight: 1 }}
            >
              {project.details.media.length}
            </Typography>
          </Box>
        </Box>

        {/* Header, Body, Skills, and Institutions */}
        <CardContent
          id={`project_card_content_${project.title}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 1,
            px: 2,
            gap: 1,
            flexGrow: 1,
            pointerEvents: "none",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header: Category, Title, and Year */}
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Title */}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* Institutions Container */}
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
                        flexShrink: 0,
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
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
});

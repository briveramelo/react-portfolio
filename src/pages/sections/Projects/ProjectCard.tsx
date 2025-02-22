import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";
import { Project } from "../../../data/projectData.ts";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import { Collapsible } from "../../components/Collapsible.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";
import { useAuth } from "../../../context/AuthContext.tsx";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver.ts";
import ReactMarkdown from "react-markdown";
import InvertableImage from "../../components/InvertableImage.tsx";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage.tsx";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif.tsx";

interface ProjectCardProps {
  project: Project;
  useLight: boolean;
  onClick: () => void;
  onHover: (project: Project, mouseEnter: boolean) => void;
  isAnyHovered: boolean;
  targetDestinationX: string;
  slideDurationMs: number;
  animationComplete: boolean;
  hoverKey: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  useLight,
  onClick,
  onHover,
  isAnyHovered,
  targetDestinationX,
  slideDurationMs,
  animationComplete,
}) => {
  const isOnScreen = targetDestinationX === "0";
  const borderRadius = "8px";
  const cardHover = useHoverTracking();
  const { user } = useAuth();
  const { background, text } = useCustomPalette();
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardVisible = useIntersectionObserver(cardRef, { threshold: 0.94 });
  const revealDescription = isTouchDevice && isCardVisible;
  const revealAnimation = user && project.gifSrc && revealDescription;
  const isHoverable = isOnScreen && animationComplete;

  return (
    <Box
      sx={{
        position: "relative",
        visibility: !isOnScreen && animationComplete ? "hidden" : "visible",
        transition: isHoverable
          ? "opacity 300ms ease-in-out !important"
          : `transform ${slideDurationMs}ms ease-in-out`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        cursor: "pointer",
        willChange: "transform, opacity",
        pointerEvents: isHoverable ? "all" : "none",
        opacity: isTouchDevice
          ? 1
          : isAnyHovered && !cardHover.isHovered
            ? 0.15
            : 1,
      }}
      onPointerEnter={() => {
        onHover(project, true);
        cardHover.trackPointerEnter();
      }}
      onPointerLeave={(event: React.MouseEvent<HTMLElement>) => {
        onHover(project, false);
        cardHover.trackPointerLeave(event);
      }}
      onClick={(event) => {
        onHover(project, false);
        cardHover.trackPointerLeave(event);
        onClick();
      }}
    >
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          backgroundColor: background.paper,
          borderRadius,
          pointerEvents: "none",
        }}
        className="pop-shadow"
        id={`project_card_${project.title}`}
      >
        {/* IMAGE & VIDEO CONTAINER */}
        <Box
          ref={cardRef}
          sx={{
            position: "relative",
            maxHeight: "600px",
            aspectRatio: revealDescription ? undefined : "16 / 9",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            overflow: "hidden",
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
              opacity: revealAnimation ? 0 : 1,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* ANIMATED OVERLAY */}
          {isTouchDevice && user && project.gifSrc && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: revealAnimation ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
                borderRadius: `${borderRadius} ${borderRadius} 0 0`,
              }}
            >
              <FirebaseVideoAsGif
                firebaseVideoPath={project.gifSrc}
                height="100%"
                alt={project.title}
                style={{
                  borderRadius: `${borderRadius} ${borderRadius} 0 0`,
                  objectFit: "cover",
                }}
              />
            </Box>
          )}

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
                flexWrap: "wrap", // allow the category tag to wrap if needed
              }}
            >
              {/* Institutions Container */}
              {project.institutions && project.institutions.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "nowrap", // ensure institutions never wrap
                  }}
                >
                  {project.institutions.map((institution, index) => (
                    <Box
                      key={`${institution.name}-${index}`}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 30,
                        flexShrink: 0, // prevent shrinking
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
};

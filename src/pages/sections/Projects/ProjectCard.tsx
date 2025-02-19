import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "../../components/Markdown/HighlightedText.tsx";
import { Project } from "../../../data/projectData.ts";
import InvertableImage from "../../components/InvertableImage.tsx";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import { Collapsible } from "../../components/Collapsible.tsx";
import { useCursor } from "../../../context/CursorContext.tsx";
import { useCustomPalette } from "../../../theme/theme.ts";
import { useAuth } from "../../../context/AuthContext.tsx";
import FirebaseImage from "../../components/MediaCarousel/MediaItems/FirebaseImage.tsx";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver.ts";
import FirebaseVideoAsGif from "../../components/MediaCarousel/MediaItems/FirebaseVideoAsGif.tsx";

interface ProjectCardProps {
  projectData: Project;
  useLight: boolean;
  onClick: () => void;
  targetDestinationX: string;
  slideDurationMs: number;
  animationComplete: boolean;
  hoverKey: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectData,
  useLight,
  onClick,
  targetDestinationX,
  slideDurationMs,
  animationComplete,
  hoverKey,
}) => {
  const isOnScreen = targetDestinationX === "0";
  const borderRadius = "8px";
  const cardHover = useHoverTracking();
  const { user } = useAuth();
  const { onHoverChange } = useCursor();
  const { background, text } = useCustomPalette();
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardVisible = useIntersectionObserver(cardRef, { threshold: 0.94 });
  const revealContent = cardHover.isHovered || (isTouchDevice && isCardVisible);
  const revealAnimation = user && projectData.gifSrc && revealContent;

  return (
    <Box
      sx={{
        position: "relative",
        visibility: !isOnScreen && animationComplete ? "hidden" : "visible",
        transition:
          isOnScreen && animationComplete
            ? ""
            : `transform ${slideDurationMs}ms ease-in-out !important`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        cursor: "pointer",
        willChange: "transform", // first time (and subsequent) appearance is key
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
        }}
        className="pop-shadow"
        onPointerEnter={() => {
          onHoverChange(hoverKey, true);
          cardHover.trackPointerEnter();
        }}
        onPointerLeave={(event: React.MouseEvent<HTMLElement>) => {
          onHoverChange(hoverKey, false);
          cardHover.trackPointerLeave(event);
        }}
        onClick={() => {
          onHoverChange(hoverKey, false);
          onClick();
        }}
        id={`project_card_${projectData.title}`}
      >
        {/* IMAGE & VIDEO CONTAINER */}
        <Box
          ref={cardRef}
          sx={{
            position: "relative",
            maxHeight: "600px",
            aspectRatio: revealContent ? undefined : "16 / 9",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
            overflow: "hidden",
          }}
        >
          {/* IMAGE  */}
          <FirebaseImage
            firebaseImagePath={projectData.imageSrc}
            height={"100%"}
            alt={projectData.title}
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
          {user && projectData.gifSrc && (
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
                firebaseVideoPath={projectData.gifSrc}
                height="100%"
                alt={projectData.title}
                style={{
                  borderRadius: `${borderRadius} ${borderRadius} 0 0`,
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
        </Box>

        {/* TEXT + SKILLS COLUMN */}
        <CardContent
          id={`project_card_content_${projectData.title}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            gap: 3,
            flexGrow: 1,
          }}
        >
          {/* MAIN CONTENT AREA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexGrow: 1,
            }}
          >
            {/* Category + Title + Logos */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
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
                  backgroundColor: projectData.category?.bgColor,
                  color: projectData.category?.textColor,
                  whiteSpace: "nowrap",
                }}
              >
                {projectData.category?.name}
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: text.secondary,
                  flexGrow: 1,
                  whiteSpace: { xs: "normal", md: "nowrap" },
                }}
              >
                {projectData.title}
              </Typography>

              {/* Institution Logos */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {projectData.institutions.map((institution, index) => (
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
            </Box>

            {/* DESCRIPTION */}
            <Collapsible
              durationMs={200}
              isOpen={cardHover.isHovered || isTouchDevice}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  opacity: cardHover.isHovered || isTouchDevice ? 1 : 0,
                  transition: "opacity 0.5s ease",
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
                  {projectData.description}
                </ReactMarkdown>
              </Box>
            </Collapsible>
          </Box>

          {/* SKILLS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.17,
              mt: "auto",
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
                  flexShrink: 0,
                }}
              >
                <InvertableImage
                  id={`${projectData.title}_skills_${skill.name}`}
                  src={useLight ? skill.srcLight : skill.srcDark}
                  alt={skill.name}
                  invert={useLight && !!skill.invertIfLight}
                />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./reusable/HighlightedText.tsx";
import { Project } from "../../data/projectData.ts";
import InvertableImage from "./reusable/InvertableImage.tsx";
import { cp } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import { Collapsible } from "./reusable/Collapsible.tsx";
import { useCursor } from "../../context/CursorContext.tsx";

interface ProjectCardProps {
  projectData: Project;
  useLight: boolean;
  onClick: () => void;
  targetDestinationX: string;
  slideDurationMs: number;
  animationComplete: boolean;
  hasAnyBeenClicked: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectData,
  useLight,
  onClick,
  targetDestinationX,
  slideDurationMs,
  animationComplete,
  hasAnyBeenClicked,
}) => {
  const isOnScreen = targetDestinationX === "0";
  const borderRadius = "8px";
  const cardHover = useHoverTracking();
  const hoverKey = "card";
  const { onHoverChange } = useCursor();

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
          backgroundColor: cp("background.paper"),
          borderRadius,
        }}
        className="pop-shadow"
        onMouseEnter={() => {
          if (!hasAnyBeenClicked) {
            onHoverChange(hoverKey, true);
          }
          cardHover.trackMouseEnter();
        }}
        onMouseLeave={(event: React.MouseEvent<HTMLElement>) => {
          if (!hasAnyBeenClicked) {
            onHoverChange(hoverKey, false);
          }
          cardHover.trackMouseLeave(event);
        }}
        onClick={() => {
          onHoverChange(hoverKey, false);
          onClick();
        }}
        id={`project_card_${projectData.title}`}
      >
        {/* IMAGE */}
        <CardMedia
          component="img"
          id={`project_card_img_${projectData.title}`}
          src={projectData.image}
          alt={projectData.title}
          sx={{
            minHeight: "250px",
            maxHeight: "600px",
            minWidth: "300px",
            borderRadius: `${borderRadius} ${borderRadius} 0 0`,
          }}
        />

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
                  backgroundColor: projectData.color,
                  color: projectData.textColor,
                  whiteSpace: "nowrap",
                }}
              >
                {projectData.category}
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: cp("text.secondary"),
                  flexGrow: 1,
                  whiteSpace: { xs: "normal", md: "nowrap" },
                }}
              >
                {projectData.title}
              </Typography>

              {/* Employer Logos */}
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
                {projectData.employers.map((employer) => (
                  <Box
                    key={employer.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: 30,
                      flexShrink: 1,
                    }}
                  >
                    <img
                      src={employer.logoSrc}
                      alt={employer.name}
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
            <Collapsible durationMs={200} isOpen={cardHover.isHovered}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  opacity: cardHover.isHovered ? 1 : 0,
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
                          color: cp("text.secondary"),
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

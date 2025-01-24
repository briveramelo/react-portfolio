import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./reusable/HighlightedText.tsx";
import { Project } from "../../data/projectData.ts";
import InvertableImage from "./reusable/InvertableImage.tsx";
import { cp } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface ProjectCardProps {
  projectData: Project;
  flipped?: boolean;
  useLight: boolean;
  onClick: () => void;
  targetDestinationX: string;
  slideDurationMs: number;
  animationComplete: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectData,
  flipped = false,
  useLight,
  onClick,
  targetDestinationX,
  slideDurationMs,
  animationComplete,
}) => {
  const isOnScreen = targetDestinationX === "0";
  const borderRadius = "8px";
  const cardHover = useHoverTracking();
  const learnMoreHover = useHoverTracking();

  return (
    <Box
      onMouseEnter={cardHover.trackMouseEnter}
      onMouseLeave={cardHover.trackMouseLeave}
      id={`project_card_${projectData.title}`}
      sx={{
        position: "relative",
        transition:
          isOnScreen && animationComplete
            ? ""
            : `transform ${slideDurationMs}ms ease-in-out !important`,
        transform: `translate3d(${targetDestinationX}, 0, 0)`,
        willChange: !animationComplete ? "transform" : "",
        "&:hover": {
          "& #learn_more_slide_target": {
            transform: "translateY(-38px)",
          },
        },
      }}
    >
      {/* "Learn More" Button */}
      <Box
        id="learn_more_slide_target"
        sx={{
          position: "absolute",
          transform: "translateY(-5px)",
          left: flipped ? "2px" : "auto",
          right: flipped ? "auto" : "2px",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-start",
          transition: "transform 0.3s ease !important",
          willChange: isOnScreen ? "transform" : "",
        }}
      >
        <Box
          id={`project_learn_more_${projectData.title}`}
          className={"pop-shadow"}
          component="button"
          onClick={onClick}
          onMouseEnter={learnMoreHover.trackMouseEnter}
          onMouseLeave={learnMoreHover.trackMouseLeave}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: "8px 8px 0px 0px",
            fontSize: "0.875rem",
            fontWeight: "bold",
            backgroundColor: projectData.color,
            color: projectData.textColor,
            border: "none",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Learn More
        </Box>
      </Box>

      <Card
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: flipped ? "row-reverse" : "row" },
          alignItems: "stretch",
          backgroundColor: cp("background.paper"),
          borderRadius,
          overflow: "visible",
        }}
        className="subtle-shadow"
      >
        {/* IMAGE */}
        <CardMedia
          component="img"
          src={projectData.image}
          alt={projectData.title}
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            objectFit: "cover",
            flexShrink: 1,
            borderRadius: {
              xs: `${borderRadius} ${borderRadius} 0 0`, // Rounded top corners on small screens
              md: flipped
                ? `0 ${borderRadius} ${borderRadius} 0`
                : `${borderRadius} 0 0 ${borderRadius}`, // Rounded outer corners on large screens
            },
          }}
        />

        {/* TEXT + SKILLS COLUMN */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            gap: 3,
            flexGrow: 1,
            overflow: "visible", // So text isn't clipped
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
                      src={employer.colorSrc}
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
                      fontSize={{ xs: "1rem", md: "1.25rem" }}
                      sx={{ color: cp("text.secondary"), whiteSpace: "normal" }}
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
          </Box>

          {/* SKILLS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
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

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { HighlightedText } from "./HighlightedText";
import { Project } from "../utils/projectData";
import InvertableImage from "./InvertableImage";
import { cp } from "../utils/utils";

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

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: flipped ? "row-reverse" : "row" },
        backgroundColor: cp("background.paper"),
        overflow: "hidden",
        borderRadius: 2,
        "&:hover":
          isOnScreen && animationComplete
            ? { transform: "scale(1.02) !important" }
            : {},
        transition:
          isOnScreen && animationComplete
            ? ""
            : `transform ${slideDurationMs}ms ease-in-out !important`,
        transform: `translateX(${targetDestinationX})`,
      }}
      className="pop-shadow"
      onClick={onClick}
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
          justifyContent: "space-between",
          gap: 3,
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
              }}
            >
              {projectData.title}
            </Typography>
            {/* Employer Logos */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // Spacing between images
              }}
            >
              {projectData.employers.map((employer) => (
                <Box
                  key={employer.name}
                  sx={{
                    height: "30px",
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={employer.colorSrc}
                    alt={employer.name}
                    style={{
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
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
              p: ({ children }) => (
                <Typography
                  variant="body1"
                  fontSize="1.25rem"
                  sx={{ color: cp("text.secondary") }}
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
        {/* Skill Images */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
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
                invert={useLight && !!skill.invertIfLight}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

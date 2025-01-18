import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";
import { projectData } from "../../utils/projectData";
import { useCustomPalette } from "../../theme";

interface ProjectsProps {
  backgroundColor: string;
  textColor: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  backgroundColor,
  textColor,
}) => {
  const { mode } = useCustomPalette();
  const useLight = mode === "dark";

  return (
    <Box
      component="section"
      id="work"
      sx={{
        py: 10,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: textColor,
              mb: 2,
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: textColor,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            These projects highlight my technical expertise, innovation, and
            empathy.
          </Typography>
        </Box>

        {/* Project Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title}
              projectData={project}
              flipped={index % 2 === 0}
              useLight={useLight}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

import React, { forwardRef } from "react";
import { ProjectDetail } from "../../data/projectDetails.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { cp } from "../../utils/utils";
import Carousel from "react-material-ui-carousel";
import InvertableImage from "./reusable/InvertableImage.tsx";
import { ThemeMode, useCustomPalette } from "../../theme.ts";

interface ProjectDetailsProps {
  project: ProjectDetail;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  const { story, images, skills, github, liveDemo } = project;
  const { mode } = useCustomPalette();
  const useLight = mode === ThemeMode.Dark;

  return (
    <Box sx={{ overflow: "visible" }}>
      {/* Storytelling */}
      <Grid container spacing={2}>
        {story.map((section, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              overflow: "visible",
              display: "flex", // Ensures the content inside the grid item is centered
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                p: 1,
                backgroundColor: cp("background.paper"),
                borderRadius: "8px",
                width: "100%",
              }}
              className={"subtle-shadow"}
            >
              <CardContent>
                <Typography variant="h6">{section.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ height: 20 }} />

      {/* Image Carousel */}
      <Carousel autoPlay navButtonsAlwaysVisible sx={{ overflow: "visible" }}>
        {images.map((img, idx) => (
          <Card
            key={idx}
            sx={{ boxShadow: 3, borderRadius: 2 }}
            className={"subtle-shadow"}
          >
            <CardMedia
              component="img"
              height="400"
              image={img.src}
              alt={img.alt}
            />
          </Card>
        ))}
      </Carousel>

      {/* SKILLS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: 3,
          mt: 1,
          position: "relative",
        }}
      >
        <Typography sx={{ position: "absolute", left: 5, mt: -3.5 }}>
          Built With:{" "}
        </Typography>
        {skills &&
          skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                width: "40px",
                height: "40px",
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

      {/* Call to Action */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        {github && (
          <Button
            variant="contained"
            href={github}
            target="_blank"
            sx={{ mx: 1 }}
          >
            GitHub
          </Button>
        )}
        {liveDemo && (
          <Button
            variant="outlined"
            href={liveDemo}
            target="_blank"
            sx={{ mx: 1 }}
          >
            Live Demo
          </Button>
        )}
      </Box>
    </Box>
  );
};

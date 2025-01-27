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

interface ProjectDetailsProps {
  project: ProjectDetail;
  contentRef: any;
}

export const ProjectDetails = forwardRef<HTMLDivElement, ProjectDetailsProps>(
  ({ project, contentRef }, ref) => {
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

    const { story, images, techStack, github, liveDemo } = project;

    return (
      <Box
        ref={contentRef}
        sx={{ maxWidth: "lg", mx: "auto", p: 1, overflow: "visible" }}
      >
        {/* Storytelling */}
        <Grid container spacing={2}>
          {story.map((section, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ overflow: "visible" }}>
              <Card
                sx={{
                  p: 1,
                  backgroundColor: cp("background.paper"),
                  borderRadius: "8px",
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
        <Carousel
          autoPlay
          navButtonsAlwaysVisible
          sx={{ overflow: "visible", backgroundColor: cp("background.paper") }}
        >
          {images.map((img, idx) => (
            <Card
              key={idx}
              sx={{ boxShadow: 3, borderRadius: 2, overflow: "visible" }}
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

        {/* Tech Stack */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Technologies Used</Typography>
          <Grid container spacing={2}>
            {techStack.map((tech, index) => (
              <Grid item key={index}>
                <Typography
                  variant="body1"
                  sx={{ bgcolor: "primary.light", p: 1, borderRadius: 1 }}
                >
                  {tech}
                </Typography>
              </Grid>
            ))}
          </Grid>
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
  },
);

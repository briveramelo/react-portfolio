import React, { useCallback, useState } from "react";
import { ProjectDetail } from "../../data/projectDetails.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import { cp } from "../../utils/utils";
import ImageCarousel from "./reusable/ImageCarousel.tsx";
import InvertableImage from "./reusable/InvertableImage.tsx";
import { ThemeMode, useCustomPalette } from "../../theme.ts";
import { useTheme } from "@mui/material/styles";

interface ProjectDetailsProps {
  project: ProjectDetail;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();
  const { mode } = useCustomPalette();
  const useLight = mode === ThemeMode.Dark;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { story, images, skills, github, liveDemo } = project;
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("md"));

  const getCarouselHeight = () => {
    if (isXs) return 300;
    if (isSmMd) return 400;
    if (isLgUp) return 600;
    return 600;
  };

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);

    const firstImageIndex = project.story[index].imageIndices[0];
    if (firstImageIndex !== undefined) {
      setSelectedImageIndex(firstImageIndex);
    }
  };

  const handleImageChange = (newImageIndex: number) => {
    setSelectedImageIndex(newImageIndex);
    const matchingStoryIndex = project.story.findIndex((story) =>
      story.imageIndices.includes(newImageIndex),
    );

    if (matchingStoryIndex !== -1) {
      setSelectedStoryIndex(matchingStoryIndex);
    }
  };

  return (
    <Box sx={{ overflow: "visible" }}>
      {/* Story and Images */}
      <Grid container spacing={2} flexDirection={"row"} alignContent={"left"}>
        {/* Story Cards */}
        <Grid item lg={3} xs={12}>
          {isMobile ? (
            // Mobile: Show only one story card
            <Card
              sx={{
                p: 1,
                backgroundColor: cp("background.paper"),
                color: cp("text.paper"),
                borderRadius: "8px",
                width: "100%",
              }}
              className={"subtle-shadow"}
            >
              <CardContent>
                <Typography variant="h6">
                  {story[selectedStoryIndex].title}
                </Typography>
                <Typography variant="body2">
                  {story[selectedStoryIndex].content}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            // Desktop: Show all story cards
            story.map((section, index) => (
              <Box
                key={index}
                sx={{
                  overflow: "visible",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  transform:
                    index === selectedStoryIndex ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "right center",
                }}
                py={0.5}
                onClick={() => handleStoryClick(index)}
              >
                <Card
                  sx={{
                    p: 1,
                    backgroundColor: cp("background.paper"),
                    color: cp("text.paper"),
                    borderRadius: "8px",
                    width: "100%",
                  }}
                  className={"subtle-shadow"}
                >
                  <CardContent>
                    <Typography variant="h6">{section.title}</Typography>
                    <Typography variant="body2">{section.content}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))
          )}
        </Grid>

        {/* Image Carousel */}
        <Grid item lg={9} xs={12}>
          <ImageCarousel
            images={images}
            onImageChange={handleImageChange}
            selectedIndex={selectedImageIndex}
            height={getCarouselHeight()}
          />
        </Grid>
      </Grid>

      <Box sx={{ height: 20 }} />

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
        <Typography sx={{ position: "absolute", left: 5, mt: -3 }}>
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

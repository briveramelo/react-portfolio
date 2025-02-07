import React, { useState } from "react";
import { MediaItem, ProjectDetail } from "../../../data/projectDetails";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import MediaCarousel from "./MediaCarousel/MediaCarousel";
import InvertableImage from "../../components/reusable/InvertableImage";
import { ThemeMode, useCustomPalette } from "../../../theme";
import { useTheme } from "@mui/material/styles";
import StoryChapter from "./StoryChapter";
import NavigationControls from "./NavigationControls";

interface ProjectDetailsProps {
  project: ProjectDetail;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();
  const { mode } = useCustomPalette();
  const useLight = mode === ThemeMode.Dark;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { media, skills, github, liveDemo } = project;
  const [chapterTitleIndex, setChapterTitleIndex] = useState<number>(0);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("md"));

  const getCarouselHeight = () => {
    if (isXs) return 300;
    if (isSmMd) return 400;
    if (isLgUp) return 600;
    return 600;
  };

  const handleChapterClick = (index: number) => {
    setChapterTitleIndex(index);
    setSelectedMediaIndex(index);
  };

  const findCurrentChapterIndex = (
    media: MediaItem[],
    currentIndex: number,
  ): number => {
    for (let i = currentIndex; i >= 0; i--) {
      if (media[i].chapterTitle) {
        return i;
      }
    }
    return 0;
  };

  const handleMediaChange = (newMediaIndex: number) => {
    setSelectedMediaIndex(newMediaIndex);
    const newChapterIndex = findCurrentChapterIndex(media, newMediaIndex);
    setChapterTitleIndex(newChapterIndex);
  };

  const nextMedia = () => {
    const newIndex = (selectedMediaIndex + 1) % media.length;
    handleMediaChange(newIndex);
    setHasBeenClicked(true);
  };

  const prevMedia = () => {
    const newIndex =
      selectedMediaIndex === 0 ? media.length - 1 : selectedMediaIndex - 1;
    handleMediaChange(newIndex);
    setHasBeenClicked(true);
  };

  return (
    <Box sx={{ overflow: "visible" }}>
      {/* Story and Images */}
      <Grid container spacing={2} flexDirection="row" alignContent="left">
        {/* Story Chapters */}
        <Grid item lg={3} xs={12}>
          {/* Navigation Controls */}
          <NavigationControls
            media={media}
            selectedMediaIndex={selectedMediaIndex}
            hasBeenClicked={hasBeenClicked}
            onNext={nextMedia}
            onPrev={prevMedia}
            onDotClick={handleMediaChange}
          />

          {isMobile ? (
            // Mobile: Render a single story chapter
            <StoryChapter
              mobile
              chapterTitle={media[chapterTitleIndex].chapterTitle}
              isActive={true}
              onClick={() => {}}
              text={media[selectedMediaIndex].text}
            />
          ) : (
            // Desktop: Render all story chapters
            media.map(
              (mediaItem, index) =>
                mediaItem.chapterTitle && (
                  <StoryChapter
                    key={index}
                    chapterTitle={mediaItem.chapterTitle}
                    isActive={index === chapterTitleIndex}
                    onClick={() => handleChapterClick(index)}
                    text={media[selectedMediaIndex].text}
                  />
                ),
            )
          )}
        </Grid>

        {/* Media Carousel */}
        <Grid item lg={9} xs={12}>
          <MediaCarousel
            showArrows={false}
            media={media}
            selectedIndex={selectedMediaIndex}
            onMediaChange={handleMediaChange}
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

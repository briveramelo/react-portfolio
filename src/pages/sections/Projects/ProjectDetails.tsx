import React, { useState, useEffect, useCallback, useRef } from "react";
import { MediaItem } from "../../../data/projectDetails.tsx";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import MediaCarousel from "../../components/MediaCarousel/MediaCarousel";
import InvertableImage from "../../components/InvertableImage.tsx";
import { ThemeMode, useCustomPalette } from "../../../theme/theme.ts";
import { useTheme } from "@mui/material/styles";
import StoryChapter from "./StoryChapter";
import NavigationControls from "../../components/MediaCarousel/Controls/NavigationControls.tsx";
import { trackCustomEvent } from "../../../utils/tracking/plausibleHelpers.ts";
import withDwellTimeTracking from "../../../utils/tracking/withDwellTimeTracking.tsx";
import ProjectLiveLinks from "./ProjectLiveLinks.tsx";
import { Project } from "../../../data/projectData.ts";
import { toSlug } from "../../../utils/utils.ts";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { mode } = useCustomPalette();
  const useLight = mode === ThemeMode.Dark;
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const location = useLocation();

  const { details, skills } = project;
  const { media, links } = details;
  const [chapterTitleIndex, setChapterTitleIndex] = useState<number>(0);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const { mediaIndex: routeMediaIndex } = useParams<{ mediaIndex?: string }>();
  const hasMediaNextBeenClickedRef = useRef<boolean>(false);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("md"));

  // On mount, if there's a matching hash, update the media index accordingly
  useEffect(() => {
    if (routeMediaIndex === undefined) return;

    const index = parseInt(routeMediaIndex, 10);
    if (!isNaN(index) && index >= 0 && index < media.length) {
      handleMediaChange(index);
    }
  }, [routeMediaIndex, project, media]);

  const getCarouselHeight = useCallback(() => {
    if (isXs) return 300;
    if (isSmMd) return 400;
    if (isLgUp) return 600;
    return 600;
  }, [isXs, isSmMd, isLgUp]);

  const handleChapterClick = (index: number) => {
    handleMediaChange(index);
    trackCustomEvent("project_chapter_click", {
      project_title: project.title,
      new_chapter_title: media[index].chapterTitle,
    });
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
    const currentMediaIndex = selectedMediaIndex;
    const currentChapterIndex = findCurrentChapterIndex(
      media,
      selectedMediaIndex,
    );

    setSelectedMediaIndex(newMediaIndex);
    const newChapterIndex = findCurrentChapterIndex(media, newMediaIndex);
    setChapterTitleIndex(newChapterIndex);

    navigate(`/projects/${toSlug(project.title)}/${newMediaIndex}`, {
      replace: true,
      state: location.state,
    });

    trackCustomEvent("project_media_change", {
      project_title: project.title,

      last_chapter_title: media[currentChapterIndex].chapterTitle,
      new_chapter_title: media[newChapterIndex].chapterTitle,

      last_media_index: currentMediaIndex,
      new_media_index: newMediaIndex,

      last_chapter_index: currentChapterIndex,
      new_chapter_index: newChapterIndex,

      last_media_progress: `${currentMediaIndex + 1}/${media.length}`,
      new_media_progress: `${newMediaIndex + 1}/${media.length}`,
    });
  };

  const nextMedia = () => {
    const newIndex = (selectedMediaIndex + 1) % media.length;
    handleMediaChange(newIndex);
    hasMediaNextBeenClickedRef.current = true;
  };

  const prevMedia = () => {
    const newIndex =
      selectedMediaIndex === 0 ? media.length - 1 : selectedMediaIndex - 1;
    handleMediaChange(newIndex);
    hasMediaNextBeenClickedRef.current = true;
  };

  return (
    <Box sx={{ overflow: "visible" }}>
      {/* Story and Images */}
      <Grid container spacing={2} flexDirection="row" alignContent="left">
        {/* Story Chapters */}
        <Grid item lg={3} xs={12}>
          {/* Desktop */}
          {!isMobile && (
            <>
              <NavigationControls
                media={media}
                selectedMediaIndex={selectedMediaIndex}
                hasBeenClicked={hasMediaNextBeenClickedRef.current}
                onNext={nextMedia}
                onPrev={prevMedia}
                onDotClick={handleMediaChange}
              />
              {media.map(
                (mediaItem, index) =>
                  mediaItem.chapterTitle && (
                    <StoryChapter
                      key={index}
                      chapterTitle={mediaItem.chapterTitle}
                      isActive={index === chapterTitleIndex}
                      onClick={() => handleChapterClick(index)}
                      markdown={media[selectedMediaIndex].text}
                    />
                  ),
              )}
            </>
          )}
        </Grid>

        {/* Media Carousel */}
        <Grid item lg={9} xs={12} sx={{ mt: isMobile ? -8 : 0 }}>
          <MediaCarousel
            showArrows={false}
            media={media}
            selectedIndex={selectedMediaIndex}
            onMediaChange={handleMediaChange}
            height={getCarouselHeight()}
          />
          {/* Mobile */}
          {isMobile && (
            <>
              <NavigationControls
                media={media}
                selectedMediaIndex={selectedMediaIndex}
                hasBeenClicked={hasMediaNextBeenClickedRef.current}
                onNext={nextMedia}
                onPrev={prevMedia}
                onDotClick={handleMediaChange}
              />
              <StoryChapter
                mobile
                chapterTitle={media[chapterTitleIndex].chapterTitle}
                isActive={true}
                onClick={() => {}}
                markdown={media[selectedMediaIndex].text}
              />
            </>
          )}
        </Grid>
      </Grid>

      <Box sx={{ height: 20 }} />

      {/* SKILLS */}
      {skills !== null && skills.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            mt: 3,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              textAlign: "center",
              top: -24,
              width: "100%",
            }}
          >
            Built With:
          </Typography>
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                display: "flex",
                maxWidth: "70px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "65px",
              }}
            >
              {/* Image container: center the image vertically */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                }}
              >
                <InvertableImage
                  id={`${project.title}_skills_${skill.name}`}
                  src={useLight ? skill.srcLight : skill.srcDark}
                  alt={skill.name}
                  invert={useLight && !!skill.invertIfLight}
                />
              </Box>
              {/* Text container: always at the bottom */}
              <Typography sx={{ textAlign: "center" }}>{skill.name}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Call to Action */}
      <ProjectLiveLinks links={links} />
    </Box>
  );
};

const getProjectTrackingData = (props: ProjectDetailsProps) => ({
  project_title: props.project.title,
});

export default withDwellTimeTracking(
  ProjectDetails,
  "project_details_dwell",
  getProjectTrackingData,
);

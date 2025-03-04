import React, { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import { SkillData } from "../../../data/skillsData.ts";
import { getProgressColor } from "../../../utils/utils.ts";
import { useAnimatedValue } from "../../../utils/hooks/useAnimatedValue.ts";
import {
  starArcAnimationDurationMs,
  maxYearsOfExperience,
} from "../../../data/constants.ts";
import InvertableImage from "../../components/InvertableImage.tsx";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import { useCursor } from "../../../context/CursorContext.tsx";
import RelatedProjects from "./RelatedProjects.tsx";

interface ExperienceProps {
  skill: SkillData;
  useLight: boolean;
  isVisible: boolean;
}

const ColorfulLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    // @ts-ignore
    backgroundColor: theme.customPalette.experience.empty,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

const SIZE = "50px";

const Experience: React.FC<ExperienceProps> = ({
  skill,
  useLight,
  isVisible,
}) => {
  const { name, years, srcLight, srcDark, invertIfLight } = skill;
  const rawValue = years.length;
  const src = useLight ? srcLight : srcDark;
  const clampedValue = Math.min(rawValue, maxYearsOfExperience);
  const animatedValue = useAnimatedValue(
    clampedValue,
    starArcAnimationDurationMs,
    isVisible,
  );
  const roundedText = Math.round(animatedValue);
  const hoverKey = `${skill.name}_experience`;
  const { isKeyHovered, onHoverChange } = useCursor();
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  // Capture the anchor element for positioning the overlay.
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePointerEnter = (event: React.PointerEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onHoverChange(hoverKey, true);
    trackPointerEnter();
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    setAnchorEl(null);
    onHoverChange(hoverKey, false);
    trackPointerLeave(event);
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        mb: 1,
        p: "5px",
        width: "100%",
        position: "relative",
        borderRadius: 2,
        backgroundColor: isKeyHovered(hoverKey)
          ? useLight
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.2)"
          : "transparent",
      }}
      wrap="nowrap"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      id={hoverKey}
    >
      {/* Skill icon */}
      <Grid
        item
        sx={{
          width: SIZE,
          height: SIZE,
          display: "flex",
          justifyContent: "center",
          verticalAlign: "middle", // Ensures the SVG centers with the text
        }}
      >
        <InvertableImage
          src={src}
          alt={name}
          invert={useLight && !!invertIfLight}
        />
      </Grid>

      {/* Skill name / numeric text / progress bar */}
      <Grid item xs>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={0.5}
          >
            <Typography variant="body1">{name}</Typography>
            <Typography
              variant="body1"
              sx={{
                color: getProgressColor(animatedValue, true),
              }}
            >
              {roundedText} {roundedText === 1 ? "yr" : "yrs"}
            </Typography>
          </Box>
          <ColorfulLinearProgress
            variant="determinate"
            value={(animatedValue / maxYearsOfExperience) * 100}
            sx={{
              [`& .${linearProgressClasses.bar}`]: {
                backgroundColor: getProgressColor(animatedValue, true),
                transition: `width ${starArcAnimationDurationMs}ms ease`,
                willChange: "width", //first time and subsequent must look great
              },
            }}
          />
        </Box>
      </Grid>

      {isKeyHovered(hoverKey) && anchorEl && (
        <RelatedProjects
          hoverKey={hoverKey}
          projects={skill.getRelatedProjects()}
          anchorEl={anchorEl}
        />
      )}
    </Grid>
  );
};

export default React.memo(Experience);

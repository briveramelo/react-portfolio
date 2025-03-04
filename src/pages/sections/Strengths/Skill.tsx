import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SkillData } from "../../../data/skillsData.ts";
import InvertableImage from "../../components/InvertableImage.tsx";
import StarRating from "./StarRating.tsx";
import { useHoverTracking } from "../../../utils/tracking/hooks/useHoverTracking.ts";
import { useCursor } from "../../../context/CursorContext.tsx";
import RelatedProjects from "./RelatedProjects.tsx";

interface SkillProps {
  skill: SkillData;
  useLight: boolean;
  isVisible: boolean;
  isSectionVisible: boolean;
}

const Skill: React.FC<SkillProps> = ({
  skill,
  useLight,
  isVisible,
  isSectionVisible,
}) => {
  const { name, starCount, srcLight, srcDark, invertIfLight } = skill;
  const src = useLight ? srcLight : srcDark;
  const iconSize = "35px";
  const fixedGap = "20px"; // Fixed space between icon and name
  const hoverKey = `${skill.name}_skill`;
  const { isKeyHovered, onHoverChange } = useCursor();
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  // Capture the anchor element for the popper.
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
      alignItems="center"
      justifyContent="center"
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
      {/* Skill Icon - Center Aligned */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            width: iconSize,
            height: iconSize,
            flexShrink: 0,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InvertableImage
            src={src}
            alt={name}
            invert={useLight && !!invertIfLight}
          />
        </Grid>
        {isKeyHovered(hoverKey) && anchorEl && (
          <RelatedProjects
            hoverKey={hoverKey}
            projects={skill.getRelatedProjects()}
            anchorEl={anchorEl}
          />
        )}
      </Box>
      {/* Fixed gap between icon and name */}
      <Box sx={{ width: fixedGap, flexShrink: 0 }} />
      {/* Skill Name - Left Aligned */}
      <Grid
        item
        sx={{
          textAlign: "left",
          flexShrink: 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{ whiteSpace: "nowrap", minWidth: "60px" }}
        >
          {name}
        </Typography>
      </Grid>
      {/* Flexible space between name and stars */}
      <Grid
        item
        sx={{
          flexGrow: 1,
        }}
      />
      {/* Star Rating - Right Aligned */}
      <Grid
        item
        sx={{
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        <StarRating
          key={name}
          count={starCount}
          isVisible={isVisible}
          isSectionVisible={isSectionVisible}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(Skill);

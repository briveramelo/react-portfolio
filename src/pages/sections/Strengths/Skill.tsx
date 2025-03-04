import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
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
  const { onHoverChange } = useCursor();
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorHovered, setAnchorHovered] = useState(false);
  const [popperHovered, setPopperHovered] = useState(false);
  const combinedHovered = anchorHovered || popperHovered;

  const handlePointerEnter = (event: React.PointerEvent<HTMLElement>) => {
    setAnchorHovered(true);
    setAnchorEl(event.currentTarget);
    onHoverChange(hoverKey, true);
    trackPointerEnter();
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    setAnchorHovered(false);
    onHoverChange(hoverKey, false);
    trackPointerLeave(event);
  };

  return (
    <Box
      id={hoverKey}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      sx={{
        mb: 1,
        p: "5px",
        width: "100%",
        position: "relative",
        borderRadius: 2,
        backgroundColor: combinedHovered
          ? useLight
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.2)"
          : "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Skill Icon */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: iconSize,
          height: iconSize,
          flexShrink: 0,
        }}
      >
        <InvertableImage
          src={src}
          alt={name}
          invert={useLight && !!invertIfLight}
        />
        {combinedHovered && anchorEl && (
          <RelatedProjects
            skillName={name}
            projects={skill.getRelatedProjects()}
            anchorEl={anchorEl}
            onPopperHoverChange={setPopperHovered}
          />
        )}
      </Box>
      {/* Fixed gap between icon and name */}
      <Box sx={{ width: fixedGap, flexShrink: 0 }} />
      {/* Skill Name */}
      <Box
        sx={{
          textAlign: "left",
          flexShrink: 0,
          minWidth: "60px",
        }}
      >
        <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
          {name}
        </Typography>
      </Box>
      {/* Flexible spacer */}
      <Box sx={{ flexGrow: 1 }} />
      {/* Star Rating */}
      <Box sx={{ textAlign: "right", flexShrink: 0 }}>
        <StarRating
          key={name}
          count={starCount}
          isVisible={isVisible}
          isSectionVisible={isSectionVisible}
        />
      </Box>
    </Box>
  );
};

export default React.memo(Skill);

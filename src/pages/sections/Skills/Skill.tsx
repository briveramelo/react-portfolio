import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SkillData } from "../../../data/skillsData.ts";
import InvertableImage from "../../components/reusable/InvertableImage.tsx";
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
  const iconSize = "50px";
  const fixedGap = "20px"; // Fixed space between icon and name
  const hoverKey = `${skill.name}_skill`;
  const { isKeyHovered, onHoverChange } = useCursor();
  const { trackPointerEnter, trackPointerLeave } = useHoverTracking();

  const handleHoverChange = (
    event: React.MouseEvent<HTMLElement>,
    on: boolean,
  ) => {
    onHoverChange(hoverKey, on);
    if (on) {
      trackPointerEnter();
    } else {
      trackPointerLeave(event);
    }
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        mb: 2,
        width: "100%",
        position: "relative",
      }}
      wrap="nowrap"
      onPointerEnter={(event) => handleHoverChange(event, true)}
      onPointerLeave={(event) => handleHoverChange(event, false)}
      id={hoverKey}
    >
      {/* Skill Icon - Center Aligned */}
      <Grid
        item
        sx={{
          width: iconSize,
          height: iconSize,
          flexShrink: 0,
          textAlign: "center",
        }}
      >
        <InvertableImage
          src={src}
          alt={name}
          invert={useLight && !!invertIfLight}
        />
      </Grid>

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
      {isKeyHovered(hoverKey) && skill.hasRelatedProjects() && (
        <RelatedProjects
          hoverKey={hoverKey}
          projects={skill.getRelatedProjects()}
        />
      )}
    </Grid>
  );
};

export default React.memo(Skill);

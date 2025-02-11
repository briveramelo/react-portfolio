import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Project } from "../../../data/projectData";
import { cp } from "../../../utils/utils";
import { useCursor } from "../../../context/CursorContext";

interface HoverOverlayProps {
  hoverKey: string;
  projects: Project[];
}

const RelatedProjects: React.FC<HoverOverlayProps> = ({
  hoverKey,
  projects,
}) => {
  if (projects.length === 0) {
    return null;
  }
  const { onHoverChange } = useCursor();
  const imgSize = 40;

  return (
    <Box
      onPointerEnter={() => onHoverChange(hoverKey, true)}
      onPointerLeave={() => onHoverChange(hoverKey, false)}
      sx={{
        position: "absolute",
        top: "100%",
        left: 30,
        backgroundColor: cp("background.paper"),
        color: "white",
        padding: 1,
        borderRadius: 1,
        zIndex: 1000,
      }}
      className={"subtle-shadow"}
    >
      <Grid container direction="column" spacing={1.5}>
        {projects.map((project) => (
          <Grid item key={project.title}>
            <a
              href={`#project-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={project.iconSrc}
                  alt={project.title}
                  style={{ width: imgSize, height: imgSize, borderRadius: 5 }}
                />
                <Typography
                  variant="body1"
                  color={cp("text.paper")}
                  sx={{ ml: 2 }}
                >
                  {project.title}
                </Typography>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(RelatedProjects);

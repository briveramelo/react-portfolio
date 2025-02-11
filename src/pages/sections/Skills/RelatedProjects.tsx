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
      <Grid container direction="column" spacing={1}>
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
                  style={{ width: 24, height: 24 }}
                />
                <Typography
                  variant="body2"
                  color={cp("text.paper")}
                  sx={{ ml: 1 }} // Add a left margin for spacing
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

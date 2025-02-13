import React from "react";
import { Box, Typography, Grid, darken } from "@mui/material";
import { Project } from "../../../data/projectData";
import { cp, toSlug } from "../../../utils/utils";
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
        padding: 1.5,
        borderRadius: 1,
        zIndex: 1000,
      }}
      className="subtle-shadow"
    >
      <Grid container direction="column" spacing={0} alignItems="flex-start">
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color={cp("text.paper")}
            sx={{
              ml: 0.5,
              mb: -0,
              textDecoration: "underline",
              fontWeight: "bold",
              fontSize: "1.05rem",
            }}
          >
            Related Projects
          </Typography>
        </Grid>

        {projects.map((project) => (
          <Grid item key={project.title} xs={12}>
            <Box
              component="a"
              href={`#projects-${toSlug(project.title)}`}
              sx={{
                display: "block",
                width: "100%",
                textDecoration: "none",
                color: "inherit",
                padding: 1,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: darken(cp("background.paper"), 0.2),
                },
              }}
              onClick={(e) => {
                e.preventDefault();
                const targetHash = `#projects-${toSlug(project.title)}`;
                if (window.location.hash === targetHash) {
                  // If already selected, manually dispatch a hashchange event.
                  window.dispatchEvent(new HashChangeEvent("hashchange"));
                } else {
                  window.location.hash = targetHash;
                }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
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
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(RelatedProjects);

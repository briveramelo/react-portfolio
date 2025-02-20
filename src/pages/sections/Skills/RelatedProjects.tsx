import React from "react";
import { Box, Typography, Grid, darken, Popper } from "@mui/material";
import { Project } from "../../../data/projectData";
import { toSlug } from "../../../utils/utils";
import { useCursor } from "../../../context/CursorContext";
import { useCustomPalette } from "../../../theme/theme";

interface HoverOverlayProps {
  hoverKey: string;
  projects: Project[];
  anchorEl: HTMLElement | null; // the element to which the overlay is anchored
}

const RelatedProjects: React.FC<HoverOverlayProps> = ({
  hoverKey,
  projects,
  anchorEl,
}) => {
  if (projects.length === 0 || !anchorEl) {
    return null;
  }
  const { onHoverChange } = useCursor();
  const { background, text } = useCustomPalette();
  const imgSize = 40;

  return (
    <Popper
      open={true}
      anchorEl={anchorEl}
      placement="bottom-start"
      style={{ zIndex: 2 }}
    >
      <Box
        onPointerEnter={() => onHoverChange(hoverKey, true)}
        onPointerLeave={() => onHoverChange(hoverKey, false)}
        sx={{
          backgroundColor: background.paper,
          color: "white",
          padding: 1.5,
          borderRadius: 1,
          boxShadow: 3,
        }}
        className="subtle-shadow"
      >
        <Grid container direction="column" spacing={0} alignItems="flex-start">
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color={text.paper}
              sx={{
                ml: 0.5,
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "1.05rem",
                whiteSpace: "nowrap",
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
                    backgroundColor: darken(background.paper, 0.2),
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
                    color={text.paper}
                    sx={{ ml: 2, whiteSpace: "nowrap" }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Popper>
  );
};

export default React.memo(RelatedProjects);

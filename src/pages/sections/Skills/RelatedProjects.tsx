import React, { useCallback } from "react";
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
  const { onHoverChange } = useCursor();
  const { background, text } = useCustomPalette();
  const imgSize = 40;

  const handleProjectClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, slug: string) => {
      e.preventDefault();
      const targetHash = `#projects-${slug}`;
      if (window.location.hash === targetHash) {
        // If already selected, manually dispatch a hashchange event.
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        window.location.hash = targetHash;
      }
    },
    [],
  );

  if (projects.length === 0 || !anchorEl) {
    return null;
  }

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
          {projects.map((project) => {
            const isHidden = project.focus === "Hidden";
            const slug = toSlug(project.title);
            return (
              <Grid item key={project.title} xs={12}>
                <Box
                  component={isHidden ? "div" : "a"}
                  href={isHidden ? undefined : `#projects-${slug}`}
                  sx={{
                    display: "block",
                    width: "100%",
                    textDecoration: "none",
                    color: "inherit",
                    padding: 1,
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: isHidden
                        ? "inherit"
                        : darken(background.paper, 0.2),
                    },
                  }}
                  onClick={
                    isHidden
                      ? undefined
                      : (e: React.MouseEvent<HTMLElement>) =>
                          handleProjectClick(e, slug)
                  }
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* Fixed-width container for the image */}
                    <Box
                      sx={{
                        width: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={project.iconSrc}
                        alt={project.title}
                        style={{
                          height: imgSize,
                          borderRadius: 5,
                        }}
                      />
                    </Box>
                    {/* Left-aligned title */}
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
            );
          })}
        </Grid>
      </Box>
    </Popper>
  );
};

export default React.memo(RelatedProjects);

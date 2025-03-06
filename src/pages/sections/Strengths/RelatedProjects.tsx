import React, { useCallback } from "react";
import { Box, Typography, Grid, darken, Popper } from "@mui/material";
import { Project } from "../../../data/projectData";
import { toSlug } from "../../../utils/utils";
import { useCustomPalette } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";

interface HoverOverlayProps {
  skillName: string;
  projects: Project[];
  anchorEl: HTMLElement | null; // the element to which the overlay is anchored
  onPopperHoverChange: (hovered: boolean) => void;
}

const RelatedProjects: React.FC<HoverOverlayProps> = ({
  skillName,
  projects,
  anchorEl,
  onPopperHoverChange,
}) => {
  const { background, text } = useCustomPalette();
  const imgSize = 40;
  const navigate = useNavigate();

  const handleProjectClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, slug: string) => {
      e.preventDefault();
      navigate(`/projects/${slug}`, {
        replace: false,
        state: { returnTo: "/strengths" },
      });
    },
    [navigate],
  );

  // When pointer enters or leaves the popper, update the popper hover state.
  const handlePopperEnter = () => {
    onPopperHoverChange(true);
  };

  const handlePopperLeave = () => {
    onPopperHoverChange(false);
  };

  if (projects.length === 0 || !anchorEl) {
    return null;
  }

  return (
    <Popper
      open={true}
      anchorEl={anchorEl}
      placement="bottom-start"
      modifiers={[
        {
          name: "flip",
          enabled: false,
        },
        {
          name: "offset",
          options: {
            offset: [50, -10], // [skidding, distance]
          },
        },
      ]}
      style={{ zIndex: 2 }}
      onPointerEnter={handlePopperEnter}
      onPointerLeave={handlePopperLeave}
    >
      <Box
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
              {`Projects with ${skillName}`}
            </Typography>
          </Grid>
          {projects.map((project) => {
            const isHidden = project.focus === "Hidden";
            const slug = toSlug(project.title);
            return (
              <Grid item key={project.title} xs={12}>
                <Box
                  component={isHidden ? "div" : "a"}
                  href={isHidden ? undefined : `/projects/${slug}`}
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

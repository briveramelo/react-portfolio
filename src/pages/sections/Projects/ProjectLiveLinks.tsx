import React from "react";
import { Box, Button } from "@mui/material";
import { ProjectLink } from "../../../data/projectDetails.tsx";
import { useCustomPalette } from "../../../theme/theme";

interface ProjectLiveLinksProps {
  links: ProjectLink[];
}

const ProjectLiveLinks: React.FC<ProjectLiveLinksProps> = ({ links }) => {
  const { interactable } = useCustomPalette();
  return (
    links &&
    links.length > 0 && (
      <Box
        sx={{
          mt: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {links.map((link) => (
          <Button
            key={link.href}
            component="a"
            variant="contained"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={link.icon}
            sx={{
              backgroundColor: interactable.idle,
              "&:hover": {
                backgroundColor: interactable.hovered,
              },
            }}
            className={"pop-shadow"}
          >
            {link.text}
          </Button>
        ))}
      </Box>
    )
  );
};

export default ProjectLiveLinks;

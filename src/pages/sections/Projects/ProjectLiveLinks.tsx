import React from "react";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectLiveLinksProps {
  liveUrl?: string;
  liveUrlText?: string;
  liveUrlIcon?: React.ReactNode;
  githubUrl?: string;
}

const ProjectLiveLinks: React.FC<ProjectLiveLinksProps> = ({
  liveUrl,
  liveUrlText,
  liveUrlIcon,
  githubUrl,
}) => {
  return (
    <Box sx={{ mt: 2, textAlign: "center" }}>
      {liveUrl && (
        <Button
          variant="contained"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={liveUrlIcon}
          sx={{ mx: 1 }}
        >
          {liveUrlText}
        </Button>
      )}
      {githubUrl && (
        <Button
          variant="outlined"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{ mx: 1 }}
        >
          GitHub
        </Button>
      )}
    </Box>
  );
};

export default ProjectLiveLinks;

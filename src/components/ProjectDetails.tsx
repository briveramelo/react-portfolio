import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Project } from "../utils/projectData";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onClose,
}) => {
  return (
    <Box>
      <Card sx={{ padding: 4 }}>
        <Typography variant="h4">{project.title}</Typography>
        <Typography variant="body1">Content coming soon</Typography>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            mt: 4,
          }}
        >
          Close
        </Button>
      </Card>
    </Box>
  );
};

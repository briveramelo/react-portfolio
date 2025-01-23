import React, { forwardRef } from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Project } from "../../data/projectData.ts";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetails = forwardRef<HTMLDivElement, ProjectDetailsProps>(
  ({ project, onClose }, ref) => {
    return (
      <Box ref={ref}>
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
  },
);

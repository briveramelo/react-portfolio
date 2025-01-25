import React, { forwardRef } from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Project } from "../../data/projectData.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";
import { cp } from "../../utils/utils";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetails = forwardRef<HTMLDivElement, ProjectDetailsProps>(
  ({ project, onClose }, ref) => {
    const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

    return (
      <Box ref={ref}>
        <Card sx={{ padding: 4, backgroundColor: cp("background.paper"), color: cp("text.paper") }}>
          <Typography variant="h4">{project.title}</Typography>
          <Typography variant="body1">Content coming soon</Typography>
          <Button
            id={`project_details_${project.title}_close}`}
            onMouseEnter={trackMouseEnter}
            onMouseLeave={trackMouseLeave}
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

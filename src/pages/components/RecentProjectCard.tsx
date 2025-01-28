import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { cp } from "../../utils/utils.ts";
import { useHoverTracking } from "../../tracking/useHoverTracking.ts";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function RecentProjectCard({ project }: { project: Project }) {
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: cp("background.paper"),
        borderRadius: 2,
        overflow: "hidden",
      }}
      className="subtle-shadow"
      id={`recent_card_${project.title}`}
      onMouseEnter={trackMouseEnter}
      onMouseLeave={trackMouseLeave}
    >
      <CardMedia
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        id={`recent_card_img_${project.title}`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
        }}
        id={`recent_card_content_${project.title}`}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: cp("text.secondary"),
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: cp("text.secondary"),
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

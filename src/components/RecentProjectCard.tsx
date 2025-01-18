import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { cp } from "../utils/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function RecentProjectCard({ project }: { project: Project }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: cp("background.paper"),
        borderRadius: 2,
        "&:hover": { transform: "scale(1.02) !important" },
        overflow: "hidden",
      }}
      className="pop-shadow"
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
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
        }}
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

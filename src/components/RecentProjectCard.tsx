import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

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
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          width: { xs: "100%", md: "50%" },
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
            color: "text.secondary",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

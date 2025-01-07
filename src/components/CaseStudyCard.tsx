import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  color: string; // Background color for category
  textColor: string; // Text color for category
}

export function CaseStudyCard({ data }: { data: CaseStudy }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        boxShadow: 3,
        backgroundColor: "background.paper",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        src={data.image}
        alt={data.title}
        sx={{
          width: { xs: "100%", md: "50%" },
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
        {/* Category Tag */}
        <Box
          sx={{
            display: "inline-block",
            px: 2,
            py: 1,
            borderRadius: "999px",
            fontSize: "0.875rem",
            fontWeight: "bold",
            backgroundColor: data.color,
            color: data.textColor,
            width: "fit-content",
          }}
        >
          {data.category}
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          {data.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          {data.description}
        </Typography>

        {/* Link Button */}
        <Button
          href={data.link}
          variant="contained"
          sx={{
            backgroundColor: data.color,
            color: data.textColor,
            textTransform: "none",
            fontWeight: "bold",
            width: "fit-content",
            "&:hover": {
              backgroundColor: data.color,
              opacity: 0.9,
            },
          }}
        >
          {data.linkText}
        </Button>
      </CardContent>
    </Card>
  );
}

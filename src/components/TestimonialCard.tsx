import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: string;
}

export function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: "background.paper",
        color: "text.primary",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            mb: 3,
            color: "text.secondary",
          }}
        >
          "{data.quote}"
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={data.photo}
            alt={data.name}
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              {data.name}
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              {data.title}
            </Typography>
            <Typography variant="h7" sx={{ color: "text.disabled" }}>
              {data.company}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

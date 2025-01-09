import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "The Pocket Optimist",
    description:
      "Your internal monologue determines much of your success in life. Bring a therapy transcript or a journal entry, and try an experimental AI demo to see what this means for you.",
    image: "/src/assets/projects/pessimistic-night.jpg",
    link: "#",
  },
  {
    title: "SmartChart",
    description:
      "For small clinics, insurance reimbursement piles on admin work. See how SmartChart's AI can do the heavy lifting.",
    image: "/src/assets/orgs/DigitalHealth4x3.jpg",
    link: "#",
  },
];

export function RecentWorkSection({ backgroundColor, textColor }) {
  return (
    <Box
      component="section"
      id="recent"
      sx={{
        py: 10,
        backgroundColor: backgroundColor,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: textColor }}
          >
            Recent Work
          </Typography>
          <Typography variant="body1" sx={{ color: textColor }}>
            Innovative technology and a love of learning go hand-in-hand.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

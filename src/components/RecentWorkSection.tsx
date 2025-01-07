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
      "Your internal monologue determines much of your success. Bring a therapy transcript or a journal entry and try an experimental AI demo.",
    image: "/assets/pessimistic-night_7xE-YHJLFyuFgT_pzuSoK.jpg",
    link: "#",
  },
  {
    title: "SmartChart",
    description:
      "For small clinics, insurance reimbursement piles on admin work. See how SmartChart’s AI can do the heavy lifting.",
    image: "/assets/DigitalHealth4x3_zuW_r0SW4ZGVQQHYVeG8Z.jpg",
    link: "#",
  },
];

export const RecentWorkSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 10,
        backgroundColor: "background.stone", // Alternating background color
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Recent Work
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
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
};

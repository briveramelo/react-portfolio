import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: `Brandon is hard-working, motivated, and passionate about the projects he works on... I give him my highest recommendation.`,
    name: "Joshua Levenson",
    title: "Web Developer",
    company: "Charter School",
    photo: "/src/assets/people/josh-levenson.jpeg",
  },
  {
    quote: `He has a knack of approaching problems correctly and developing elegant solutions in a short amount of time... a pleasure working with him.`,
    name: "Abhinandan Sain",
    title: "Senior Software Engineering Manager",
    company: "Collins Aerospace",
    photo: "/src/assets/people/andy.jpeg",
  },
  // Add more testimonials as needed
];

export const TestimonialsSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: 10,
        backgroundColor: "background.dark", // Referencing theme.palette.background.dark
        color: "text.secondary", // Referencing theme.palette.text.secondary
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
            <a
              href="https://www.linkedin.com/in/briveramelo/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              Testimonials
            </a>
          </Typography>
          <Typography variant="body1">
            I care about the quality of my work and the teams I support, but you
            should hear it from them.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonialsData.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.name}>
              <TestimonialCard data={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

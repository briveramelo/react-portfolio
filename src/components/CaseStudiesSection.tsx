import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CaseStudyCard } from "./CaseStudyCard";

const caseStudies = [
  {
    title: "Tilt Tracker",
    category: "HealthTech",
    description:
      "Tilt Tracker is like Fitbit for power wheelchairs; it’s an IoT sensor for people with spinal cord injury...",
    image: "/src/assets/projects/josh-tilt-2.jpg",
    link: "#",
    linkText: "View case study",
    color: "#e53935", // Red background
    textColor: "#ffffff", // White text
  },
  {
    title: "ABCmouse",
    category: "EdTech",
    description:
      "ABCmouse is the #1 learning app for children ages 2–8, loved by kids and parents across the world.",
    image: "/src/assets/projects/abcmouse.jpg",
    link: "#",
    linkText: "View case study",
    color: "#1e88e5", // Blue background
    textColor: "#ffffff", // White text
  },
  {
    title: "Design for America",
    category: "Design",
    description:
      "DFA is a national network of student-led teams using human-centered design to tackle big challenges like childhood obesity.",
    image: "/src/assets/projects/FruitBuddiKid.jpg",
    link: "#",
    linkText: "View case study",
    color: "#43a047", // Green background
    textColor: "#ffffff", // White text
  },
];

export function CaseStudiesSection() {
  return (
    <Box
      component="section"
      id="casestudies"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              mb: 2,
            }}
          >
            Case Studies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            These projects highlight my technical expertise, innovation, and
            empathy.
          </Typography>
        </Box>

        {/* Case Study Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} data={cs} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

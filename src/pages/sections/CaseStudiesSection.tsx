import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CaseStudyCard } from "../../components/CaseStudyCard";
import joshTilt2 from "@/assets/projects/josh-tilt-2.jpg";
import abcmouse from "@/assets/projects/abcmouse.jpg";
import fruitBuddiKid from "@/assets/projects/FruitBuddiKid.jpg";

export function CaseStudiesSection({ backgroundColor, textColor }) {
  const caseStudies = [
    {
      title: "Tilt Tracker",
      category: "Health Tech",
      description:
        "Tilt Tracker is like Fitbit for power wheelchairs; it’s an IoT sensor for people with spinal cord injury...",
      image: joshTilt2,
      link: "#",
      color: "#e53935", // Red background
      textColor: "#ffffff", // White text
    },
    {
      title: "ABCmouse",
      category: "Game Dev",
      description:
        "ABCmouse is the #1 learning app for children ages 2–8, loved by kids and parents across the world.",
      image: abcmouse,
      link: "#",
      color: "#1e88e5", // Blue background
      textColor: "#ffffff", // White text
    },
    {
      title: "Design for America",
      category: "Design",
      description:
        "DFA is a national network of student-led teams using human-centered design to tackle big challenges like childhood obesity.",
      image: fruitBuddiKid,
      link: "#",
      color: "#43a047", // Green background
      textColor: "#ffffff", // White text
    },
  ];
  return (
    <Box
      component="section"
      id="work"
      sx={{
        py: 10,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: textColor,
              mb: 2,
            }}
          >
            Case Studies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: textColor,
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
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.title}
              data={caseStudy}
              flipped={index % 2 === 0}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

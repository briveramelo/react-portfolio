import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";
import joshTilt2 from "@/assets/projects/josh-tilt-2.jpg";
import abcmouse from "@/assets/projects/abcmouse.jpg";
import clawface from "@/assets/projects/clawface.jpg";

export function Projects({ backgroundColor, textColor }) {
  const projects = [
    {
      title: "Tilt Tracker",
      category: "Health Tech",
      description: `Tilt Tracker is an IoT solution for power wheelchair users that **prevents pressure ulcers** through real-time monitoring.

I developed the **full-stack, HIPAA-compliant** system in collaboration with patients, doctors, and researchers, co-authoring multiple published studies.
`,
      image: joshTilt2,
      link: "#",
      color: "#e53935", // Red background
      textColor: "#ffffff", // White text
    },
    {
      title: "ABCmouse",
      category: "Game Dev",
      description: `ABCmouse is the **#1 learning app** for children ages 2–8, loved by kids and parents across the world.

I contributed to 27 updates for the ABCmouse app, **improving load times by 50%**, adding features like Mastering Math, and integrating **A/B test tools** for user insights.
I also upgraded the app's infrastructure to meet new platform requirements and ensure future compatibility.`,
      image: abcmouse,
      link: "#",
      color: "#1e88e5", // Blue background
      textColor: "#ffffff", // White text
    },
    {
      title: "Clawface",
      category: "Game Dev",
      description: `Clawface is a published video game on Steam, made with an indie studio. We received **Very Positive reviews and 35,000+ downloads.**

I led the engineering team of 6.`,
      image: clawface,
      link: "https://store.steampowered.com/app/785130/Clawface/",
      color: "#1e88e5", // Blue background
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
            Projects
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

        {/* Project Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              data={project}
              flipped={index % 2 === 0}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

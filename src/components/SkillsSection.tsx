import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { Box, Button, Typography, Grid } from "@mui/material";

export function SkillsSection() {
  const [isYearsOfExperience, setIsYearsOfExperience] =
    useState<boolean>(false);

  const toggleStat = () => {
    setIsYearsOfExperience((prev) => !prev);
  };

  const statsData = [
    {
      category: "Game Development",
      stats: [
        { name: "Unity", stat: 85, year: 2014, src: "unity.svg" },
        { name: "C#", stat: 90, year: 2014, src: "csharp.svg" },
      ],
    },
    {
      category: "Cloud Services",
      stats: [
        { name: "AWS", stat: 75, year: 2023, src: "aws.svg" },
        { name: "GCP", stat: 80, year: 2024, src: "google-cloud.svg" },
        { name: "Docker", stat: 85, year: 2020, src: "docker.svg" },
      ],
    },
    {
      category: "Web Front-end",
      stats: [
        { name: "HTML", stat: 75, year: 2016, src: "html5.svg" },
        { name: "CSS", stat: 75, year: 2016, src: "css3.svg" },
        { name: "JS", stat: 85, year: 2016, src: "javascript.svg" },
        { name: "React", stat: 75, year: 2024, src: "react.svg" },
        { name: "jQuery", stat: 85, year: 2016, src: "jquery.svg" },
      ],
    },
    {
      category: "Backend",
      stats: [
        { name: "Java", stat: 85, year: 2016, src: "java.svg" },
        { name: "Python", stat: 80, year: 2024, src: "python.svg" },
        { name: "Go", stat: 65, year: 2024, src: "go.svg" },
        { name: "SQL", stat: 80, year: 2016, src: "sql.svg" },
        { name: "NoSQL", stat: 90, year: 2024, src: "nosql.svg" },
      ],
    },
    {
      category: "Other",
      stats: [
        { name: "C++", stat: 70, year: 2019, src: "c++.svg" },
        { name: "Bash", stat: 85, year: 2019, src: "bash.svg" },
        { name: "DevOps", stat: 80, year: 2019, src: "devops.png" },
        { name: "HIPAA", stat: 90, year: 2019, src: "hipaa.svg" },
      ],
    },
    {
      category: "Art",
      stats: [
        { name: "Photoshop", stat: 15, year: 2011, src: "photoshop.svg" },
        { name: "Illustrator", stat: 10, year: 2011, src: "illustrator.svg" },
        { name: "Premier", stat: 5, year: 2017, src: "premiere.svg" },
      ],
    },
    {
      category: "Human-Centered Design",
      stats: [
        // TODO: All placeholders
        {
          name: "Understanding",
          stat: 90,
          year: 2010,
          src: "understanding.svg",
        },
        { name: "Prototyping", stat: 95, year: 2010, src: "prototyping.svg" },
        { name: "Storytelling", stat: 70, year: 2010, src: "storytelling.svg" },
        {
          name: "Community-Building",
          stat: 30,
          year: 2010,
          src: "community.svg",
        },
        { name: "Teamwork", stat: 95, year: 2010, src: "TODO-teamwork.svg" },
      ],
    },
    {
      category: "Operating Systems",
      stats: [
        { name: "Windows", stat: 40, year: 1999, src: "windows.svg" },
        { name: "macOS", stat: 85, year: 2009, src: "apple.svg" },
        { name: "Linux", stat: 80, year: 2016, src: "linux.svg" },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        p: 6,
        backgroundColor: "background.default",
        color: "text.primary",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ mb: 1 }}>
        Skills
      </Typography>
      <Button
        variant="contained"
        onClick={toggleStat}
        sx={{
          mb: 12,
        }}
      >
        {isYearsOfExperience ? "See Stats" : "See Years of Experience"}
      </Button>
      <Grid container spacing={9} justifyContent="center">
        {statsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
            <SkillCategory
              categoryData={category}
              isYearsOfExperience={isYearsOfExperience}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

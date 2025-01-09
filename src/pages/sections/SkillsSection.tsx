import React, { useState } from "react";
import SkillCategory from "../../components/SkillCategory";
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
        {
          name: "Unity",
          stat: 85,
          year: 2014,
          srcLight: "unity-w.svg",
          srcDark: "unity.svg",
        },
        {
          name: "C#",
          stat: 90,
          year: 2014,
          srcLight: "csharp.svg",
          srcDark: "csharp.svg",
        },
      ],
    },
    {
      category: "Cloud Services",
      stats: [
        {
          name: "AWS",
          stat: 75,
          year: 2023,
          srcLight: "aws-w.svg",
          srcDark: "aws.svg",
        },
        {
          name: "GCP",
          stat: 80,
          year: 2024,
          srcLight: "google-cloud.svg",
          srcDark: "google-cloud.svg",
        },
        {
          name: "Docker",
          stat: 85,
          year: 2020,
          srcLight: "docker.svg",
          srcDark: "docker.svg",
        },
      ],
    },
    {
      category: "Web Front-end",
      stats: [
        {
          name: "HTML",
          stat: 75,
          year: 2016,
          srcLight: "html5.svg",
          srcDark: "html5.svg",
        },
        {
          name: "CSS",
          stat: 75,
          year: 2016,
          srcLight: "css3.svg",
          srcDark: "css3.svg",
        },
        {
          name: "JS",
          stat: 85,
          year: 2016,
          srcLight: "javascript.svg",
          srcDark: "javascript.svg",
        },
        {
          name: "React",
          stat: 75,
          year: 2024,
          srcLight: "react.svg",
          srcDark: "react.svg",
        },
        {
          name: "jQuery",
          stat: 85,
          year: 2016,
          srcLight: "jquery.svg",
          srcDark: "jquery.svg",
        },
      ],
    },
    {
      category: "Backend",
      stats: [
        {
          name: "Java",
          stat: 85,
          year: 2016,
          srcLight: "java.svg",
          srcDark: "java.svg",
        },
        {
          name: "Python",
          stat: 80,
          year: 2024,
          srcLight: "python.svg",
          srcDark: "python.svg",
        },
        {
          name: "Go",
          stat: 65,
          year: 2024,
          srcLight: "go.svg",
          srcDark: "go.svg",
        },
        {
          name: "SQL",
          stat: 80,
          year: 2016,
          srcLight: "sql.svg",
          srcDark: "sql.svg",
        },
        {
          name: "NoSQL",
          stat: 90,
          year: 2024,
          srcLight: "nosql.svg",
          srcDark: "nosql.svg",
        },
      ],
    },
    {
      category: "Other",
      stats: [
        {
          name: "C++",
          stat: 70,
          year: 2019,
          srcLight: "c++.svg",
          srcDark: "c++.svg",
        },
        {
          name: "Bash",
          stat: 85,
          year: 2019,
          srcLight: "bash.svg",
          srcDark: "bash.svg",
          invertIfLight: true,
        },
        {
          name: "DevOps",
          stat: 80,
          year: 2019,
          srcLight: "devops.png",
          srcDark: "devops.png",
        },
        {
          name: "HIPAA",
          stat: 90,
          year: 2019,
          srcLight: "hipaa.svg",
          srcDark: "hipaa.svg",
        },
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
        py: 25,
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

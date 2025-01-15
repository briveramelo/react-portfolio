import React, { useRef, useState } from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import unityW from "@/assets/skills/unity-w.svg";
import unity from "@/assets/skills/unity.svg";
import csharp from "@/assets/skills/csharp.svg";
import awsW from "@/assets/skills/aws-w.svg";
import aws from "@/assets/skills/aws.svg";
import googleCloud from "@/assets/skills/google-cloud.svg";
import docker from "@/assets/skills/docker.svg";
import html5 from "@/assets/skills/html5.svg";
import css3 from "@/assets/skills/css3.svg";
import javascript from "@/assets/skills/javascript.svg";
import react from "@/assets/skills/react.svg";
import jquery from "@/assets/skills/jquery.svg";
import java from "@/assets/skills/java.svg";
import python from "@/assets/skills/python.svg";
import go from "@/assets/skills/go.svg";
import sql from "@/assets/skills/sql.svg";
import nosql from "@/assets/skills/nosql.svg";
import cpp from "@/assets/skills/c++.svg";
import bash from "@/assets/skills/bash.svg";
import devops from "@/assets/skills/devops.png";
import hipaa from "@/assets/skills/hipaa.svg";
import { faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import BouncingButton from "../../components/BouncingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersectionObserver } from "../../utils/useIntersectionObserver";
import SkillCategory from "../../components/SkillCategory";
import { SkillCategoryData } from "../../utils/types";

export function SkillsSection({ backgroundColor, textColor }) {
  const [isYearsOfExperience, setIsYearsOfExperience] = useState<boolean>(true);
  const sectionRef = useRef(null!);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.275 });
  const theme = useTheme();
  const themeName = theme.palette.type;
  const useLight = themeName !== "light";

  const toggleStat = () => {
    setIsYearsOfExperience((prev) => !prev);
  };

  const skillCategoryData: SkillCategoryData[] = [
    {
      category: "Game Development",
      skills: [
        {
          name: "Unity",
          stat: 85,
          years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023],
          srcLight: unityW,
          srcDark: unity,
        },
        {
          name: "C#",
          stat: 90,
          years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023],
          srcLight: csharp,
          srcDark: csharp,
        },
      ],
    },
    {
      category: "Cloud Services",
      skills: [
        {
          name: "AWS",
          stat: 75,
          years: [2018, 2023, 2024],
          srcLight: awsW,
          srcDark: aws,
        },
        {
          name: "GCP",
          stat: 80,
          years: [2024, 2025],
          srcLight: googleCloud,
          srcDark: googleCloud,
        },
        {
          name: "Docker",
          stat: 85,
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: docker,
          srcDark: docker,
        },
      ],
    },
    {
      category: "Web Front-end",
      skills: [
        {
          name: "HTML",
          stat: 75,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: html5,
          srcDark: html5,
        },
        {
          name: "CSS",
          stat: 75,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: css3,
          srcDark: css3,
        },
        {
          name: "JS",
          stat: 85,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: javascript,
          srcDark: javascript,
        },
        {
          name: "React",
          stat: 75,
          years: [2024, 2025],
          srcLight: react,
          srcDark: react,
        },
        {
          name: "jQuery",
          stat: 85,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: jquery,
          srcDark: jquery,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Java",
          stat: 85,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
          srcLight: java,
          srcDark: java,
        },
        {
          name: "Python",
          stat: 80,
          years: [2024, 2025],
          srcLight: python,
          srcDark: python,
        },
        {
          name: "Go",
          stat: 65,
          years: [2024, 2025],
          srcLight: go,
          srcDark: go,
        },
        {
          name: "SQL",
          stat: 80,
          years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
          srcLight: sql,
          srcDark: sql,
        },
        {
          name: "NoSQL",
          stat: 90,
          years: [2024, 2025],
          srcLight: nosql,
          srcDark: nosql,
        },
      ],
    },
    {
      category: "Other",
      skills: [
        {
          name: "C++",
          stat: 70,
          years: [2019, 2020, 2021, 2022, 2023, 2024],
          srcLight: cpp,
          srcDark: cpp,
        },
        {
          name: "Bash",
          stat: 85,
          years: [2019, 2020, 2021, 2022, 2023, 2024],
          srcLight: bash,
          srcDark: bash,
          invertIfLight: true,
        },
        {
          name: "DevOps",
          stat: 80,
          years: [2019, 2020, 2021, 2022, 2023, 2024],
          srcLight: devops,
          srcDark: devops,
        },
        {
          name: "HIPAA",
          stat: 90,
          years: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
          srcLight: hipaa,
          srcDark: hipaa,
        },
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        p: 6,
        backgroundColor: backgroundColor,
        color: textColor,
        textAlign: "center",
        py: 15,
        mb: 10,
      }}
    >
      <Typography variant="h1" sx={{ mb: 1 }}>
        Skills
      </Typography>
      <BouncingButton
        onClick={toggleStat}
        sx={{
          mb: 24,
          py: 2,
        }}
        variant="contained"
        numBounces={2}
        bounceDurationMs={1750}
      >
        <FontAwesomeIcon
          icon={isYearsOfExperience ? faStar : faCalendarCheck}
          style={{
            marginRight: "8px",
            marginTop: -3.25,
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          {isYearsOfExperience
            ? "See Self-Perceived Skill Level"
            : "See Years of Experience"}
        </Typography>
      </BouncingButton>
      <Grid container spacing={9} justifyContent="center" ref={sectionRef}>
        {skillCategoryData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
            <SkillCategory
              skillCategory={category}
              isYearsOfExperience={isYearsOfExperience}
              isVisible={isVisible}
              useLight={useLight}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

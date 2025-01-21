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

export interface SkillData {
  name: string;
  starCount: number; // 1–5
  years: number[]; // include each year (2010, 2011, 2012...)
  srcLight: string; // e.g. 'aws-w.svg', 'unity-w.png'
  srcDark: string; // e.g. 'aws.svg', 'unity.png'
  invertIfLight?: boolean;
}

export interface SkillCategoryData {
  category: string;
  skills: SkillData[];
}

export const skillsData: SkillCategoryData[] = [
  {
    category: "Game Development",
    skills: [
      {
        name: "Unity",
        starCount: 5,
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023],
        srcLight: unityW,
        srcDark: unity,
      },
      {
        name: "C#",
        starCount: 5,
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
        starCount: 3,
        years: [2018, 2023, 2024],
        srcLight: awsW,
        srcDark: aws,
      },
      {
        name: "GCP",
        starCount: 4,
        years: [2024, 2025],
        srcLight: googleCloud,
        srcDark: googleCloud,
      },
      {
        name: "Docker",
        starCount: 4,
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
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: html5,
        srcDark: html5,
      },
      {
        name: "CSS",
        starCount: 3,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: css3,
        srcDark: css3,
      },
      {
        name: "JS",
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: javascript,
        srcDark: javascript,
      },
      {
        name: "React",
        starCount: 4,
        years: [2024, 2025],
        srcLight: react,
        srcDark: react,
      },
      {
        name: "jQuery",
        starCount: 4,
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
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
        srcLight: java,
        srcDark: java,
      },
      {
        name: "Python",
        starCount: 4,
        years: [2024, 2025],
        srcLight: python,
        srcDark: python,
      },
      {
        name: "Go",
        starCount: 3,
        years: [2024, 2025],
        srcLight: go,
        srcDark: go,
      },
      {
        name: "SQL",
        starCount: 3,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
        srcLight: sql,
        srcDark: sql,
      },
      {
        name: "NoSQL",
        starCount: 4,
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
        starCount: 3,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: cpp,
        srcDark: cpp,
      },
      {
        name: "Bash",
        starCount: 3,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: bash,
        srcDark: bash,
        invertIfLight: true,
      },
      {
        name: "DevOps",
        starCount: 4,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: devops,
        srcDark: devops,
      },
      {
        name: "HIPAA",
        starCount: 4,
        years: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: hipaa,
        srcDark: hipaa,
      },
    ],
  },
];

export function getSkills(...names: string[]): SkillData[] {
  const allSkills = skillsData.flatMap((category) => category.skills); // Flatten all skills into a single array
  return names
    .map((name) => allSkills.find((skill) => skill.name === name)) // Map names to skills in the same order
    .filter((skill): skill is SkillData => skill !== undefined); // Remove undefined results
}

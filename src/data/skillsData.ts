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
import devops from "@/assets/skills/devops.webp";
import hipaa from "@/assets/skills/hipaa.svg";

export class SkillData {
  name: string;
  starCount: number;
  years: number[];
  srcLight: string;
  srcDark: string;
  invertIfLight?: boolean;
  relatedProjectTitles?: string[];
  static getProjects: (titles: string[]) => any[] = () => [];

  constructor({
    name,
    starCount,
    years,
    srcLight,
    srcDark,
    invertIfLight,
    relatedProjectTitles,
  }: {
    name: string;
    starCount: number;
    years: number[];
    srcLight: string;
    srcDark: string;
    invertIfLight?: boolean;
    relatedProjectTitles?: string[];
  }) {
    this.name = name;
    this.starCount = starCount;
    this.years = years;
    this.srcLight = srcLight;
    this.srcDark = srcDark;
    this.invertIfLight = invertIfLight;
    this.relatedProjectTitles = relatedProjectTitles;
  }

  hasRelatedProjects(): boolean {
    return this.relatedProjectTitles
      ? this.relatedProjectTitles.length > 0
      : false;
  }

  getRelatedProjects(): any[] {
    return this.relatedProjectTitles
      ? SkillData.getProjects(this.relatedProjectTitles)
      : [];
  }
}

export interface SkillCategoryData {
  category: string;
  skills: SkillData[];
}

export const skillsData: SkillCategoryData[] = [
  {
    category: "Cloud Services",
    skills: [
      new SkillData({
        name: "AWS",
        starCount: 3,
        years: [2018, 2023, 2024],
        srcLight: awsW,
        srcDark: aws,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "GCP",
        starCount: 4,
        years: [2024, 2025],
        srcLight: googleCloud,
        srcDark: googleCloud,
      }),
      new SkillData({
        name: "Docker",
        starCount: 4,
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: docker,
        srcDark: docker,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
    ],
  },
  {
    category: "Web Front-end",
    skills: [
      new SkillData({
        name: "HTML",
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: html5,
        srcDark: html5,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "CSS",
        starCount: 3,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: css3,
        srcDark: css3,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "JS",
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: javascript,
        srcDark: javascript,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "React",
        starCount: 4,
        years: [2024, 2025],
        srcLight: react,
        srcDark: react,
      }),
      new SkillData({
        name: "jQuery",
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: jquery,
        srcDark: jquery,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
    ],
  },
  {
    category: "Game Development",
    skills: [
      new SkillData({
        name: "Unity",
        starCount: 5,
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023],
        srcLight: unityW,
        srcDark: unity,
        relatedProjectTitles: ["ABCmouse", "Clawface"],
      }),
      new SkillData({
        name: "C#",
        starCount: 5,
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2023],
        srcLight: csharp,
        srcDark: csharp,
        relatedProjectTitles: ["Tilt Tracker", "ABCmouse", "Clawface"],
      }),
    ],
  },
  {
    category: "Backend",
    skills: [
      new SkillData({
        name: "Java",
        starCount: 4,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
        srcLight: java,
        srcDark: java,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "Python",
        starCount: 4,
        years: [2024, 2025],
        srcLight: python,
        srcDark: python,
      }),
      new SkillData({
        name: "Go",
        starCount: 3,
        years: [2024, 2025],
        srcLight: go,
        srcDark: go,
      }),
      new SkillData({
        name: "SQL",
        starCount: 3,
        years: [2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024],
        srcLight: sql,
        srcDark: sql,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "NoSQL",
        starCount: 4,
        years: [2024, 2025],
        srcLight: nosql,
        srcDark: nosql,
      }),
    ],
  },
  {
    category: "Other",
    skills: [
      new SkillData({
        name: "C++",
        starCount: 3,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: cpp,
        srcDark: cpp,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "Bash",
        starCount: 3,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: bash,
        srcDark: bash,
        invertIfLight: true,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "DevOps",
        starCount: 4,
        years: [2019, 2020, 2021, 2022, 2023, 2024],
        srcLight: devops,
        srcDark: devops,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
      new SkillData({
        name: "HIPAA",
        starCount: 4,
        years: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        srcLight: hipaa,
        srcDark: hipaa,
        relatedProjectTitles: ["Tilt Tracker"],
      }),
    ],
  },
];

export function getSkills(...names: string[]): SkillData[] {
  const allSkills = skillsData.flatMap((category) => category.skills); // Flatten all skills into a single array
  return names
    .map((name) => allSkills.find((skill) => skill.name === name)) // Map names to skills in the same order
    .filter((skill): skill is SkillData => skill !== undefined); // Remove undefined results
}

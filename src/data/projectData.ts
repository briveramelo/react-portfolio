import joshTilt from "@/assets/projects/josh-tilt-cropped.webp";
import abcmouse from "@/assets/projects/abcmouse.webp";
import clawface from "@/assets/projects/clawface.jpg";

import tiltLogo from "@/assets/projects/tilt/original/logo.svg";
import abcmouseLogo from "@/assets/projects/abcmouse/compressed/abcmouse-icon.webp";
import clawfaceLogo from "@/assets/projects/clawface/compressed/icon.webp";

import { getSkills, SkillData } from "./skillsData";
import { Employer, getEmployers } from "./employerData";

export interface Project {
  title: "Tilt Tracker" | "Clawface" | "ABCmouse";
  category: string;
  description: string;
  image: string;
  link: string;
  color: string; // Background color for category
  textColor: string; // Text color for category
  skills: SkillData[];
  employers: Employer[];
  iconSrc: string;
}

export const projectData: Project[] = [
  {
    title: "Tilt Tracker",
    category: "Health Tech",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with real-time reminders for patients and compliance reports for family and clinical care teams.`,
    image: joshTilt,
    link: "#",
    color: "#e53935",
    textColor: "#ffffff",
    skills: getSkills(
      "Docker",
      "DevOps",
      "Java",
      "HTML",
      "CSS",
      "JS",
      "jQuery",
      "SQL",
      "Bash",
      "C++",
      "AWS",
      "C#",
      "HIPAA",
    ),
    employers: getEmployers("UHealth", "The GApp Lab"),
    iconSrc: tiltLogo,
  },
  {
    title: "ABCmouse",
    category: "Game Dev",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.`,
    image: abcmouse,
    link: "#",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
    employers: getEmployers("Age of Learning"),
    iconSrc: abcmouseLogo,
  },
  {
    title: "Clawface",
    category: "Game Dev",
    description: `Clawface is a published video game on Steam, made with an indie studio. We received **Very Positive reviews** and **45,000+ downloads.**`,
    image: clawface,
    link: "https://store.steampowered.com/app/785130/Clawface/",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
    employers: getEmployers("Hathos Interactive"),
    iconSrc: clawfaceLogo,
  },
];

export function getProjects(names: string[]): Project[] {
  return projectData.filter((project) => names.includes(project.title));
}

import { SkillData as SkillDataImported } from "./skillsData";
SkillDataImported.getProjects = getProjects;

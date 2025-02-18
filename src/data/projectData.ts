import abcmouse from "@/assets/projects/abcmouse.webp";

import tiltLogo from "@/assets/projects/tilt/original/logo.svg";
import abcmouseLogo from "@/assets/projects/abcmouse/compressed/abcmouse-icon.webp";
import clawfaceLogo from "@/assets/projects/clawface/compressed/icon.webp";
import derpyDinosLogo from "@/assets/projects/derpydinos/compressed/icon.webp";

import { getSkills, SkillData } from "./skillsData";
import { InstitutionData, getInstitutions } from "./institutionData.ts";
import { getProjectsBySkill } from "./projectMapping.ts";

export interface Project {
  title: "Tilt Tracker" | "Clawface" | "ABCmouse" | "Derpy Dinos";
  category: string;
  categoryColor: string; // Background color for category
  categoryTextColor: string; // Text color for category
  description: string;
  imageSrc: string;
  gifSrc: string;
  skills: SkillData[];
  institutions: InstitutionData[];
  iconSrc: string;
}

export const projectData: Project[] = [
  {
    title: "Tilt Tracker",
    category: "Health Tech",
    categoryColor: "#e53935",
    categoryTextColor: "#ffffff",
    imageSrc: "tilt-tracker/josh-tilt-cropped.webp",
    gifSrc: "",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with real-time reminders for patients and compliance reports for family and clinical care teams.`,
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
    institutions: getInstitutions("UHealth", "The GApp Lab"),
    iconSrc: tiltLogo,
  },
  {
    title: "ABCmouse",
    category: "Game Dev",
    categoryColor: "#1e88e5",
    categoryTextColor: "#ffffff",
    imageSrc: "abcmouse/abcmouse.webp",
    gifSrc: "abcmouse/abcmouse-learning-path.webp",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.`,
    skills: getSkills("Unity", "C#"),
    institutions: getInstitutions("Age of Learning"),
    iconSrc: abcmouseLogo,
  },
  {
    title: "Clawface",
    category: "Game Dev",
    categoryColor: "#1e88e5",
    categoryTextColor: "#ffffff",
    imageSrc: "clawface/clawface-cover.webp",
    gifSrc: "clawface/Clawface-BulletHell.webp",
    description: `Clawface is a published video game on Steam, made with an indie studio. We received **Very Positive reviews** (9/10) and **70,000+ downloads.**`,
    skills: getSkills("Unity", "C#"),
    institutions: getInstitutions("Hathos Interactive"),
    iconSrc: clawfaceLogo,
  },
  {
    title: "Derpy Dinos",
    category: "Game Dev",
    categoryColor: "#1e88e5",
    categoryTextColor: "#ffffff",
    imageSrc: "derpy-dinos/derpy-dinos-logo.webp",
    gifSrc: "derpy-dinos/DerpyDinos-SlowDown.webp",
    description: `Derpy Dinos is a published video game on Steam, made with an indie team. We received **Mostly Positive reviews** (7/10) and **49,000+ downloads.**`,
    skills: getSkills("Unity", "C#"),
    institutions: [],
    iconSrc: derpyDinosLogo,
  },
];

SkillData.getProjects = getProjectsBySkill;

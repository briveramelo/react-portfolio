import tiltLogo from "@/assets/projects/tilt/original/logo.svg";
import abcmouseLogo from "@/assets/projects/abcmouse/compressed/abcmouse-icon2.webp";
import clawfaceLogo from "@/assets/projects/clawface/compressed/icon.webp";
import derpyDinosLogo from "@/assets/projects/derpydinos/compressed/icon.webp";
import mkJourney from "@/assets/projects/mindkloud-journey/compressed/mk-journey-icon-small.webp";

import { getSkills, SkillData } from "./skillsData";
import { InstitutionData, getInstitutions } from "./institutionData.ts";
import { getProjectsBySkill } from "./projectMapping.ts";

export interface Project {
  title:
    | "Tilt Tracker"
    | "Clawface"
    | "ABCmouse"
    | "Derpy Dinos"
    | "MindKloud"
    | "AD with Sam";
  category: ProjectCategory | undefined;
  description: string;
  imageSrc: string;
  gifSrc?: string;
  skills: SkillData[];
  institutions: InstitutionData[];
  iconSrc: string;
}

export interface ProjectCategory {
  name: "Health Tech" | "Game Dev";
  bgColor: string;
  textColor: string;
}

const categories: ProjectCategory[] = [
  {
    name: "Health Tech",
    bgColor: "#e53935",
    textColor: "#ffffff",
  },
  {
    name: "Game Dev",
    bgColor: "#1e88e5",
    textColor: "#ffffff",
  },
];

const getCategory = (
  name: ProjectCategory["name"],
): ProjectCategory | undefined => {
  return categories.find((cat) => cat.name === name);
};

export const projectData: Project[] = [
  {
    title: "Tilt Tracker",
    category: getCategory("Health Tech"),
    imageSrc: "tilt-tracker/josh-tilt-cropped.webp",
    gifSrc: "",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with real-time reminders and compliance reports for patients, family, and clinical care teams.`,
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
    category: getCategory("Game Dev"),
    imageSrc: "abcmouse/abcmouse.webp",
    gifSrc: "abcmouse/abcmouse-learning-path.mp4",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.`,
    skills: getSkills("Unity", "C#"),
    institutions: getInstitutions("Age of Learning"),
    iconSrc: abcmouseLogo,
  },
  {
    title: "Clawface",
    category: getCategory("Game Dev"),
    imageSrc: "clawface/clawface-cover.webp",
    gifSrc: "clawface/clawface-bullethell-compressed.mp4",
    description: `Clawface is an indie, twin-stick, arcade-style bullet hell published to Steam in 2018, **"Very Positive" reviews** (9/10) and **70,000+ downloads.**`,
    skills: getSkills("Unity", "C#"),
    institutions: getInstitutions("Hathos Interactive"),
    iconSrc: clawfaceLogo,
  },
  {
    title: "Derpy Dinos",
    category: getCategory("Game Dev"),
    imageSrc: "derpy-dinos/derpy-dinos-logo.webp",
    gifSrc: "derpy-dinos/derpy-dinos-slow-down.mp4",
    description: `Derpy Dinos is an indie, 2.5D, side-scrolling arcade shooter published to Steam in 2017. Smash, throw, and blast derpy dinosaurs. The more carnage you produce, the more points you earn for a spot on the global leaderboards. We received **Mostly Positive reviews** (7/10) and **49,000+ downloads.**`,
    skills: getSkills("Unity", "C#"),
    institutions: [],
    iconSrc: derpyDinosLogo,
  },
  {
    title: "AD with Sam",
    category: getCategory("Health Tech"),
    imageSrc: "ad-with-sam/sam-pressure-ulcers.webp",
    gifSrc: "ad-with-sam/ad-lightning-compressed2.mp4",
    description: `AD with Sam is a highly innovative exhibit for people with spinal cord injury to learn about a life-threatening complication: Autonomic Dysreflexia. This is **currently on display at the Craig H. Neilsen Rehabilitation Hospital** at the University of Utah. It uses a custom blend of storytelling, 3D projection mapping onto a lifesize mannequin, animated anatomy, surround sound audio, and RGB lighting.`,
    skills: getSkills("Bash"),
    institutions: getInstitutions("UHealth"),
    iconSrc: derpyDinosLogo,
  },
  {
    title: "MindKloud",
    category: getCategory("Health Tech"),
    imageSrc: "mindkloud-journey/mk-journey-icon.webp",
    gifSrc: "",
    description: `MindKloud Journey is a mobile app for young adults to improve emotional literacy by journaling and for college institutions to facilitate a thriving social atmosphere.`,
    skills: getSkills("Unity", "C#", "AWS"),
    institutions: getInstitutions("Health Tech Apps"),
    iconSrc: mkJourney,
  },
];

SkillData.getProjects = getProjectsBySkill;

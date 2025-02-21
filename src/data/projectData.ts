import tiltIcon from "@/assets/projects/tilt/original/icon.svg";
import abcmouseIcon from "@/assets/projects/abcmouse/compressed/abcmouse-icon2.webp";
import clawfaceIcon from "@/assets/projects/clawface/compressed/icon.webp";
import derpyDinosIcon from "@/assets/projects/derpydinos/compressed/icon.webp";
import mkJourneyIcon from "@/assets/projects/mindkloud-journey/compressed/mk-journey-icon-small.webp";
import pocketOptimistIcon from "@/assets/projects/pocket-optimist/compressed/icon.webp";
import bobbyIcon from "@/assets/projects/bobby-the-bladder/compressed/bobb-e-icon.webp";

import { getSkills, SkillData } from "./skillsData";
import { InstitutionData, getInstitutions } from "./institutionData.ts";
import { getProjectsBySkill } from "./projectMapping.ts";
import { ProjectDetail } from "./projectDetails.tsx";
import { tiltTracker } from "./projects/tiltTracker.tsx";
import { clawface } from "./projects/clawface.tsx";
import { abcMouse } from "./projects/abcmouse.tsx";
import { derpyDinos } from "./projects/derpyDinos.tsx";
import { adWithSam } from "./projects/adWithSam.tsx";
import { bobbyTheBladder } from "./projects/bobbyTheBladder.tsx";
import { mindkloud } from "./projects/mindkloud.tsx";
import { pocketOptimist } from "./projects/pocketOptimist.tsx";
import { abductor } from "./projects/abductor.tsx";

export interface ProjectCategory {
  name: "Health Tech" | "Game Dev" | "Health Game";
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
  {
    name: "Health Game",
    bgColor: "#b01e80",
    textColor: "#ffffff",
  },
];

export interface ProjectOptions {
  title:
    | "Tilt Tracker"
    | "Clawface"
    | "ABCmouse"
    | "Derpy Dinos"
    | "MindKloud"
    | "The Pocket Optimist"
    | "Bobby The Bladder"
    | "NRH Control"
    | "Abductor"
    | "AD with Sam";
  category: ProjectCategory | undefined;
  description: string;
  imageSrc: string;
  gifSrc?: string;
  gifWidth?: string; //eg: "75vw"
  skills: SkillData[];
  institutions: InstitutionData[];
  iconSrc: string;
  year: number;
  details: ProjectDetail;
}

export class Project {
  public title: ProjectOptions["title"];
  public category: ProjectOptions["category"];
  public description: ProjectOptions["description"];
  public imageSrc: ProjectOptions["imageSrc"];
  public gifSrc?: ProjectOptions["gifSrc"];
  public gifWidth?: ProjectOptions["gifWidth"];
  public skills: ProjectOptions["skills"];
  public institutions: ProjectOptions["institutions"];
  public iconSrc: ProjectOptions["iconSrc"];
  public year: ProjectOptions["year"];
  public details: ProjectOptions["details"];

  constructor({
    title,
    category,
    description,
    imageSrc,
    gifSrc,
    gifWidth,
    skills,
    institutions,
    iconSrc,
    year,
    details,
  }: ProjectOptions) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.imageSrc = imageSrc;
    this.gifSrc = gifSrc;
    this.gifWidth = gifWidth;
    this.skills = skills;
    this.institutions = institutions;
    this.iconSrc = iconSrc;
    this.year = year;
    this.details = details;
  }
}

const getCategory = (
  name: ProjectCategory["name"],
): ProjectCategory | undefined => {
  return categories.find((cat) => cat.name === name);
};

export const allProjects: Project[] = [
  new Project({
    title: "Tilt Tracker",
    year: 2023,
    category: getCategory("Health Tech"),
    imageSrc: "tilt-tracker/josh-tilt-cropped.webp",
    gifSrc: "",
    gifWidth: "60vw",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with real-time reminders and compliance reports for patients, family, and clinical care teams.`,
    skills: getSkills(
      "Leadership",
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
    iconSrc: tiltIcon,
    details: tiltTracker,
  }),
  new Project({
    title: "Clawface",
    year: 2018,
    category: getCategory("Game Dev"),
    imageSrc: "clawface/clawface-cover.webp",
    gifSrc: "clawface/clawface-bullethell-compressed.mp4",
    gifWidth: "60vw",
    description: `Clawface is an indie, twin-stick, arcade-style bullet hell shooter published to Steam with **"Very Positive" reviews** and **over 70,000 downloads.**`,
    skills: getSkills("Leadership", "Unity", "C#"),
    institutions: getInstitutions("Hathos Interactive"),
    iconSrc: clawfaceIcon,
    details: clawface,
  }),
  new Project({
    title: "ABCmouse",
    year: 2019,
    category: getCategory("Game Dev"),
    imageSrc: "abcmouse/abcmouse.webp",
    gifSrc: "abcmouse/abcmouse-learning-path.mp4",
    gifWidth: "60vw",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.`,
    skills: getSkills("Unity", "C#"),
    institutions: getInstitutions("Age of Learning"),
    iconSrc: abcmouseIcon,
    details: abcMouse,
  }),
  new Project({
    title: "AD with Sam",
    year: 2021,
    category: getCategory("Health Tech"),
    imageSrc: "ad-with-sam/sam-pressure-ulcers.webp",
    gifSrc: "ad-with-sam/ad-lightning-compressed2.mp4",
    gifWidth: "60vw",
    description: `AD with Sam is a highly innovative exhibit for people with spinal cord injury to learn about a life-threatening complication: Autonomic Dysreflexia. This is **currently on display at the Craig H. Neilsen Rehabilitation Hospital** at the University of Utah. It uses a custom blend of storytelling, 3D projection mapping onto a lifesize mannequin, animated anatomy, surround sound audio, and RGB lighting.`,
    skills: getSkills("Leadership", "Bash"),
    institutions: getInstitutions("UHealth"),
    iconSrc: derpyDinosIcon, //todo: replace
    details: adWithSam,
  }),
  new Project({
    title: "Derpy Dinos",
    year: 2017,
    category: getCategory("Game Dev"),
    imageSrc: "derpy-dinos/derpy-dinos-logo.webp",
    gifSrc: "derpy-dinos/derpy-dinos-slow-down.mp4",
    gifWidth: "60vw",
    description: `Derpy Dinos is a 2.5D side-scrolling arcade shooter published to Steam that challenges players to blast through dinosaurs and compete for global leaderboard rankings. We received **Mostly Positive reviews** (7/10) and **49,000+ downloads.**`,
    skills: getSkills("Leadership", "Unity", "C#"),
    institutions: [],
    iconSrc: derpyDinosIcon,
    details: derpyDinos,
  }),
  new Project({
    title: "Bobby The Bladder",
    year: 2022,
    category: getCategory("Health Game"),
    imageSrc: "bobby-the-bladder/sam-and-bobby-thumbnail.webp",
    gifSrc: "",
    gifWidth: "60vw",
    description: `Bobby the Bladder is an interactive, branching narrative game for people with spinal cord injury and their family to learn about bladder maintenance. This is **currently installed on all patient iPads at the Craig H. Neilsen Rehabilitation Hospital.**`,
    skills: getSkills("Leadership"),
    institutions: getInstitutions("UHealth"),
    iconSrc: bobbyIcon,
    details: bobbyTheBladder,
  }),
  new Project({
    title: "MindKloud",
    year: 2023,
    category: getCategory("Health Tech"),
    imageSrc: "mindkloud-journey/mk-journey-icon.webp",
    gifSrc: "",
    gifWidth: "35vw",
    description: `MindKloud Journey is a mobile app for young adults to improve emotional literacy by journaling and for college institutions to facilitate a thriving social atmosphere.`,
    skills: getSkills("Unity", "C#", "AWS"),
    institutions: getInstitutions("Health Tech Apps"),
    iconSrc: mkJourneyIcon,
    details: mindkloud,
  }),
  new Project({
    title: "The Pocket Optimist",
    year: 2024,
    category: getCategory("Health Tech"),
    imageSrc: "pocket-optimist/pessimistic-night2.webp",
    gifSrc: "pocket-optimist/pocket-opt-animals-compressed.mp4",
    gifWidth: "80vw",
    description: `The Pocket Optimist is a science-based, personal development service for athletes, working professionals, and parents to break through hidden mental barriers. It turns your everyday language into clear insights and offers straightforward workshops to help you improve.`,
    skills: getSkills("Python"),
    institutions: getInstitutions("Digital Health"),
    iconSrc: pocketOptimistIcon,
    details: pocketOptimist,
  }),
  new Project({
    title: "Abductor",
    year: 2016,
    category: getCategory("Game Dev"),
    imageSrc: "abductor/offender.webp",
    gifSrc: "",
    gifWidth: "80vw",
    description: `Offender is a 2D Arcade Style Shooter with a looping arena filled with endless carnage and destruction! Hurl unsuspecting humans into helicopters, tanks, and paratroopers as you invade Earth. How long can you survive? This is the precursor to Derpy Dinos, based on arcade classic: Defender.`,
    skills: getSkills("Leadership", "HTML", "JS"),
    institutions: [],
    iconSrc: bobbyIcon, //todo: update
    details: abductor,
  }),
];

SkillData.getProjects = getProjectsBySkill;

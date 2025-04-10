import tiltIcon from "@/assets/projects/tilt/original/icon.svg";
import abcmouseIcon from "@/assets/projects/abcmouse/compressed/abcmouse-icon2.webp";
import clawfaceIcon from "@/assets/projects/clawface/compressed/icon.webp";
import derpyDinosIcon from "@/assets/projects/derpydinos/compressed/icon.webp";
import mkJourneyIcon from "@/assets/projects/mindkloud-journey/compressed/mk-journey-icon-small.webp";
import samIcon from "@/assets/projects/ad-with-sam/sam-head.webp";
import pocketOptimistIcon from "@/assets/projects/pocket-optimist/compressed/icon.webp";
import bobbyIcon from "@/assets/projects/bobby-the-bladder/compressed/bobby-icon.webp";
import bobIcon from "@/assets/projects/abductor/bob-head.webp";
import nrhControlIcon from "@/assets/orgs/uhealth/uhealth-logo.webp";
import fruitBuddiIcon from "@/assets/orgs/dfa/fruit-buddi-logo.webp";
import debugIcon from "@/assets/projects/debug/debug-ship.webp";
import talkingPointsIcon from "@/assets/projects/talking-points/tp-flower.webp";
import brmIcon from "@/assets/people/brm-head.webp";
import smartChartIcon from "@/assets/orgs/digital-health/digital-health-logo.webp";

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
import { nrhControl } from "./projects/nrhControl.tsx";
import { fruitBuddi } from "./projects/fruitBuddi.tsx";
import { debug } from "./projects/debug.tsx";
import { talkingPoints } from "./projects/talkingPoints.tsx";
import { thisPortfolio } from "./projects/thisPortfolio.tsx";
import { smartChart } from "./projects/smartChart.tsx";

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

type Focus = "Featured" | "Archived" | "Hidden";

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
    | "Fruit Buddi"
    | "Debug"
    | "Talking Points"
    | "This Portfolio"
    | "Smart Chart"
    | "AD with Sam";
  category: ProjectCategory | undefined;
  focus: Focus | undefined;
  description: string;
  imageSrc: string;
  gifSrc?: string;
  skills: SkillData[];
  institutions: InstitutionData[];
  iconSrc: string;
  year: number;
  month: number;
  details: ProjectDetail;
  impact: number;
}

export class Project {
  public title: ProjectOptions["title"];
  public category: ProjectOptions["category"];
  public focus: ProjectOptions["focus"];
  public description: ProjectOptions["description"];
  public imageSrc: ProjectOptions["imageSrc"];
  public gifSrc?: ProjectOptions["gifSrc"];
  public skills: ProjectOptions["skills"];
  public institutions: ProjectOptions["institutions"];
  public iconSrc: ProjectOptions["iconSrc"];
  public year: ProjectOptions["year"];
  public month: ProjectOptions["month"];
  public details: ProjectOptions["details"];
  public impact: ProjectOptions["impact"];

  constructor({
    title,
    category,
    focus,
    description,
    imageSrc,
    gifSrc,
    skills,
    institutions,
    iconSrc,
    year,
    month,
    details,
    impact,
  }: ProjectOptions) {
    this.title = title;
    this.category = category;
    this.focus = focus;
    this.description = description;
    this.imageSrc = imageSrc;
    this.gifSrc = gifSrc;
    this.skills = skills;
    this.institutions = institutions;
    this.iconSrc = iconSrc;
    this.year = year;
    this.month = month;
    this.details = details;
    this.impact = impact;
  }
}

const getCategory = (
  name: ProjectCategory["name"],
): ProjectCategory | undefined => {
  return categories.find((cat) => cat.name === name);
};

const _ = "&nbsp;"; //whitespace character. When on its own line, produces a line break.

export const allProjects: Project[] = [
  new Project({
    title: "Tilt Tracker",
    year: 2023,
    month: 12,
    category: getCategory("Health Tech"),
    focus: "Featured",
    imageSrc: "tilt-tracker/josh-tilt-cropped.webp",
    gifSrc: "",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with reminders and reports for patients, family, and clinical care teams.
${_}
I served a Software Engineer and transitioned to Lead Engineer, Co-Inventor, and Lead Producer for over 4 years.`,
    skills: getSkills(
      "Leadership",
      "Docker",
      "DevOps",
      "AWS",
      "Java",
      "C#",
      "jQuery",
      "JS",
      "HTML",
      "CSS",
      "C++",
      "SQL",
      "Bash",
      "HIPAA",
    ),
    institutions: getInstitutions("UHealth", "The GApp Lab"),
    iconSrc: tiltIcon,
    details: tiltTracker,
    impact: 80,
  }),
  new Project({
    title: "ABCmouse",
    year: 2019,
    month: 9,
    category: getCategory("Game Dev"),
    focus: "Featured",
    imageSrc: "abcmouse/abcmouse.webp",
    gifSrc: "abcmouse/abcmouse-learning-path.mp4",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.
${_}
I served as a Software Engineer I and II on ABCmouse for 1.5 years.`,
    skills: getSkills(
      "DevOps",
      "Unity",
      "C#",
      "Android",
      "iOS",
      "Analytics",
      "Publishing",
    ),
    institutions: getInstitutions("Age of Learning"),
    iconSrc: abcmouseIcon,
    details: abcMouse,
    impact: 90,
  }),
  new Project({
    title: "Clawface",
    year: 2018,
    month: 5,
    category: getCategory("Game Dev"),
    focus: "Featured",
    imageSrc: "clawface/clawface-cover.webp",
    gifSrc: "clawface/clawface-bullethell-compressed.mp4",
    description: `Clawface is an indie, twin-stick, arcade-style bullet hell shooter published to Steam with **"Very Positive" reviews** and **over 70,000 downloads.**
${_}
I served as the Lead Engineer for a team of 6 engineers in a 15-person game-development studio.`,
    skills: getSkills("Leadership", "DevOps", "Unity", "C#", "Publishing"),
    institutions: getInstitutions("Hathos Interactive"),
    iconSrc: clawfaceIcon,
    details: clawface,
    impact: 70,
  }),
  new Project({
    title: "NRH Control",
    year: 2023,
    month: 5,
    category: getCategory("Health Tech"),
    focus: "Archived",
    imageSrc: "nrh-control/nrh-control-ipad.webp",
    gifSrc: "nrh-control/nrh-trimmed.mp4",
    description: `NRH Control is a hospital smartroom controller for patients, family, and staff at the Craig H. Neilsen Rehabilitation Hospital at the University of Utah.
${_}
I served as the UI/UX Coordinator for 2 years.`,
    skills: getSkills("Leadership", "iOS", "Android", "HIPAA", "Publishing"),
    institutions: getInstitutions("UHealth"),
    iconSrc: nrhControlIcon,
    details: nrhControl,
    impact: 90,
  }),
  new Project({
    title: "AD with Sam",
    year: 2021,
    month: 6,
    category: getCategory("Health Tech"),
    focus: "Archived",
    imageSrc: "ad-with-sam/adwithsam-cleaned.webp",
    gifSrc: "ad-with-sam/ad-lightning-vid1.mp4",
    description: `AD with Sam is a highly innovative augmented reality exhibit for people with spinal cord injury to learn about a life-threatening complication: Autonomic Dysreflexia.
${_}
I served as Lead Producer from start to finish.`,
    skills: getSkills("Leadership", "DevOps", "Bash", "Publishing"),
    institutions: getInstitutions("UHealth"),
    iconSrc: samIcon,
    details: adWithSam,
    impact: 80,
  }),
  new Project({
    title: "Bobby The Bladder",
    year: 2021,
    month: 10,
    category: getCategory("Health Game"),
    focus: "Archived",
    imageSrc: "bobby-the-bladder/sam-and-bobby-thumbnail.webp",
    gifSrc: "bobby-the-bladder/bobby-death.mp4",
    description: `Bobby the Bladder is an interactive, branching narrative game for people with spinal cord injury and their family to learn about bladder maintenance.
${_}
I served as Lead Producer from start to finish.`,
    skills: getSkills("Leadership", "Publishing"),
    institutions: getInstitutions("UHealth"),
    iconSrc: bobbyIcon,
    details: bobbyTheBladder,
    impact: 79,
  }),
  new Project({
    title: "Derpy Dinos",
    year: 2017,
    month: 11,
    category: getCategory("Game Dev"),
    focus: "Archived",
    imageSrc: "derpy-dinos/derpy-capsule.webp",
    gifSrc: "derpy-dinos/derpy-dinos-slow-down.mp4",
    description: `Derpy Dinos is a 2.5D side-scrolling arcade shooter published to Steam with **Mostly Positive reviews** (7/10) and **49,000+ downloads.**
${_}
I served as Lead Producer and Engineer through release.`,
    skills: getSkills("Leadership", "Unity", "C#", "Publishing"),
    institutions: [],
    iconSrc: derpyDinosIcon,
    details: derpyDinos,
    impact: 75,
  }),
  new Project({
    title: "MindKloud",
    year: 2024,
    month: 1,
    category: getCategory("Health Tech"),
    focus: "Archived",
    imageSrc: "mindkloud-journey/mk-journey-logo.webp",
    gifSrc: "",
    description: `MindKloud Journey is a mobile app for young adults to improve emotional self-awareness through journaling and colleges to facilitate a thriving social atmosphere.
${_}
I served as Head of Engineering for Health Tech Apps.`,
    skills: getSkills(
      "Leadership",
      "Python",
      "AWS",
      "Unity",
      "C#",
      "SQL",
      "Android",
      "iOS",
      "HIPAA",
      "Analytics",
      "Publishing",
    ),
    institutions: getInstitutions("Health Tech Apps"),
    iconSrc: mkJourneyIcon,
    details: mindkloud,
    impact: 50,
  }),
  new Project({
    title: "The Pocket Optimist",
    year: 2024,
    month: 10,
    category: getCategory("Health Tech"),
    focus: "Archived",
    imageSrc: "pocket-optimist/pessimistic-night2.webp",
    gifSrc: "pocket-optimist/all-animated.mp4",
    description: `The Pocket Optimist is a science-based, personal development service for athletes, working professionals, and parents to break through hidden mental barriers.
${_}
I serve as the Inventor, Developer, and Coach.`,
    skills: getSkills("Leadership", "Python"),
    institutions: getInstitutions("Digital Health"),
    iconSrc: pocketOptimistIcon,
    details: pocketOptimist,
    impact: 40,
  }),
  new Project({
    title: "Abductor",
    year: 2016,
    month: 10,
    category: getCategory("Game Dev"),
    focus: "Archived",
    imageSrc: "abductor/abductor.webp",
    gifSrc: "abductor/abductor4.mp4",
    description: `Offender is a 2D Arcade Style Shooter with a looping arena filled with endless carnage and destruction, published as a web game.
${_}
I served as the Lead Engineer and Production Co-Lead.`,
    skills: getSkills("Leadership", "HTML", "JS", "Publishing"),
    institutions: [],
    iconSrc: bobIcon,
    details: abductor,
    impact: 30,
  }),
  new Project({
    title: "Talking Points",
    year: 2016,
    month: 10.5,
    category: getCategory("Health Game"),
    focus: "Archived",
    imageSrc: "talking-points/talking-points-cover.webp",
    gifSrc: "talking-points/talking-points-loop.mp4",
    description: `Talking Points is like Guitar Hero for speech; it's a rhythm-based game that helps children with dyslexia learn word pronunciation and reading comprehension.
${_}
I served as the Lead Engineer during prototyping.`,
    skills: getSkills("Leadership", "C#", "Unity"),
    institutions: [],
    iconSrc: talkingPointsIcon,
    details: talkingPoints,
    impact: 20,
  }),
  new Project({
    title: "Debug",
    year: 2016,
    month: 9,
    category: getCategory("Game Dev"),
    focus: "Archived",
    imageSrc: "debug/debug-cover.webp",
    gifSrc: "debug/debug-loop.mp4",
    description: `Debug is an arcade, wave-based survival game. Bugs approach faster and faster from ALL angles threatening to destroy your ship.
${_}
I served as the Lead Engineer and Production Co-Lead.`,
    skills: getSkills("Leadership", "C#", "Publishing"),
    institutions: [],
    iconSrc: debugIcon,
    details: debug,
    impact: 15,
  }),
  new Project({
    title: "Fruit Buddi",
    year: 2013,
    month: 8,
    category: getCategory("Health Game"),
    focus: "Archived",
    imageSrc: "fruit-buddi/fruitmoney.jpg",
    gifSrc: "fruit-buddi/fruit-buddi-action.mp4",
    description: `Fruit Buddi is a simple, analog matching game for parents to engage their kids with healthy food choices on shopping carts.
${_}
I served as a Co-Inventor and Designer for this product.`,
    skills: [],
    institutions: getInstitutions("Design for America"),
    iconSrc: fruitBuddiIcon,
    details: fruitBuddi,
    impact: 14,
  }),
  new Project({
    title: "Smart Chart",
    year: 2025,
    month: 1,
    category: getCategory("Health Tech"),
    focus: "Archived",
    imageSrc: "smart-chart/digital-health-wide.webp",
    gifSrc: "",
    description: `Smart Chart is an AI-powered, HIPAA-compliant patient management web service for small clinics to reduce administrative work.
${_}
I serve as the Founder and Developer of the service.`,
    skills: getSkills(
      "Leadership",
      "GCP",
      "Python",
      "React",
      "JS",
      "HTML",
      "CSS",
      "Bash",
      "HIPAA",
    ),
    institutions: getInstitutions("Digital Health"),
    iconSrc: smartChartIcon,
    details: smartChart,
    impact: 30,
  }),
  new Project({
    title: "This Portfolio",
    year: 2025,
    month: 3,
    category: undefined,
    focus: "Archived",
    imageSrc: "this-portfolio/brandon-wide.webp",
    gifSrc: "",
    description: `This portfolio was custom built with React, designed for use on desktop and mobile web browsers, and the traffic analyzed using Plausible to protect your ad-exposure.
${_}
I designed, built, and tested it in ~2.5 months.`,
    skills: getSkills(
      "Leadership",
      "GCP",
      "AWS",
      "DevOps",
      "Python",
      "React",
      "JS",
      "HTML",
      "CSS",
      "Bash",
      "iOS",
      "Android",
      "Analytics",
      "Publishing",
    ),
    institutions: [],
    iconSrc: brmIcon,
    details: thisPortfolio,
    impact: 5,
  }),
];

SkillData.getProjects = getProjectsBySkill;

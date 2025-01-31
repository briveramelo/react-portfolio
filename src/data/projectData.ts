import joshTilt from "@/assets/projects/josh-tilt.webp";
import abcmouse from "@/assets/projects/abcmouse.webp";
import clawface from "@/assets/projects/clawface.jpg";
import { getSkills, SkillData } from "./skillsData";
import { Employer, getEmployers } from "./employerData";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  color: string; // Background color for category
  textColor: string; // Text color for category
  skills: SkillData[];
  employers: Employer[];
}

export const projectData: Project[] = [
  {
    title: "Tilt Tracker",
    category: "Health Tech",
    description: `Tilt Tracker is **like FitBit for power wheelchair users**; it **prevents pressure ulcers** with real-time reminders for patients and compliance reports for family and clinical care teams.

I developed the **full-stack, HIPAA-compliant** system, piloted with 11 patients, and co-authored studies that highlight its life-changing impact.
`,
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
  },
  {
    title: "ABCmouse",
    category: "Game Dev",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, where over **18 million students** have completed more than **4 billion educational activities**, earning the trust of families worldwide.

I contributed to 27 updates for the ABCmouse app, **improving load times by 50%**, adding features like Mastering Math, and **integrating A/B test tools** for user insights.
I also upgraded the app's infrastructure to meet new platform requirements and ensure future compatibility.`,
    image: abcmouse,
    link: "#",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
    employers: getEmployers("Age of Learning"),
  },
  {
    title: "Clawface",
    category: "Game Dev",
    description: `Clawface is a published video game on Steam, made with an indie studio. We received **Very Positive reviews** and **45,000+ downloads.**

I architected the codebase, **led the engineering team** of 6, and contributed to nearly every aspect of the final engineering product, including AI state machines, combat mechanics, UI design, and the Steam-Workshop-connected level editor.`,
    image: clawface,
    link: "https://store.steampowered.com/app/785130/Clawface/",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
    employers: getEmployers("Hathos Interactive"),
  },
];

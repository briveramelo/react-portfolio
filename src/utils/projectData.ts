import joshTilt2 from "@/assets/projects/josh-tilt-2.jpg";
import abcmouse from "@/assets/projects/abcmouse.jpg";
import clawface from "@/assets/projects/clawface.jpg";
import { getSkills, SkillData } from "./skillsData";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  color: string; // Background color for category
  textColor: string; // Text color for category
  skills: SkillData[];
}

export const projectData: Project[] = [
  {
    title: "Tilt Tracker",
    category: "Health Tech",
    description: `Tilt Tracker is an IoT solution for power wheelchair users that **prevents pressure ulcers** through real-time monitoring.

I developed the **full-stack, HIPAA-compliant** system in collaboration with patients, doctors, and researchers at the University of Utah, co-authoring multiple published studies.
`,
    image: joshTilt2,
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
  },
  {
    title: "ABCmouse",
    category: "Game Dev",
    description: `ABCmouse is the **#1 learning app** for children ages 2–8, loved by kids and parents across the world.

I contributed to 27 updates for the ABCmouse app, **improving load times by 50%**, adding features like Mastering Math, and integrating **A/B test tools** for user insights.
I also upgraded the app's infrastructure to meet new platform requirements and ensure future compatibility.`,
    image: abcmouse,
    link: "#",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
  },
  {
    title: "Clawface",
    category: "Game Dev",
    description: `Clawface is a published video game on Steam, made with an indie studio. We received **Very Positive reviews and 35,000+ downloads.**

I led the engineering team of 6.`,
    image: clawface,
    link: "https://store.steampowered.com/app/785130/Clawface/",
    color: "#1e88e5",
    textColor: "#ffffff",
    skills: getSkills("Unity", "C#"),
  },
];

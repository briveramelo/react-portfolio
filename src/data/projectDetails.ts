import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import joshTilt from "@/assets/projects/josh-tilt.webp";
import abcmouse from "@/assets/projects/abcmouse.jpg";
import clawface from "@/assets/projects/clawface.jpg";

export type ProjectDetail = {
  title: string;
  description: string;
  story: {
    title: string;
    content: string;
    imageIndices: number[]; // Indices of images related to this story section
  }[];
  images: {
    src: string;
    alt: string;
  }[];
  skills: SkillData[] | null;
  github: string;
  liveDemo: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    title: "Tilt Tracker",
    description:
      "A revolutionary approach to pressure ulcer prevention, Tilt Tracker is like FitBit for power wheelchair users.",
    story: [
      {
        title: "Content",
        content: "",
        imageIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        imageIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        imageIndices: [2],
      },
      // {
      //   title: "Inception",
      //   content:
      //     "Dr. Jeffrey Rosenbluth directs Spinal Cord Injury treatment at the University of Utah. He wonders: how can we prevent patients from stagnating after injury?",
      // },
      // {
      //   title: "Development",
      //   content:
      //     "He contracted a graduate team to remotely monitor and encourage patient compliance with preventive behaviors like wheelchair 'Tilt.' I developed the full stack technology as a graduate student and continued research and development as a full time employee.",
      // },
      // {
      //   title: "Deployment",
      //   content:
      //     "Although we were denied SBIR grant funding to mass produce the technology, we piloted the system with 11 patients, received rave reviews from patients and clinicians, and published several research articles on our work. The technology is currently dormant.",
      // },
    ],
    images: [
      {
        src: joshTilt,
        alt: "",
      },
      {
        src: abcmouse,
        alt: "",
      },
      {
        src: clawface,
        alt: "",
      },
    ],
    skills:
      projectData.find((elm) => elm.title === "Tilt Tracker")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
  {
    title: "ABCmouse",
    description:
      "ABCmouse is a digital education program for children ages 2–8 with over 18M users",
    story: [
      {
        title: "Content",
        content: "",
        imageIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        imageIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        imageIndices: [2],
      },
    ],
    images: [
      {
        src: abcmouse,
        alt: "",
      },
      {
        src: joshTilt,
        alt: "",
      },
      {
        src: clawface,
        alt: "",
      },
    ],
    skills: projectData.find((elm) => elm.title === "ABCmouse")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
  {
    title: "Clawface",
    description:
      "Clawface is a twin-stick, arcade-style shooter published to Steam",
    story: [
      {
        title: "Content",
        content: "",
        imageIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        imageIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        imageIndices: [2],
      },
    ],
    images: [
      {
        src: clawface,
        alt: "",
      },
      {
        src: abcmouse,
        alt: "",
      },
      {
        src: joshTilt,
        alt: "",
      },
    ],
    skills: projectData.find((elm) => elm.title === "Clawface")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
];

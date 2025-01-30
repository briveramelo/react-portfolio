import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import joshTilt from "@/assets/projects/josh-tilt.webp";
import abcmouse from "@/assets/projects/abcmouse.webp";
import clawface from "@/assets/projects/clawface.jpg";
import { MediaItem } from "./media.ts";

export type ProjectDetail = {
  title: string;
  description: string;
  story: {
    title: string;
    content: string;
    mediaIndices: number[]; // Indices of media related to this story section
  }[];
  media: MediaItem[]; // src = https://www.youtube.com/embed/{videoId} for type youtube
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
        mediaIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        mediaIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        mediaIndices: [2],
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
    media: [
      {
        src: joshTilt,
        alt: "",
        type: "image",
      },
      {
        src: "tilt-tracker/armrest-led.webp",
        alt: "LED",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/headrest-vibration-motor.webp",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/interactive-graph-compressed.gif",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/notification-settings.webp",
        alt: "notification settings",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
      },
      {
        src: "tilt-tracker/seat-tilt-sensor.webp",
        alt: "wheelchair angle sensor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/stages-of-ulcer.webp",
        alt: "stages of ulcer",
        type: "firebaseImage",
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
        mediaIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        mediaIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        mediaIndices: [2],
      },
    ],
    media: [
      {
        src: abcmouse,
        alt: "",
        type: "image",
      },
      {
        src: joshTilt,
        alt: "",
        type: "image",
      },
      {
        src: clawface,
        alt: "",
        type: "image",
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
        mediaIndices: [0],
      },
      {
        title: "Coming",
        content: "",
        mediaIndices: [1],
      },
      {
        title: "Soon",
        content: "",
        mediaIndices: [2],
      },
    ],
    media: [
      {
        src: clawface,
        alt: "",
        type: "image",
      },
      {
        src: abcmouse,
        alt: "",
        type: "image",
      },
      {
        src: joshTilt,
        alt: "",
        type: "image",
      },
    ],
    skills: projectData.find((elm) => elm.title === "Clawface")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
];

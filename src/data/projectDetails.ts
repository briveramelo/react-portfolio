import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import joshTilt from "@/assets/projects/josh-tilt-cropped.webp";
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
      "Tilt Tracker is like FitBit for power wheelchair users and a revolutionary approach to pressure ulcer prevention.",
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
        src: "tilt-tracker/stages-of-ulcer.webp",
        text: `Sitting in the same position for too long can cause a pressure wound.`,
        alt: "stages of ulcer",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/nrh-patient-in-bed.webp",
        text: `Pressure wounds are life-threatening, debilitating, costly, and time-consuming.`,
        alt: "patient in hospital bed",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/seat-tilt-sensor.webp",
        text: "Doing regular pressure reliefs by tilting back in the chair is the best prevention.",
        alt: "wheelchair angle sensor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/armrest-led.webp",
        text: "Tilting your seat and reclining your backrest every 20-30 minutes is easy to forget.",
        alt: "LED",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/headrest-vibration-motor.webp",
        text: "Tilt Tracker's electronic hardware measures compliance and provides friendly reminders.",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/notifications.webp",
        text: "You can pick SMS or email for reports, and audio, vibration, LED, or SMS for reminders. ",
        alt: "notification settings",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/notification-settings.webp",
        text: "Watching a movie? Reminders can be disabled.",
        alt: "notification settings",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/interaction-diagram.webp",
        text: "Care teams rely on fuzzy memories of compliance. Tilt Tracker reports create transparency.",
        alt: "notification settings",
        type: "firebaseImage",
        scaleFactor: 1.35,
      },
      {
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
      },
      {
        src: "tilt-tracker/tilt-recline-heatmap.webp",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/interactive-graph-compressed.gif",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/pressure-relief-detection-model.webp",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/occupancy-detection-model.webp",
        alt: "vibration motor",
        type: "firebaseImage",
      },
      {
        src: "tilt-tracker/logo.svg",
        alt: "",
        type: "firebaseImage",
      },
      {
        src: joshTilt,
        alt: "",
        type: "image",
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

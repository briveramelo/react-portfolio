import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import joshTilt from "@/assets/projects/josh-tilt-cropped.webp";
import abcmouse from "@/assets/projects/abcmouse.webp";
import clawface from "@/assets/projects/clawface.jpg";

export interface MediaItem {
  sectionTitle?: string;
  src: string; // eg: https://www.youtube.com/embed/{videoId} for type youtube
  alt: string;
  type: "firebaseImage" | "image" | "firebasePdf" | "pdf" | "youtube"; // New type field
  text?: string;
}

export type ProjectDetail = {
  title: string;
  description: string;
  media: MediaItem[];
  skills: SkillData[] | null;
  github: string;
  liveDemo: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    title: "Tilt Tracker",
    description:
      "Tilt Tracker is like FitBit for power wheelchair users and a revolutionary approach to pressure ulcer prevention.",
    media: [
      {
        sectionTitle: "Problem",
        src: "tilt-tracker/stages-of-ulcer.webp",
        alt: "stages of ulcer",
        type: "firebaseImage",
        text: `For people in power wheelchairs, sitting in the same position for too long can cause a pressure wound.`,
      },
      {
        src: "tilt-tracker/nrh-patient-in-bed.webp",
        alt: "patient in hospital bed",
        type: "firebaseImage",
        text: `Pressure wounds are life-threatening, debilitating, costly, and time-consuming.`,
      },
      {
        src: "tilt-tracker/happy-pr-cropped.webp",
        alt: "tilt tracker logo",
        type: "firebaseImage",
        text: "Doing regular pressure reliefs by tilting the chair back is the best prevention.",
      },
      {
        src: joshTilt,
        alt: "man in chair looking out window",
        type: "image",
        text: "But, tilting your chair every 20-30 minutes is easy to forget.",
      },
      {
        sectionTitle: "Solution",
        src: "tilt-tracker/seat-tilt-sensor.webp",
        alt: "wheelchair angle sensor",
        type: "firebaseImage",
        text: "Tilt Tracker's electronic hardware measures compliance with an inexpensive accelerometer...",
      },
      {
        src: "tilt-tracker/power.webp",
        alt: "wheelchair power and occupancy sensor",
        type: "firebaseImage",
        text: "...and a paper-thin seat occupancy sensor.",
      },
      {
        src: "tilt-tracker/power.webp",
        alt: "wheelchair power and occupancy sensor",
        type: "firebaseImage",
        text: "The device draws power from the power chair's onboard USB adapter.",
      },
      {
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
        text: "Completing a Pressure Relief (PR) is like closing a fitness ring on an Apple Watch - it tracks adherence to personalized mobility goals. PRs form the foundation of Relief Reports, which provide transparency on how often and effectively users meet their agreed-upon goals. These reports help power wheelchair users, care teams, and families monitor compliance and anticipate potential risks.",
      },
      {
        src: "tilt-tracker/tilt-reporting.webp",
        alt: "notification settings",
        type: "firebaseImage",
        text: "Users, family, and care team members can subscribe to regular reporting via SMS or email with their choice of frequency.",
      },
      {
        src: "tilt-tracker/tilt-pcb-kit.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs (case, battery, and power cable not depicted).",
      },
      {
        src: "tilt-tracker/on-chair-diagram.webp",
        alt: "on chair diagram",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs (case, battery, and power cable not depicted).",
      },
      {
        src: "tilt-tracker/device-cables.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "It provides tilt reminders in many ways, including fun audio ditties...",
      },
      {
        src: "tilt-tracker/headrest-vibration-motor.webp",
        alt: "vibration motor",
        type: "firebaseImage",
        text: "... a subtle vibration motor ...",
      },
      {
        src: "tilt-tracker/armrest-led.webp",
        alt: "armrest LED",
        type: "firebaseImage",
        text: "... and a blinking LED.",
      },
      {
        src: "tilt-tracker/notification-settings.webp",
        alt: "notification settings",
        type: "firebaseImage",
        text: "Watching a movie? Reminders can be disabled from the web portal or a button press on the device.",
      },
      {
        src: "tilt-tracker/interaction-diagram.webp",
        alt: "Tilt Tracker system diagram",
        type: "firebaseImage",
        text: "Altogether, the Tilt Tracker system creates a cycle of positive reinforcement that improves pressure relief compliance and prevents pressure ulcers.",
      },
      {
        sectionTitle: "Technology",
        src: "tilt-tracker/tilt-recline-heatmap.webp",
        alt: "tilt and recline relieve pressure",
        type: "firebaseImage",
        text: "Test",
      },
      {
        src: "tilt-tracker/interactive-graph-compressed.gif",
        alt: "interactive graph animated",
        type: "firebaseImage",
        text: "Test",
      },
      {
        src: "tilt-tracker/pressure-relief-detection-model.webp",
        alt: "pressure relief detection model",
        type: "firebaseImage",
        text: "Test",
      },
      {
        src: "tilt-tracker/occupancy-detection-model.webp",
        alt: "occupancy detection model",
        type: "firebaseImage",
        text: "Test",
      },
      {
        src: "tilt-tracker/logo.svg",
        alt: "tilt tracker logo",
        type: "firebaseImage",
        text: "Tilt Tracker: where rehab is a relief.",
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
    media: [
      {
        sectionTitle: "Technology",
        src: abcmouse,
        alt: "",
        type: "image",
        text: "Test",
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
    media: [
      {
        sectionTitle: "Technology",
        src: clawface,
        alt: "",
        type: "image",
        text: "Test",
      },
    ],
    skills: projectData.find((elm) => elm.title === "Clawface")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
];

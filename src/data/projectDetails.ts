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
        src: "tilt-tracker/tilt-tracker-system-diagram.svg",
        alt: "Tilt Tracker system diagram",
        type: "firebaseImage",
        text: "Tilt Tracker is a system that creates a cycle of positive reinforcement to improve pressure relief compliance and prevent pressure ulcers. It uses real-time feedback to motivate compliance and objective reporting to provide insight for clinical care.",
      },
      {
        src: "tilt-tracker/seat-tilt-sensor.webp",
        alt: "wheelchair angle sensor",
        type: "firebaseImage",
        text: "Tilt Tracker's electronic hardware measures compliance with an inexpensive accelerometer...",
      },
      {
        src: "tilt-tracker/power.webp",
        alt: "wheelchair power and occupancy sensor",
        type: "firebaseImage",
        text: "...and a paper-thin seat occupancy sensor fixed to the seat pan. The device also draws power from the power chair's onboard USB adapter (circled).",
      },
      {
        sectionTitle: "Data Visualization",
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
        text: "Completing a Pressure Relief (PR) with Tilt Tracker is like closing a fitness ring on an Apple Watch - it tracks adherence to personalized mobility goals. PRs form the foundation of Relief Reports, which provide transparency on how effectively users meet their agreed-upon goals. These reports help power wheelchair users, care teams, and families monitor compliance and anticipate potential risks.",
      },
      {
        src: "tilt-tracker/tilt-recline-heatmap.webp",
        alt: "tilt and recline relieve pressure",
        type: "firebaseImage",
        text: "Performing both a seat tilt and a backrest recline is key for providing effective pressure relief.",
      },
      {
        src: "tilt-tracker/interactive-graph-compressed.gif",
        alt: "interactive graph animated",
        type: "firebaseImage",
        text: "Researchers and clinicians can drill down into the details of a single PR for deep insights using an interactive web tool.",
      },
      {
        src: "tilt-tracker/pressure-relief-detection-model.webp",
        alt: "pressure relief detection model",
        type: "firebaseImage",
        text: "This works with a pressure relief detection algorithm using a raw stream of time-series angle data.",
      },
      {
        src: "tilt-tracker/occupancy-detection-model.webp",
        alt: "occupancy detection model",
        type: "firebaseImage",
        text: "A simplified variation of this model detects seat occupancy, which is critical for distinguishing non-compliance from chair absence.",
      },
      {
        src: "tilt-tracker/tilt-reporting.webp",
        alt: "notification settings",
        type: "firebaseImage",
        text: "Users, family, and care team members can subscribe to regular reporting via SMS or email with their choice of frequency.",
      },
      {
        sectionTitle: "Hardware and Reminders",
        src: "tilt-tracker/tilt-pcb-kit.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs (case, battery, and power cable not depicted).",
      },
      {
        src: "tilt-tracker/installation-cropped.webp",
        alt: "installation",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs.",
      },
      {
        src: "tilt-tracker/on-chair-diagram.webp",
        alt: "on chair diagram",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs.",
      },
      {
        src: "tilt-tracker/device-cables.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The device sends data to the cloud securely using MQTTS and in turn receives friendly reminders if no PR is detected, including fun audio ditties...",
      },
      {
        src: "tilt-tracker/headrest-vibration-motor.webp",
        alt: "vibration motor",
        type: "firebaseImage",
        text: "... subtle vibrations ...",
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
        text: "Watching a movie? Reminders can be disabled from the website or a button press on the device.",
      },
      {
        sectionTitle: "Contributions",
        src: "tilt-tracker/recolored-brandon-pose.webp",
        alt: "brandon posing with Tilt Tracker",
        type: "firebaseImage",
        text: "Tilt Tracker was initially prototyped at The GApp Lab using a Samsung phone and Unity App for data collection and jQuery, CSS, HTML, NodeJS, Java, and SQL for the rest by a team of 5 graduate students. When one team member left, I filled in writing the Java API and SQL queries.",
      },
      {
        src: "tilt-tracker/brandon-and-jeff.webp",
        alt: "interactive graph animated",
        type: "firebaseImage",
        text: "As the team downsized, I gradually took on the entire tech stack and client meetings. Dr. Jeffrey Rosenbluth M.D., project sponsor and Director of Spinal Cord Injury at the University of Utah, eventually hired me full time.",
      },
      //todo: add gource video
      {
        src: "tilt-tracker/ross-worktable.webp",
        alt: "Ross at his worktable",
        type: "firebaseImage",
        text: "Although I took on the full tech stack, including C++ firmware and remote updates during clinical trials, our electrical engineer Ross Imburgia developed the electronics.",
      },
      //todo: SBIR, funding mention
      {
        src: "tilt-tracker/ingenta-article.pdf",
        alt: "tilt tracker logo",
        type: "firebasePdf",
        text: "In 2018, we published a journal article to Technology and Innovation with the high level details of our approach.",
      },
      {
        src: "tilt-tracker/design-and-eval-article-working-copy.pdf",
        alt: "tilt tracker logo",
        type: "firebasePdf",
        text: 'In January 2025, another article was accepted for publication in IMWUT, a high-impact ACM journal on Interactive, Mobile, Wearable, and Ubiquitous Technologies. The paper received "very significant impact" scores from all reviewers. This is a working copy of the article, to be published soon.',
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

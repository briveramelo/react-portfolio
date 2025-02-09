import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import joshTilt from "@/assets/projects/josh-tilt-cropped.webp";
import abcmouse from "@/assets/projects/abcmouse.webp";
import clawface from "@/assets/projects/clawface.jpg";

export interface AudioButtonData {
  audioPath: string;
  // x and y can be defined as percentages (0 to 100) of the image width/height
  x: number;
  y: number;
}

export interface MediaItem {
  chapterTitle?: string;
  src: string; // eg: https://www.youtube-nocookie.com/embed/{videoId}?rel=0 for privacy-enhanced youtube links
  alt: string;
  type:
    | "firebaseImage"
    | "image"
    | "firebasePdf"
    | "pdf"
    | "youtube"
    | "quote"
    | "firebaseImageWithAudioButtons";
  text?: string;
  audioButtons?: AudioButtonData[];
}

export type ProjectDetail = {
  title: string;
  description: string;
  media: MediaItem[];
  skills: SkillData[] | null;
  github: string;
  liveDemo: string;
};

const dash = "&#45;";
const _ = "&nbsp;"; //whitespace character. When on its own line, produces a line break.

export const projectDetails: ProjectDetail[] = [
  {
    title: "Tilt Tracker",
    description:
      "Tilt Tracker is like FitBit for power wheelchair users and a revolutionary approach to pressure ulcer prevention.",
    media: [
      {
        chapterTitle: "Problem",
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
        chapterTitle: "Solution",
        src: "tilt-tracker/tilt-tracker-system-diagram.svg",
        alt: "Tilt Tracker system diagram",
        type: "firebaseImage",
        text: `Tilt Tracker is a system that creates a cycle of positive reinforcement to improve pressure relief compliance and prevent pressure ulcers.
${_}
It uses real-time feedback to motivate compliance and objective reporting to provide insight for clinical care.`,
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
        chapterTitle: "Data Viz and Reporting",
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
        text: "Completing a Pressure Relief (PR) with Tilt Tracker is like closing a fitness ring on an Apple Watch - it tracks adherence to personalized mobility goals. PRs form the foundation of Relief Reports, which provide transparency on how effectively users meet their agreed-upon goals. These reports help power wheelchair users, care teams, and families monitor compliance and anticipate potential risks.",
      },
      {
        src: "tilt-tracker/tilt-recline-heatmap.webp",
        alt: "tilt and recline relieve pressure",
        type: "firebaseImage",
        text: `Performing both a seat tilt and a backrest recline is key for providing effective pressure relief.
${_}
_Note: this is a one-off visual conducted in the lab and not available to Tilt Tracker users_`,
      },
      {
        src: "tilt-tracker/interactive-graph-compressed.gif",
        alt: "interactive graph animated",
        type: "firebaseImage",
        text: "Researchers and clinicians can drill down into the details of a single PR for deep insights using an interactive web tool on the Tilt Tracker website.",
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
        chapterTitle: "Hardware and Feedback",
        src: "tilt-tracker/installation-cropped.webp",
        alt: "installation",
        type: "firebaseImage",
        text: "The installation kit is compatible with all power wheelchairs.",
      },
      {
        src: "tilt-tracker/tilt-pcb-kit.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The installation kit includes a printed circuit board, case, battery, power cable, LTE antenna, seat accelerometer, seat occupancy sensor, LED, speaker, and vibration motor (case, battery, and power cable not depicted).",
      },
      {
        src: "tilt-tracker/on-chair-diagram.webp",
        alt: "on chair diagram",
        type: "firebaseImage",
        text: "The case exposes a control button for a few common, operational needs.",
      },
      {
        src: "tilt-tracker/device-cables.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The device attaches to the wheelchair backing, sends activity data to the cloud securely using MQTTS, and in turn receives friendly reminders if no pressure relief is detected.",
      },
      {
        src: "tilt-tracker/audio-goal-feedback-v1.webp",
        alt: "audio goal feedback",
        type: "firebaseImageWithAudioButtons",
        text: `These reminders come in various formats, including audio ...
${_}
_"The sound... I really liked the sound, it just makes it easier to remind me if conversations are going on."_
${dash} Tilt Tracker user.
${_}
This participant has my brother Nathan to thank for the audio design. Click to listen!`,
        audioButtons: [
          { audioPath: "tilt-tracker/interval.mp3", x: 75, y: 15 },
          { audioPath: "tilt-tracker/duration.mp3", x: 75, y: 39.5 },
          { audioPath: "tilt-tracker/tilt.mp3", x: 75, y: 64 },
          { audioPath: "tilt-tracker/recline.mp3", x: 75, y: 91 },
        ],
      },
      {
        src: "tilt-tracker/headrest-vibration-motor.webp",
        alt: "vibration motor",
        type: "firebaseImage",
        text: `... subtle vibrations ...
${_}
_"I could tell that it was like, notifying me. But it wasn’t like honking a horn or distracting somebody else. And consistently, I could feel it, versus either seeing it or hearing it. So the feel of the vibration was much more apparent."_
${dash} Tilt Tracker user.`,
      },
      {
        src: "tilt-tracker/armrest-led.webp",
        alt: "armrest LED",
        type: "firebaseImage",
        text: `... and a blinking LED.
${_}
_"I do not have my phone with me a lot. I do not wear a watch. Or I am not a high tech. If [Tilt Tracker] reminds me, that’s all I want."_
${dash} Tilt Tracker user.`,
      },
      {
        src: "tilt-tracker/notification-settings.webp",
        alt: "notification settings",
        type: "firebaseImage",
        text: `Watching a movie? Pressure relief reminders (Interval Feedback) can be disabled from the website or a button press on the device.
${_}
Users can also choose if they want fun beeps, buzzes, or flashes for the other key metrics of a proper PR, like if they've tilted for long enough (Duration), far enough (Tilt), or reclined far enough (Recline) too.`,
      },
      {
        chapterTitle: "Contributions",
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
      {
        src: "https://www.youtube-nocookie.com/embed/AgdABWQStZo?rel=0",
        alt: "gource video",
        type: "youtube",
        text: "Here is a gource visualization of all code additions, deletions, and modifications made in git source control over time (excluding the original sensor prototype). You will see a directory naming depth of just one, including each of the submodule repositories in use: API (Java, Spring, Maven), Web (NodeJS, jQuery, HTML, CSS), Sensor (C++, Particle IoT), Db (MariaDB, SQL), Mqtt (mosquitto), Data, CI/CD (GitLab .yml, Bash), Singularity (Bash), and Super.",
      },
      {
        src: "tilt-tracker/ross-worktable.webp",
        alt: "Ross at his worktable",
        type: "firebaseImage",
        text: "Although I took on the full tech stack, including C++ firmware and remote updates during clinical trials, our electrical engineer Ross Imburgia developed the electronics.",
      },
      {
        src: "tilt-tracker/ingenta-article.pdf",
        alt: "tilt tracker logo",
        type: "firebasePdf",
        text: "In 2018, we published a journal article to Technology and Innovation with the high level details of our approach.",
      },
      {
        src: "tilt-tracker/TiltTracker_MarketingPlan_Executive_Summary.pdf",
        alt: "tilt tracker marketing plan executive summary",
        type: "firebasePdf",
        text: "In 2021, I enlisted the support of my MBA classmates to write a marketing plan for bringing Tilt Tracker to market. The full plan is a 37-page document; this is just the executive summary.",
      },
      {
        src: "tilt-tracker/tilt-sbir-elevator-pitch.pdf",
        alt: "tilt tracker logo",
        type: "firebasePdf",
        text: "In 2022, we were invited to apply for SBIR (Small Business Innovation Research) funding, and we did. The full proposal is a 79-page pdf document with the full support of the Craig H. Neilsen Rehabilitation Hospital, a team of clinical staff, researchers, and business professionals. Like 90% of other applications, Tilt Tracker was denied an award. This is just the elevator pitch.",
      },
      {
        src: "tilt-tracker/design-and-eval-article-working-copy.pdf",
        alt: "tilt tracker logo",
        type: "firebasePdf",
        text: 'In January 2025, another article was accepted for publication in IMWUT, a high-impact ACM journal on Interactive, Mobile, Wearable, and Ubiquitous Technologies. The paper received "very significant impact" scores from all reviewers. We evaluated the feasibility of the aforementioned reminder and notification modalities to improve PR adherence and identified opportunities to facilitate reflection on personal data through data exploration.',
      },
      {
        src: `### "I think it would be **very beneficial to me to have this reminder** because in any situation, I would have the reminder to help me to go back to help **to not get pressures sores.**"
${dash} Tilt Tracker user`,
        alt: "quote",
        type: "quote",
        text: "Here, a clinical study participant expresses the value they see in Tilt Tracker.",
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
        chapterTitle: "Coming soon",
        src: abcmouse,
        alt: "",
        type: "image",
        text: "",
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
        chapterTitle: "Coming soon",
        src: clawface,
        alt: "",
        type: "image",
        text: "",
      },
    ],
    skills: projectData.find((elm) => elm.title === "Clawface")?.skills ?? null,
    github: "",
    liveDemo: "",
  },
];

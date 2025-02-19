import { SkillData } from "./skillsData";
import { projectData } from "./projectData.ts";
import SteamIcon from "@/assets/skills/steam.svg?react";
import AndroidIcon from "@/assets/skills/android.svg?react";
import AppleIcon from "@/assets/skills/apple.svg?react";
import React from "react";
import GitHub from "@mui/icons-material/GitHub";

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
    | "firebaseVideoAsGif"
    | "image"
    | "firebasePdf"
    | "pdf"
    | "youtube"
    | "quote"
    | "firebaseImageWithAudioButtons";
  text?: string;
  audioButtons?: AudioButtonData[];
  quoteWidth?: string;
}

export interface ProjectLink {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export type ProjectDetail = {
  title: string;
  description: string;
  media: MediaItem[];
  skills: SkillData[] | null;
  links: ProjectLink[];
};

const dash = "&#45;";
const _ = "&nbsp;"; //whitespace character. When on its own line, produces a line break.
const iconStyle = { width: 20, height: 20, color: "inherit" };
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
        text: `For people in power wheelchairs, sitting in the same position for too long can cause a **pressure ulcer.**`,
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
        text: "Doing regular **Pressure Reliefs (PRs)** by tilting the chair back is the best prevention.",
      },
      {
        src: "tilt-tracker/josh-tilt-cropped.webp",
        alt: "man in chair looking out window",
        type: "firebaseImage",
        text: "But, tilting your chair every 20-30 minutes is easy to forget.",
      },
      {
        chapterTitle: "Solution",
        src: "tilt-tracker/tilt-tracker-system-diagram.webp",
        alt: "Tilt Tracker system diagram",
        type: "firebaseImage",
        text: `Tilt Tracker is a system that creates a cycle of positive reinforcement to improve pressure relief compliance and **prevent pressure ulcers.**
${_}
It uses **real-time feedback** to motivate compliance and objective reporting to provide insight for clinical care.`,
      },
      {
        src: "tilt-tracker/tilt-pcb-kit.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "Tilt Tracker **reports** compliance and **prompts** behavior change with inexpensive electronics.",
      },
      {
        src: "tilt-tracker/installation-cropped.webp",
        alt: "installation",
        type: "firebaseImage",
        text: `It is compatible with **all** power wheelchairs.
${_}
These tenets of low-cost and maximum compatibility increase user access.`,
      },
      {
        src: "tilt-tracker/device-back-mounted-circled1.webp",
        alt: "device cables",
        type: "firebaseImage",
        text: "The device attaches to the wheelchair backing, sends activity data to the cloud, and delivers friendly reminders if no pressure relief is detected.",
      },
      {
        src: "tilt-tracker/seat-tilt-sensor.webp",
        alt: "wheelchair angle sensor",
        type: "firebaseImage",
        text: "The seat angle sensor attaches underneath the wheelchair seat...",
      },
      {
        src: "tilt-tracker/force-sensor.webp",
        alt: "wheelchair power and occupancy sensor",
        type: "firebaseImage",
        text: "...and a paper-thin seat occupancy sensor attaches below the seat cushion.",
      },
      {
        src: "tilt-tracker/on-chair-diagram.webp",
        alt: "on chair diagram",
        type: "firebaseImage",
        text: "The case exposes a control button for a few common, operational needs.",
      },
      {
        chapterTitle: "Reports",
        src: "tilt-tracker/sample-relief-report.pdf",
        alt: "pressure relief report",
        type: "firebasePdf",
        text: `Completing a Pressure Relief (PR) with Tilt Tracker is like closing a fitness ring on an Apple Watch - it tracks adherence to personalized mobility goals. PRs form the foundation of Relief Reports, which provide transparency on how effectively users meet their agreed-upon goals.
${_}
These reports help power wheelchair users, care teams, and families monitor compliance and anticipate potential risks.`,
      },
      {
        src: "tilt-tracker/tilt-recline-heatmap.webp",
        alt: "tilt and recline relieve pressure",
        type: "firebaseImage",
        text: `Performing both a seat tilt and a backrest recline is key for providing effective pressure relief.
${_}
_Note: this is a one-off visual conducted in the lab and not available to Tilt Tracker users._`,
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
        chapterTitle: "Prompts",
        src: "tilt-tracker/audio-goal-feedback-v1.webp",
        alt: "audio goal feedback",
        type: "firebaseImageWithAudioButtons",
        text: `These reminders come in various formats, including audio ...
${_}
_"The sound... I really liked the sound, it just makes it easier to remind me if conversations are going on."_
${dash} Tilt Tracker user
${_}
This participant has my brother Nathan to thank for the audio design. Click to listen!`,
        audioButtons: [
          { audioPath: "tilt-tracker/interval.mp3", x: 32, y: 14 },
          { audioPath: "tilt-tracker/tilt.mp3", x: 32, y: 39 },
          { audioPath: "tilt-tracker/recline.mp3", x: 32, y: 63 },
          { audioPath: "tilt-tracker/duration.mp3", x: 32, y: 90 },
        ],
      },
      {
        src: "tilt-tracker/vibration-motor.webp",
        alt: "vibration motor",
        type: "firebaseImage",
        text: `... subtle vibrations ...
${_}
_"I could tell that it was like, notifying me. But it wasn’t like honking a horn or distracting somebody else. And consistently, I could feel it, versus either seeing it or hearing it. So the feel of the vibration was much more apparent."_
${dash} Tilt Tracker user`,
      },
      {
        src: "tilt-tracker/armrest-led.webp",
        alt: "armrest LED",
        type: "firebaseImage",
        text: `... and a blinking LED.
${_}
_"I do not have my phone with me a lot. I do not wear a watch. Or I am not a high tech. If [Tilt Tracker] reminds me, that’s all I want."_
${dash} Tilt Tracker user`,
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
        text: "Tilt Tracker was initially prototyped at The GApp Lab using a Samsung phone and Unity App for data collection and jQuery, CSS, HTML, NodeJS, Java, and SQL by a team of 5 graduate students. When one team member left, I filled in writing the Java API and SQL queries.",
      },
      {
        src: "tilt-tracker/brandon-and-jeff.webp",
        alt: "interactive graph animated",
        type: "firebaseImage",
        text: "As the team downsized, I gradually took on the **entire tech stack and client meetings.** Dr. Jeffrey Rosenbluth M.D., project sponsor and Director of Spinal Cord Injury at the University of Utah, eventually hired me full time.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/AgdABWQStZo?rel=0&enablejsapi=1",
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
        text: "In 2018, we **published a journal article** to Technology and Innovation with the high level details of our approach.",
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
        text: 'In January 2025, another article was accepted for publication in IMWUT, a high-impact ACM journal on Interactive, Mobile, Wearable, and Ubiquitous Technologies. The paper received **"very significant impact" scores from all reviewers.** We evaluated the feasibility of the aforementioned reminder and notification modalities to improve PR adherence and identified opportunities to facilitate reflection on personal data through data exploration.',
      },
      {
        src: `### "I think it would be **very beneficial to me to have this reminder** because in any situation, I would have the reminder to help me to go back to help **to not get pressures sores.**"
${dash} Tilt Tracker user`,
        alt: "quote",
        type: "quote",
        text: "Here, a clinical study participant expresses the value they see in Tilt Tracker.",
        quoteWidth: "60%",
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
    links: [],
  },
  {
    title: "ABCmouse",
    description:
      "ABCmouse is a digital education program for children ages 2–8 with over 18M users",
    media: [
      {
        chapterTitle: "Videos",
        src: "https://www.youtube-nocookie.com/embed/WjwmbqacTlk?rel=0&enablejsapi=1",
        alt: "",
        type: "youtube",
        text: `ABCmouse is a digital education program for children ages 2–8, created by the edtech company Age of Learning, Inc. The program offers educational games, videos, puzzles, printables, and a library of regular and "read-aloud" children's books, covering subjects including reading and language arts, math, science, health, social studies, music, and art.`,
      },
      {
        src: "https://www.youtube-nocookie.com/embed/rbZCH6z8WWs?rel=0&enablejsapi=1",
        alt: "Kids video",
        type: "youtube",
        text: "Kids think ABCmouse is fun, so learning happens naturally.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/Gdz6R6vw6zw?rel=0&enablejsapi=1",
        alt: "Teachers video",
        type: "youtube",
        text: "Teachers see improved test scores because of increased academic engagement.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/i4XfBcGuCfU?rel=0&enablejsapi=1",
        alt: "Parents",
        type: "youtube",
        text: "Parents can trust that all the content will provide the kids with learning.",
      },
      {
        chapterTitle: "Contributions",
        src: "abcmouse/devices.webp",
        alt: "Devices",
        type: "firebaseImage",
        text: `Supporting the iPad 2 as the primary device in libraries and schools across the world required heavy optimization. With only 512MB of RAM available, using around 300MB (roughly 60%) would trigger app crashes. A team of engineers and I identified an opportunity with Unity AssetBundles.
${_}
We redesigned the app internals to load and unload resources on demand using an in-house API and caching mechanism, while also addressing other memory leaks from static variables and lingering closures. In conjunction with the refactoring of performance-intensive C# reflection operations to use more performant alternatives, these changes reduced app startup times by 50%, eliminated app crashes on low-end devices, and expanded learning access to tens of thousands of children worldwide.`,
      },
      {
        src: "abcmouse/leanplum-dashboard-sample.webp",
        alt: "Leanplum Analytics",
        type: "firebaseImage",
        text: `I integrated Leanplum Analytics into ABCmouse mobile to ethically optimize student engagement. This allows the team - to this day - to easily conduct A/B testing with thousands of users per test group and confidently deploy changes with higher engagement to hundreds of thousands of active users.        
${_}
_The picture featured here is a sample Leanplum dashboard and does not represent actual ABCmouse mobile usage data_`,
      },
      {
        src: "abcmouse/mastering-math-counting.mp4",
        alt: "Mastering Math",
        type: "firebaseVideoAsGif",
        text: `I integrated essential features like Mastering Math - a standalone app built by another team at Age of Learning - seamlessly into ABCmouse Mobile through close cross-team collaboration.`,
      },
      {
        src: "abcmouse/64bit-requirement.webp",
        alt: "",
        type: "firebaseImage",
        text: `I also upgraded the app's infrastructure to support Android's 64-bit upgrade requirements and ensure future compatibility. This involved careful review of all media assets and external plugins, updating those where necessary.`,
      },
      {
        src: "abcmouse/AgeOfLearning-AllContributions-Redacted.pdf",
        alt: "",
        type: "firebasePdf",
        text: `I kept a log of nearly all of the contributions I made during my tenure at Age of Learning - a sort of receipt for the engineering leadership team during performance reviews. Some specifics have been removed to maintain ethical adherence to the employee agreement non-disclosure requirements.
${_}
The management team was impressed by my initiative in assisting a QA automation teammate to streamline our testing process. I developed a recording tool to capture the names of interactive elements, which are essential for writing reliable, programmatic system tests for the ABCmouse mobile app. One colleague estimated it saved him a day's worth of work for every test he needed to write.`,
      },
      {
        src: "abcmouse/brandon-and-adam.webp",
        alt: "",
        type: "firebaseImage",
        text: `Over the course of 17 months, I contributed to 27 app updates for both iOS and Android, received a promotion, and was told my pay raise was the highest of all staff in my position.
${_}
_This was my first day in the office with friend and colleague, Adam Kay._`,
      },
    ],
    skills: projectData.find((elm) => elm.title === "ABCmouse")?.skills ?? null,
    links: [
      {
        href: "https://apps.apple.com/us/app/abcmouse-reading-math-games/id586328581",
        text: "App Store",
        icon: <AppleIcon style={iconStyle} />,
      },
      {
        text: "Play Store",
        href: "https://play.google.com/store/apps/details?id=mobi.abcmouse.academy_goo&hl=en_US&pli=1",
        icon: <AndroidIcon style={iconStyle} />,
      },
    ],
  },
  {
    title: "Clawface",
    description: `Clawface is a twin-stick, arcade-style retro shooter published to Steam in 2018, rated 9/10 with "Very Positive" reviews and over 70,000 downloads`,
    media: [
      {
        chapterTitle: "Videos",
        src: "https://www.youtube-nocookie.com/embed/Qy-SYG2P4SA?rel=0&enablejsapi=1",
        alt: "Trailer",
        type: "youtube",
        text: `Clawface is a twin-stick, arcade-style, bullet-hell shooter published to Steam in 2018, rated 9/10 with "Very Positive" reviews and over 70,000 downloads. The game comes with Steam Achievements, Steam Workshop (for a built-in level editor whose levels you can share), Steam Leaderboards, 11 enemies, 6 weapons, and a killer soundtrack that adapts to the in-game difficulty.`,
      },
      {
        src: "https://www.youtube-nocookie.com/embed/A41UPDj2UNg?rel=0&enablejsapi=1",
        alt: "Retrospective",
        type: "youtube",
        text: `We scoped development to finish in time for GDC (the Game Developer's Conference) hosted in March and used the remaining two months of our program to patch bugs and respond to player feedback. One of my primary responsibilities was to ensure we had a playable build at least every two weeks for progress check-ins, a goal I can proudly say our team accomplished.
${_}
_This video shows progress along that development pathway._`,
      },
      {
        src: "https://www.youtube-nocookie.com/embed/1kNYnjChNVM?rel=0&enablejsapi=1",
        alt: "Level Editor",
        type: "youtube",
        text: `I provided critical hands-on development for our Level Editor, where players can explore their creative side by designing the environment and challenges they will face. Players can share these levels with peers in the online community through the Steam Workshop and play the designs made by others.
${_}
_This was created in close collaboration with Garin Richards and Chuan Chin Lai._`,
      },
      {
        chapterTitle: "Contributions",
        src: "clawface/Clawface-Scripting-Architecture.pdf",
        alt: "Scripting Architecture Diagram",
        type: "firebasePdf",
        text: `I led our engineering team of 6 using sprint ceremonies, architecture diagrams, one-on-ones, coding standards, and source control standards (which required careful collaboration with our art teams).
${_}
_Shown here is the once-living scripting architecture diagram used to literally get engineers on the same page during team meetings._`,
      },
      {
        src: "clawface/prefabs-diagram.pdf",
        alt: "Prefabs Architecture Diagram",
        type: "firebasePdf",
        text: `Here is a simpler 'Prefab' architecture diagram used to communicate an interoperable structure of GameObjects in Unity during our prototyping period.`,
      },
      {
        src: "clawface/team.webp",
        alt: "Team Photo",
        type: "firebaseImage",
        text: "This game was developed over the course of 1.5 years as our Master's Thesis at The University of Utah. We formed an independent company - Hathos Interactive - for distribution and publishing, of which I was a founding member.",
      },
      {
        src: `### "**Fun** twin-stick shooter, with old time Robotron controls. I was about to write that it might be **worth getting for a couple bucks**, but then I saw it didn't cost anything. So check out this fun little game. It even comes with a nice techno-industrial soundtrack and a level editor. Nice enemy animations, too. Worked well on ubuntu linux and no controller issues. **Hope this developer continues making games like this one.**
${_}
### Update: came back two years later and got the one game achievement. **Claw Face. The gameplay holds up.**"
${dash} tuxdelux
697 reviews`,
        alt: "Positive Review",
        type: "quote",
        text: "The reviews are really quite uplifting",
        quoteWidth: "95%",
      },
      {
        src: "clawface/clawface-poster-2.webp",
        alt: "Game Poster",
        type: "firebaseImage",
        text: "Made by Aaron Desin, Adam Kay, Bharat Gudihal, Bolun Gao, Brandon Rivera-Melo, Nathan Rivera-Melo, Cornelia Schultz, Cherlin Mao, Chuan-Chin Lai, Garin Richards, I-Shun Lo, Jaxon Whittaker, Josh Beedle, Josh Levenson, Lauren Mee, and Tri Nguyen",
      },
    ],
    skills: projectData.find((elm) => elm.title === "Clawface")?.skills ?? null,
    links: [
      {
        text: "Steam",
        href: "https://store.steampowered.com/app/785130/Clawface/",
        icon: <SteamIcon style={iconStyle} />,
      },
      {
        text: "Github",
        href: "https://github.com/briveramelo/Clawface",
        icon: <GitHub style={iconStyle} />,
      },
    ],
  },
  {
    title: "Derpy Dinos",
    description: `Derpy Dinos is a 2.5D side-scrolling arcade shooter. Smash, throw, and blast derpy dinosaurs. The more carnage you produce, the more points you earn for a spot on the global leaderboards. Protect your ship, collect power-ups, and earn achievements by completing challenging feats.`,
    media: [
      {
        chapterTitle: "Videos",
        src: "https://www.youtube-nocookie.com/embed/Vkb5LeRYDzk?rel=0&enablejsapi=1",
        alt: "Trailer",
        type: "youtube",
        text: `Derpy Dinos is a 2.5D side-scrolling arcade shooter. Smash, throw, and blast derpy dinosaurs. The more carnage you produce, the more points you earn for a spot on the global leaderboards. Protect your ship, collect power-ups, and earn achievements by completing challenging feats.`,
      },
      {
        src: "derpy-dinos/DerpyDinos-Achievements.webp",
        alt: "Trailer",
        type: "firebaseImage",
        text: `We built in 25 achievements for accomplishment-motivated gamers to explore the depth of this simple arcade game.`,
      },
      {
        src: `### "Great arcade game, overall just a good pick up and play game and **a bit addicting.**
${_}
### Achievements are also tracked well, **some of the best handled achievements** in terms of updating the player on their progress. This game would work well in any arcade, works great on a stick too."
${dash} #FIN Suojeluskunta
23 reviews`,
        alt: "Positive Review",
        type: "quote",
        text: `The virtual crowd goes wild.`,
        quoteWidth: "60%",
      },
    ],
    skills:
      projectData.find((elm) => elm.title === "Derpy Dinos")?.skills ?? null,
    links: [
      {
        text: "Steam",
        href: "https://store.steampowered.com/app/718500/Derpy_Dinos/",
        icon: <SteamIcon style={iconStyle} />,
      },
    ],
  },
];

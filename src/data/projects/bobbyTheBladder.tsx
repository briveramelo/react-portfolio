import GameJoltIcon from "@/assets/misc/gamejolt.svg?react";
import React from "react";
import { _, iconStyle, ProjectDetail } from "./projectDetails.tsx";

export const bobbyTheBladder = new ProjectDetail({
  title: "Bobby The Bladder",
  media: [
    {
      chapterTitle: "Development Process",
      src: "bobby-the-bladder/sam-choice.webp",
      alt: "players choices matter",
      type: "firebaseImage",
      text: `Bobby the Bladder is an interactive, branching narrative game for people with spinal cord injury and their family to learn about bladder maintenance.
${_}
This is currently installed on **all patient iPads** at the Craig H. Neilsen Rehabilitation Hospital.
${_}
Developed at the University of Utah Department of Physical Medicine and Rehabilitation, 2021.
`,
    },
    {
      src: "bobby-the-bladder/Bobby-ASCIP-poster.pdf",
      alt: "sharring the work professionally",
      type: "firebasePdf",
      text: `Bobby the Bladder also held a poster spot at an ASCIP (Academy of Spinal Cord Injury Professionals) conference to a room full of educators.`,
    },
    {
      src: "bobby-the-bladder/bobby-choice.webp",
      alt: "the game can be replayed",
      type: "firebaseImage",
      text: `Following completion of AD with Sam, our team identified several key goals for improvement:
1. Rapid development cycle
2. Artist-driven development
3. Widespread access`,
    },
    {
      src: "bobby-the-bladder/underwater.webp",
      alt: "bobby underwater",
      type: "firebaseImage",
      text: `A branching narrative game fit these requirements nicely, so we chose TyrannoBuilder as the engine - a tool built for exactly this purpose.`,
    },
    {
      src: "bobby-the-bladder/Bobby-The-Bladder-Storyboard.pdf",
      alt: "narrative pdf",
      type: "firebasePdf",
      text: `Storyboarding was our primary mode of pre-production planning, and this allowed quick iteration through narrative concepts.`,
    },
    {
      chapterTitle: "Contributions",
      src: "bobby-the-bladder/InGame-Narrative.pdf",
      alt: "narrative pdf",
      type: "firebasePdf",
      text: `Although the artist had primary development responsibility, I was responsible for organizing our meetings, scripting the narrative, publishing the game, and clinical integration.
${_}
Through a series of meetings, we hammered out the script details into this document.`,
    },
    {
      src: "bobby-the-bladder/patient-ipad.webp",
      alt: "",
      type: "firebaseImage",
      text: `Working with IT management, we installed Bobby The Bladder to the homepage of all patient iPads using JAMF for hospital-wide app management.`,
    },
    {
      chapterTitle: "Media",
      src: "bobby-the-bladder/bobby-faints.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/germs.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/medication.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/organ-discomfort.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/funeral.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      chapterTitle: "Credits",
      src: "bobby-the-bladder/sam-and-bobby.webp",
      alt: "",
      type: "firebaseImage",
      text: `Credits
Jessica Adamson (Artist, Game Developer)
Brandon Rivera-Melo (Project Manager)
Thomas Caiyas (Concept Artist, Therapist)
Lindsay Humphrey (Rehab Educator)
Danielle Houseman (Rehab Educator)
Dr. Jeffrey Rosenbluth (Project Sponsor, M.D.)`,
    },
  ],
  links: [
    {
      text: "GameJolt",
      href: "https://gamejolt.com/games/bobby-the-bladder/651307",
      icon: <GameJoltIcon style={iconStyle} />,
    },
  ],
});

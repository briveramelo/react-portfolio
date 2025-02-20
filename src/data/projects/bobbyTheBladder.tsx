import GameJoltIcon from "@/assets/misc/gamejolt.svg?react";
import React from "react";
import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";

export const bobbyTheBladder = new ProjectDetail({
  title: "Bobby The Bladder",
  media: [
    {
      chapterTitle: "Media",
      src: "bobby-the-bladder/sam-choice.webp",
      alt: "",
      type: "firebaseImage",
      text: `Bobby the Bladder is an interactive, branching narrative game for people with spinal cord injury and their family to learn about bladder maintenance.
${_}
This is currently installed on **all patient iPads** at the Craig H. Neilsen Rehabilitation Hospital.`,
    },
    {
      src: "bobby-the-bladder/bobby-choice.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/bobby-faints.webp",
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
      src: "bobby-the-bladder/sam-and-bobby.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
    },
    {
      src: "bobby-the-bladder/underwater.webp",
      alt: "",
      type: "firebaseImage",
      text: `${_}`,
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

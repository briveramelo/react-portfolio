import GameJoltIcon from "@/assets/misc/gamejolt.svg?react";
import React from "react";
import { _, iconStyle, ProjectDetail } from "./projectDetails.tsx";
import GitHub from "@mui/icons-material/GitHub";

export const talkingPoints = new ProjectDetail({
  title: "Talking Points",
  media: [
    {
      chapterTitle: "Talking Points",
      src: "https://www.youtube-nocookie.com/embed/MRbTkgp-M8s?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `Talking Points is like Guitar Hero for speech; it's a rhythm-based game that helps children with dyslexia learn word pronunciation and reading comprehension. Talking Points utilizes the Orton-Gillingham method, the gold standard for teaching children with dyslexia, and timed speech recognition to make learning engaging and self-directed.
- Utilizes IBM Watson for measured speech recognition
- Provides quantified feedback to the children so they can work toward mastery in identifying and pronouncing the phonemes they are struggling with
- Allows children to practice sounds before play

Made in the University of Utah Masters of Game Design Rapid Prototyping course 2016 with Tri Nguyen, Lauren Mee, Jean-Paul Peschard, Banning Day, Lalitha Gunda, Nathan Rivera-Melo, and Brandon Rivera-Melo.`,
    },
  ],
  links: [
    {
      text: "GameJolt",
      href: "https://gamejolt.com/games/talking-points/224480",
      icon: <GameJoltIcon style={iconStyle} />,
    },
    {
      text: "GitHub",
      href: "https://github.com/briveramelo/SeriousHealth",
      icon: <GitHub style={iconStyle} />,
    },
  ],
});

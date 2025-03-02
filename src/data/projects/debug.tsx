import GameJoltIcon from "@/assets/misc/gamejolt.svg?react";
import GitHub from "@mui/icons-material/GitHub";
import React from "react";
import { _, iconStyle, ProjectDetail } from "./projectDetails.tsx";

export const debug = new ProjectDetail({
  title: "Debug",
  media: [
    {
      chapterTitle: "Debug",
      src: "https://www.youtube-nocookie.com/embed/eoiWB8tm3iM?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `Debug is an arcade, wave-based survival game. Bugs approach faster and faster from ALL angles threatening to destroy your ship. Fire energy pulses and a last ditch MEGA LASER to destroy these bugs before they can destroy you. Can you blast these bugs away fast and accurate enough to survive?
${_}
I developed the core game logic for ship shields, rotation, and blasters. I also crafted the frequency of bug spawning, bug movement speed, scoring system, and local high score menu.
${_}
Debug was made together with Cade Johnson, Kensie Felix, Hardik Agarwal, Minal Kalkute, Akshay Yewale, and Brandon Rivera-Melo in the University of Utah Engineering Arts and Entertainment Rapid Prototyping course in 16 days using MonoGame, XNA, and C#.`,
    },
  ],
  links: [
    {
      text: "GameJolt",
      href: "https://gamejolt.com/games/debug/188485",
      icon: <GameJoltIcon style={iconStyle} />,
    },
    {
      text: "GitHub",
      href: "https://github.com/briveramelo/EAE-RP1-PaddleBall",
      icon: <GitHub style={iconStyle} />,
    },
  ],
});

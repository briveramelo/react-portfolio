import GameJoltIcon from "@/assets/misc/gamejolt.svg?react";
import GitHub from "@mui/icons-material/GitHub";
import React from "react";
import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";

export const abductor = new ProjectDetail({
  title: "Abductor",
  media: [
    {
      chapterTitle: "Abductor",
      src: "https://www.youtube-nocookie.com/embed/ZmLbGYhIXPE?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `Abductor is a 2D Arcade Style Shooter with a looping arena filled with endless carnage and destruction! Hurl unsuspecting humans into helicopters, tanks, and paratroopers as you invade Earth. How long can you survive?
${_}
I architected the project in Typescript using the Phaser library, implemented the AI for helicopters, paratroopers, and tanks, implemented the ship shields, blaster, and difficulty ramp for AI spawning.
${_}
Made in the University of Utah Masters of Game Design Rapid Prototyping course 2016 with Alanna Carroll, Sarah Cotner, Brandon Rivera-Melo, Ajay Satish, Andy Sain, and Joshua Levenson.
${_}
This is the precursor to Derpy Dinos and based off the 1981 classic arcade game: Defender`,
    },
  ],
  links: [
    {
      text: "Play In Browser",
      href: "https://www.dasritemedia.com/games/abductor/",
      icon: <GameJoltIcon style={iconStyle} />,
    },
    {
      text: "Github",
      href: "https://github.com/briveramelo/EAE-RP2-Defender",
      icon: <GitHub style={iconStyle} />,
    },
  ],
});

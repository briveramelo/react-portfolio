import SteamIcon from "@/assets/skills/steam.svg?react";
import GitHub from "@mui/icons-material/GitHub";
import React from "react";
import { _, dash, iconStyle, ProjectDetail } from "../projectDetails.tsx";

export const clawface = new ProjectDetail({
  title: "Clawface",
  media: [
    {
      chapterTitle: "Videos",
      src: "https://www.youtube-nocookie.com/embed/Qy-SYG2P4SA?rel=0&enablejsapi=1",
      alt: "Trailer",
      type: "youtube",
      text: `Clawface is a twin-stick, arcade-style, bullet-hell shooter published to Steam in 2018, rated 9/10 with "Very Positive" reviews and over 70,000 downloads. The game comes with Steam Achievements, a level editor (through Steam Workshop), Steam Leaderboards, 11 enemies, 6 weapons, and a killer soundtrack that adapts to the in-game difficulty.`,
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
      chapterTitle: "Contributions",
      src: "https://www.youtube-nocookie.com/embed/1kNYnjChNVM?rel=0&enablejsapi=1",
      alt: "Level Editor",
      type: "youtube",
      text: `I provided critical hands-on development for the Level Editor, where players can explore their creative side by designing the environment and challenges they will face. Players can share these levels with peers in the online community through the Steam Workshop and play the designs made by others.
${_}
_This was created in close collaboration with Garin Richards and Chuan-Chin Lai._`,
    },
    {
      src: "clawface/Clawface-Levels.webp",
      alt: "Clawface Levels",
      type: "firebaseImage",
      text: `Here are some of the player-made levels loaded in game.`,
    },
    {
      src: "clawface/brandon-schell-lenses.webp",
      alt: "Clawface Levels",
      type: "firebaseImage",
      text: `After reading Jesse Schell's The Art of Game Design: A Book of Lenses, I applied a standout lens to the Clawface game design: #69 The Interest Curve, which describes a narrative arc of intensity over time. It so cleanly captured what I find engaging in games that I developed a difficulty system to control the foe spawning to replicate this curve.
${_}
_After attending his GDC session, I told him of its influence on my games (Abductor, Derpy Dinos, and Clawface all use this). He said this lens was the impetus for writing the entire book._`,
    },
    {
      src: "clawface/prefabs-diagram.pdf",
      alt: "Prefabs Architecture Diagram",
      type: "firebasePdf",
      text: `Here is a simpler 'Prefab' architecture diagram used to communicate an interoperable structure of GameObjects in Unity during our prototyping period. We found great team attunement when communicating visually with quick whiteboard sketches, shown here.`,
    },
    {
      chapterTitle: "Team",
      src: "clawface/team.webp",
      alt: "Team Photo",
      type: "firebaseImage",
      text: "This game was developed over the course of 1.5 years as a Master's Thesis at The University of Utah. We formed an independent company - Hathos Interactive - for distribution and publishing, of which I was a founding member.",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/_RPYYtuWjW8?autoplay=1&mute=1&controls=0&loop=1&playlist=_RPYYtuWjW8&disablekb=1",
      alt: "Team Video",
      type: "youtube",
      text: "This game was developed over the course of 1.5 years as a Master's Thesis at The University of Utah. We formed an independent company - Hathos Interactive - for distribution and publishing, of which I was a founding member.",
      playAsGif: true,
    },
    {
      src: "clawface/clawface-poster-2.webp",
      alt: "Game Poster",
      type: "firebaseImage",
      text: "Made by Aaron Desin, Adam Kay, Bharat Gudihal, Bolun Gao, Brandon Rivera-Melo, Nathan Rivera-Melo, Cornelia Schultz, Cherlin Mao, Chuan-Chin Lai, Garin Richards, I-Shun Lo, Jaxon Whittaker, Josh Beedle, Josh Levenson, Lauren Mee, and Tri Nguyen",
    },
    {
      chapterTitle: "Reviews",
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
  ],
  links: [
    {
      text: "Steam",
      href: "https://store.steampowered.com/app/785130/Clawface/",
      icon: <SteamIcon style={iconStyle} />,
    },
    {
      text: "GitHub",
      href: "https://github.com/briveramelo/Clawface",
      icon: <GitHub style={iconStyle} />,
    },
  ],
});

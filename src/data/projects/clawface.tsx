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
      chapterTitle: "Team",
      src: "clawface/team.webp",
      alt: "Team Photo",
      type: "firebaseImage",
      text: "This game was developed over the course of 1.5 years as our Master's Thesis at The University of Utah. We formed an independent company - Hathos Interactive - for distribution and publishing, of which I was a founding member.",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/_RPYYtuWjW8?autoplay=1&mute=1&controls=0&loop=1&playlist=_RPYYtuWjW8&disablekb=1",
      alt: "Team Video",
      type: "youtube",
      text: "This game was developed over the course of 1.5 years as our Master's Thesis at The University of Utah. We formed an independent company - Hathos Interactive - for distribution and publishing, of which I was a founding member.",
      playAsGif: true,
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
});

import React from "react";
import { _, dash, iconStyle, ProjectDetail } from "./projectDetails.tsx";
import SteamIcon from "@/assets/skills/steam.svg?react";

export const derpyDinos = new ProjectDetail({
  title: "Derpy Dinos",
  media: [
    {
      chapterTitle: "Media",
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
      chapterTitle: "Reviews",
      src: `### "Great arcade game, overall just a good pick up and play game and **a bit addicting.**
${_}
### Achievements are also tracked well, **some of the best handled achievements** in terms of updating the player on their progress. This game would work well in any arcade, works great on a stick too."
${dash} #FIN Suojeluskunta
23 reviews`,
      alt: "Positive Review",
      type: "quote",
      text: `The virtual crowd goes wild.
${_}
Contributors:
- Brandon Rivera-Melo (Lead Producer, Lead Engineer)
- Joshua Levenson (Co-Producer, Lead Technical Artist)
- Andrew Liu (3D Animation)
- Cherlin Mao (Art)
- Aaron Desin (Music)
- Nathan Rivera-Melo (Sound Design, Trailer Music)

Special Thanks:
- Joshua Beedle
- Jimmy Kelly`,
      quoteWidth: "60%",
    },
  ],
  links: [
    {
      text: "Steam",
      href: "https://store.steampowered.com/app/718500/Derpy_Dinos/",
      icon: <SteamIcon style={iconStyle} />,
    },
  ],
});

import React from "react";
import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";
import GitHub from "@mui/icons-material/GitHub";

export const thisPortfolio = new ProjectDetail({
  title: "This Portfolio",
  media: [
    {
      chapterTitle: "This Portfolio",
      src: `### Look around.`,
      alt: "",
      type: "quote",
      text: `This portfolio was built with React designed for use on desktop and mobile web platforms, and traffic analyzed using Plausible to protect your ad-exposure.
${_}
Even the embedded youtube links are crafted to ensure **no 3rd-party cookie tracking by default.**
${_}
Special thanks to the friends and family who have generously shared their time and attention for a more natural web experience.`,
      quoteWidth: "auto",
    },
  ],
  links: [
    {
      text: "GitHub",
      href: "https://github.com/briveramelo/react-portfolio",
      icon: <GitHub style={iconStyle} />,
    },
  ],
});

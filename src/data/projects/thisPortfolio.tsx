import React from "react";
import { _, iconStyle, ProjectDetail } from "./projectDetails.tsx";
import GitHub from "@mui/icons-material/GitHub";

export const thisPortfolio = new ProjectDetail({
  title: "This Portfolio",
  media: [
    {
      chapterTitle: "This Portfolio",
      src: `Take a look around you at at the GitHub link below.`,
      alt: "",
      type: "quote",
      text: `${_}`,
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

import React from "react";
import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";
import GitHub from "@mui/icons-material/GitHub";

export const thisPortfolio = new ProjectDetail({
  title: "This Portfolio",
  media: [
    {
      chapterTitle: "This Portfolio",
      src: `Take a look around you at.`,
      alt: "",
      type: "quote",
      text: `This portfolio was built with React, written in Typescript/Javascript, styled in CSS, templated with HTML, hosted on Google Cloud Platform (GCP), the DNS managed with Amazon Web Services AWS, the source code controlled with [Git](https://github.com/briveramelo/react-portfolio), designed for use on desktop and mobile web platforms, and traffic analyzed using Plausible to protect your ad-exposure.
${_}
Even the embedded youtube links are crafted to ensure **no 3rd-party cookie tracking by default.**`,
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

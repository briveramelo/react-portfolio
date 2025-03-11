import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";
import AndroidIcon from "@/assets/skills/android.svg?react";
import AppleIcon from "@/assets/skills/apple.svg?react";
import React from "react";

export const nrhControl = new ProjectDetail({
  title: "NRH Control",
  media: [
    {
      chapterTitle: "Overview",
      src: "https://www.youtube-nocookie.com/embed/T4OEciSQBUE?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `NRH Control is an innovative smartroom controller for patients, family, and staff at the Craig H. Neilsen Rehabilitation Hospital at the University of Utah. It supports touch, voice, and even 'sip-and-puff' breath control with custom hardware.
${_}
I coordinated the UI/UX development.
${_}
_See a brief explanation and demo of the app in action from [0:52](#0:52) - 1:30._`,
      startTime: 52,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/EVAXd7ipvFw?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `NRH Control is an innovative smartroom controller for patients, family, and staff at the Craig H. Neilsen Rehabilitation Hospital at the University of Utah. It supports touch, voice, and even 'sip-and-puff' breath control with custom hardware.
${_}
I coordinated the UI/UX development.`,
    },
    {
      chapterTitle: "Contributions",
      src: "nrh-control/all-pages.pdf",
      alt: "",
      type: "firebasePdf",
      text: `The app allows for control of the hospital room Door, TV, Lights, Blinds, Temperature, Soundbar, Nurse Call, Hospital Elevators, and other options and administrative functions.
${_}
Because of the breadth, we agreed that consistency across pages would reduce the cognitive load on patients. We organized development with a top-level view, shown here in the pdf, to quickly spot discrepancies and align style on mobile phones and tablets.
${_}
Although I did not do the hands-on UI development, I coordinated team meetings with our interdisciplinary staff of Software Engineers, IT managers, therapists, doctors, researchers, and artists to ensure a smooth translation of requirements into usable and consistent design. I sketched drafts for our artists, tracked todos, and ensured cohesion with research, design, and engineering.`,
    },
    {
      src: "nrh-control/tutorial-small.pdf",
      alt: "",
      type: "firebasePdf",
      text: `User testing also revealed a need for explicit usability explanations that labels and therapists could not already solve. The patients involved a wide range of technology savvy, including many with almost no prior smartphone or tablet usage.
${_}
This led to the development of an optional tutorial, which could be enabled on a per-screen basis as a quick reference or for the whole app from start to finish.`,
    },
    {
      src: "nrh-control/nrh-control-style-guide.pdf",
      alt: "",
      type: "firebasePdf",
      text: `Because the resident artist would change often and lead to an accumulation of minor inconsistencies across pages, I also established use of a style guide. Although I did not create the style guide itself, I did ask for each artist to use and update this as a living process document for their onboarding and the onboarding of subsequent artists.
${_}
A key aspect of this was maintaining adherence to the University of Utah's color, typography, and branding guide.`,
    },
    {
      chapterTitle: "Contributors",
      src: "nrh-control/nrh-control-style-guide.pdf",
      alt: "",
      type: "firebasePdf",
      text: `Brent Elieson (University IT Director), Dr. Ahmad Alsaleem, Dr. Jason Wiese, Tamanna Mo (Human-Computer Interaction Researcher), Karthi Jeyabalan, Andrae Meyer, Brantly Walker, Aaron Behunin (Software Developers), Brandon Rivera-Melo (UI/UX Coordinator), Junhao Fu, Yuyan Yao, Jess Adamson, Jeff Jackman, Rebekah Huang, (UI Artists), James Gardner (Occupational Therapist, IT), `,
    },
  ],
  links: [
    {
      text: "App Store",
      href: "https://apps.apple.com/us/app/nrh-control/id1568323750?platform=iphone",
      icon: <AppleIcon style={iconStyle} />,
    },
    {
      text: "Play Store",
      href: "https://play.google.com/store/apps/details?id=com.universityofutahhealth.byodsmartroom",
      icon: <AndroidIcon style={iconStyle} />,
    },
  ],
});

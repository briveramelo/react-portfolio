import { _, iconStyle, ProjectDetail } from "./projectDetails.tsx";
import AndroidIcon from "@/assets/skills/android.svg?react";
import AppleIcon from "@/assets/skills/apple.svg?react";
import React from "react";

export const nrhControl = new ProjectDetail({
  title: "NRH Control",
  media: [
    {
      chapterTitle: "Video",
      src: "https://www.youtube-nocookie.com/embed/qyt4u7Lw-PM?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `NRH Control is an innovative smartroom controller for patients, family, and staff at the Craig H. Neilsen Rehabilitation Hospital at the University of Utah. It supports touch, voice, and even 'sip-and-puff' breath control with custom hardware.
${_}
I coordinated the UI/UX development.
${_}
_See the app in action at [2:20](#1:59.15)._`,
    },
    {
      chapterTitle: "Media",
      src: "nrh-control/all-pages.pdf",
      alt: "",
      type: "firebasePdf",
      text: `The app allows for control of the hospital room Door, TV, Lights, Blinds, Temperature, Soundbar, Nurse Call, Hospital Elevators, and other options and administrative functions.
${_}
Because of the breadth, we agreed that consistency across pages would reduce the cognitive load on patients. We organized development with a top-level view to quickly spot discrepancies and align style on mobile phones and tablets.`,
    },
    {
      src: "nrh-control/tutorial-small.pdf",
      alt: "",
      type: "firebasePdf",
      text: `User testing also revealed a need for explicit usability explanations that labels and therapists could not already solve. The patients involved a wide range of technology savvy, including many with almost no prior smartphone or tablet usage.
${_}
This led to the development of an optional tutorial, which could be enabled on a per-screen basis as a quick reference or for the whole app from start to finish.`,
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

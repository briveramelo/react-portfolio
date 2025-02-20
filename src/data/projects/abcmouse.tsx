import AndroidIcon from "@/assets/skills/android.svg?react";
import AppleIcon from "@/assets/skills/apple.svg?react";
import React from "react";
import { _, iconStyle, ProjectDetail } from "../projectDetails.tsx";

export const abcMouse = new ProjectDetail({
  title: "ABCmouse",
  media: [
    {
      chapterTitle: "Videos",
      src: "https://www.youtube-nocookie.com/embed/WjwmbqacTlk?rel=0&enablejsapi=1",
      alt: "",
      type: "youtube",
      text: `ABCmouse is a digital education program for children ages 2–8, created by the edtech company Age of Learning, Inc. The program offers educational games, videos, puzzles, printables, and a library of regular and "read-aloud" children's books, covering subjects including reading and language arts, math, science, health, social studies, music, and art.`,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/rbZCH6z8WWs?rel=0&enablejsapi=1",
      alt: "Kids video",
      type: "youtube",
      text: "Kids think ABCmouse is fun, so learning happens naturally.",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/Gdz6R6vw6zw?rel=0&enablejsapi=1",
      alt: "Teachers video",
      type: "youtube",
      text: "Teachers see improved test scores because of increased academic engagement.",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/i4XfBcGuCfU?rel=0&enablejsapi=1",
      alt: "Parents",
      type: "youtube",
      text: "Parents can trust that all the content will provide the kids with learning.",
    },
    {
      chapterTitle: "Contributions",
      src: "abcmouse/devices.webp",
      alt: "Devices",
      type: "firebaseImage",
      text: `Supporting the iPad 2 as the primary device in libraries and schools across the world required heavy optimization. With only 512MB of RAM available, using around 300MB (roughly 60%) would trigger app crashes. A team of engineers and I identified an opportunity with Unity AssetBundles.
${_}
We redesigned the app internals to load and unload resources on demand using an in-house API and caching mechanism, while also addressing other memory leaks from static variables and lingering closures. In conjunction with the refactoring of performance-intensive C# reflection operations to use more performant alternatives, these changes reduced app startup times by 50%, eliminated app crashes on low-end devices, and expanded learning access to tens of thousands of children worldwide.`,
    },
    {
      src: "abcmouse/leanplum-dashboard-sample.webp",
      alt: "Leanplum Analytics",
      type: "firebaseImage",
      text: `I integrated Leanplum Analytics into ABCmouse mobile to ethically optimize student engagement. This allows the team - to this day - to easily conduct A/B testing with thousands of users per test group and confidently deploy changes with higher engagement to hundreds of thousands of active users.        
${_}
_The picture featured here is a sample Leanplum dashboard and does not represent actual ABCmouse mobile usage data_`,
    },
    {
      src: "abcmouse/mastering-math-counting.mp4",
      alt: "Mastering Math",
      type: "firebaseVideoAsGif",
      text: `I integrated essential features like Mastering Math - a standalone app built by another team at Age of Learning - seamlessly into ABCmouse Mobile through close cross-team collaboration.`,
    },
    {
      src: "abcmouse/64bit-requirement.webp",
      alt: "64-bit requirement roadmap",
      type: "firebaseImage",
      text: `I also upgraded the app's infrastructure to support Android's 64-bit upgrade requirements and ensure future compatibility. This involved careful review of all media assets and external plugins, updating those where necessary.`,
    },
    {
      src: "abcmouse/AgeOfLearning-AllContributions-Redacted.pdf",
      alt: "age of learning contributions pdf",
      type: "firebasePdf",
      text: `I kept a log of nearly all of the contributions I made during my tenure at Age of Learning - a sort of receipt for the engineering leadership team during performance reviews. Some specifics have been removed to maintain ethical adherence to the employee agreement non-disclosure requirements.
${_}
The management team was impressed by my initiative in assisting a QA automation teammate to streamline our testing process. I developed a recording tool to capture the names of interactive elements, which are essential for writing reliable, programmatic system tests for the ABCmouse mobile app. One colleague estimated it saved him a day's worth of work for every test he needed to write.`,
    },
    {
      src: "abcmouse/brandon-and-adam.webp",
      alt: "brandon and adam",
      type: "firebaseImage",
      text: `Over the course of 17 months, I contributed to 27 app updates for both iOS and Android, received a promotion, and was told my pay raise was the highest of all staff in my position.
${_}
_This was my first day in the office with friend and colleague, Adam Kay._`,
    },
  ],
  links: [
    {
      href: "https://apps.apple.com/us/app/abcmouse-reading-math-games/id586328581",
      text: "App Store",
      icon: <AppleIcon style={iconStyle} />,
    },
    {
      text: "Play Store",
      href: "https://play.google.com/store/apps/details?id=mobi.abcmouse.academy_goo&hl=en_US&pli=1",
      icon: <AndroidIcon style={iconStyle} />,
    },
  ],
});

import { _, ProjectDetail } from "../projectDetails.tsx";

export const adWithSam = new ProjectDetail({
  title: "AD with Sam",
  media: [
    {
      chapterTitle: "Media",
      src: "https://www.youtube-nocookie.com/embed/_aBn0a0uOWA?rel=0&enablejsapi=1",
      alt: "AD with Sam: 2D",
      type: "youtube",
      text: `AD with Sam is a highly innovative exhibit for people with spinal cord injury to learn about a life-threatening complication: Autonomic Dysreflexia. This is currently on display at the Craig H. Neilsen Rehabilitation Hospital at the University of Utah.
${_}
It uses a custom blend of storytelling, 3D projection mapping onto a lifesize mannequin, animated anatomy, surround sound audio, and RGB lighting.
${_}
_Highlight moments:_
_[0:57](#0:57) - 1:07 : Spinal Cord Dermatomes_
_[1:32](#1:32) - 2:03 : Nervous System_
_[2:48](#2:48) - 3:43 : Symptoms_
_[3:43](#3:43) - 4:05 : Death_
`,
    },
    {
      chapterTitle: "Technology",
      src: "https://www.youtube-nocookie.com/embed/SWx83_OfZpY?rel=0&enablejsapi=1",
      alt: "Technology Architecture",
      type: "youtube",
      text: `This video was presented to a room full of rehabilitation experts at ASCIP (Academy of Spinal Cord Injury Professionals)`,
    },
    {
      src: "ad-with-sam/ASCIP-tech.pdf",
      alt: "Technology Architecture",
      type: "firebasePdf",
      text: `Here are the slides showing the architecture in more detail:
${_}
Lightform (projection mapping)
Adobe After Effects (animation creation tool)
Easy Standalone 2 (RGB lighting)
Touch OSC (app-based remote control)
QLab (video, audio, lighting, input orchestration)`,
    },
    {
      src: "ad-with-sam/ad-touch-osc.webp",
      alt: "Touch OSC Controls",
      type: "firebaseImage",
      text: `We built this custom iPad interface for chapter-based control of the long-presentation, often useful when showcasing highlight moments from the presentation to people quickly touring through.
${_}
Also included is a 'safe mode' toggle, which swaps out the irreverent 'Death' section if a therapist thought it would be too overwhelming for the patient (see moment 3:43 of the video).`,
    },
    {
      chapterTitle: `Team`,
      src: `ad-with-sam/team-photo.webp`,
      alt: "Positive Review",
      type: "firebaseImage",
      text: `- Brandon Rivera-Melo (creative director, narrator)
- Yuyan Yao, Junhao Fu (technical artists)
- Lindsay Humphrey, Danielle Houseman (rehab educators)
- Elizabeth Jayne York, Andrea Aguirre (medical advisors)
- Thomas Cayias, James Gardner (occupational therapy advisors)
- Jeffrey Rosenbluth (project sponsor)`,
      quoteWidth: "auto",
    },
  ],
  links: [],
});

import { _, ProjectDetail } from "./projectDetails.tsx";

export const pocketOptimist = new ProjectDetail({
  title: "The Pocket Optimist",
  media: [
    {
      chapterTitle: "The Pocket Optimist",
      src: "pocket-optimist/book-cover.webp",
      alt: "",
      type: "firebaseImage",
      text: `The Pocket Optimist is a science-based, personal development service for athletes, working professionals, and parents to break through hidden mental barriers. It turns everyday language into clear insights and offers straightforward workshops to mediate improvement.
${_}
I served as the Inventor, Developer, and Coach when deploying the technology with family, friends, and clients.
${_}
The Pocket Optimist is based on (but not affiliated with) the groundbreaking research of Dr. Martin Seligman (Optimism), Dr. Peter Schulman (C.A.V.E.), and Dr. Albert Ellis (C.B.T.) that creates long-lasting behavior change.`,
    },
    {
      src: "pocket-optimist/Overview.pdf",
      alt: "System overview",
      type: "firebasePdf",
      text: `In short, The Pocket Optimist helps you attune to belief-laden speech that you may take for granted.
${_}
A phrase like _I can't draw_ paints an permanent, pervasive, and personal stance on a topic, very likely inaccurate and certainly harmful. A phrase like this is built on the speech and belief patterns of our caregivers. While the ineffable feeling behind such a statement is certainly not invalid, the rationale almost certain is.
${_}
The Pocket Optimist helps attune to the nuances of this discord and restore realistic optimism.`,
    },
    {
      src: "pocket-optimist/sample-optimism-report.pdf",
      alt: "",
      type: "firebasePdf",
      text: `Here is a sample optimism report that the Pocket Optimist might generate.
${_}
This tool works because people spontaneously provide explanations for why they believe something has happened. The tool 'extracts' key events from a transcript of speech, identifies the perceived cause, and then rates that explanation.
${_}
Ratings are represented on a Likert scale from 1-7 and then mapped to an emotionally evocative animal character. Each character represents one of the three key dimensions Seligman et. al. define as representative of 'optimism.'`,
      startPage: 4,
    },
    {
      src: "pocket-optimist/sample-optimism-report.pdf",
      alt: "",
      type: "firebasePdf",
      text: `The tool is still in development.
${_}
Contact me using [the form below](#contact) to get your personalized report.`,
      startPage: 8,
    },
  ],
  links: [],
});

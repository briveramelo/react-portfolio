import { _, ProjectDetail } from "./projectDetails.tsx";

export const pocketOptimist = new ProjectDetail({
  title: "The Pocket Optimist",
  media: [
    {
      chapterTitle: "What is it?",
      src: "pocket-optimist/book-cover.webp",
      alt: "",
      type: "firebaseImage",
      text: `The Pocket Optimist is a science-based, personal development service for athletes, working professionals, and parents to break through hidden mental barriers. It turns everyday language into clear insights and offers straightforward workshops to mediate improvement.
${_}
I served as the Inventor, Developer, and Coach when deploying the technology with family, friends, and clients.
${_}
The Pocket Optimist is based on (but not affiliated with) the groundbreaking research of Dr. Martin Seligman, Dr. Peter Schulman, and Dr. Albert Ellis that creates long-lasting behavior change.`,
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
    },
    {
      chapterTitle: "Contributions",
      src: "pocket-optimist/sample-optimism-report.pdf",
      alt: "",
      type: "firebasePdf",
      text: `I am the founder, developer, and operator of the service
${_}
The interview transcription and optimism ratings are automated with AI using the langchain library in python, and the report generation is similarly automated using matplotlib and fpdf. 
${_}
Contact me to learn about your explanatory style and apply this transformational framework to your life.`,
    },
  ],
  links: [],
});

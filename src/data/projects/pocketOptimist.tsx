import { _, ProjectDetail } from "./projectDetails.tsx";

export const pocketOptimist = new ProjectDetail({
  title: "The Pocket Optimist",
  media: [
    {
      chapterTitle: "What is it?",
      src: "pocket-optimist/book-cover.webp",
      alt: "",
      type: "firebaseImage",
      text: `The Pocket Optimist is a personalized service to help individuals identify and overcome self-limiting pessimism.
${_}
Based on (but not affiliated with) the groundbreaking research of Dr. Martin Seligman, Dr. Peter Schulman, and Dr. Albert Ellis, the service leverages research-validated science to create long-lasting behavior change.
${_}
Ideal for athletes, professionals, coaches, therapists, and therapy-goers, The Pocket Optimist transforms how individuals approach life's challenges, helping them live more realistically and optimistically.`,
    },
    {
      src: "pocket-optimist/sample-optimism-report.pdf",
      alt: "",
      type: "firebasePdf",
      text: `Here is a sample optimism report that the Pocket Optimist might generate for you.
${_}
The tool 'extracts' key events from things you've said, identifies how you explain why those things happened, and then rates your explanation.`,
    },
    {
      chapterTitle: "Contributions",
      src: "pocket-optimist/sample-optimism-report.pdf",
      alt: "",
      type: "firebasePdf",
      text: `I am the founder, developer, and operator of the service
${_}
The interview transcription and optimism ratings are automated with AI using the langchain library in python, and the report generation is similarly automated using matplotlib and fpdf. 

Contact me to learn about your explanatory style and apply this transformational framework to your life.`,
    },
  ],
  links: [],
});

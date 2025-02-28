import { _, ProjectDetail } from "./projectDetails.tsx";

export const mindkloud = new ProjectDetail({
  title: "MindKloud",
  media: [
    {
      chapterTitle: "Media",
      src: "mindkloud-journey/mk-1-onboarding.webp",
      alt: "",
      type: "firebaseImage",
      text: `MindKloud Journey is a mobile app for young adults to **improve emotional self-awareness through journaling** and for college institutions to facilitate a thriving social atmosphere.
${_}
I served as the Head of Engineering for a small start-up team when porting an iOS-only app to Unity, adding support for Android, analytics, and AWS cloud storage.
${_}
_This image depicts the onboarding flow for new users and the key activity loop._`,
    },
    {
      src: "mindkloud-journey/face-id.webp",
      alt: "",
      type: "firebaseImage",
      text: `Security was an important requirement, so I made sure to integrate FaceID or a PIN for login.`,
    },
    {
      src: "mindkloud-journey/home-page.webp",
      alt: "",
      type: "firebaseImage",
      text: `We published to the iOS App Store and Android Play store in 2024, complete with features like journal streak tracking, cloud uploads, lottie animations, and audio transcription.
${_}
Support for Android greatly expanded app access.`,
    },
    {
      src: "mindkloud-journey/emotion-log.webp",
      alt: "",
      type: "firebaseImage",
      text: `Emotion logging allowed users to review a history of their moods over time and identify behavioral patterns to improve their self care.`,
    },
    {
      src: "mindkloud-journey/health-questionnaire.webp",
      alt: "",
      type: "firebaseImage",
      text: `Critically, the app also recorded aggregate PHQ-9 health data to alert academic staff of opportunities to support the enrolled students in cases of severe depression or suicidality.`,
    },
    {
      src: "mindkloud-journey/video-recording.webp",
      alt: "",
      type: "firebaseImage",
      text: `Using AWS S3, Transcribe, API Gateway, Lambda Functions, and Aurora, we supported video, audio, and text uploads along with audio transcription that users could use to review and attune to their recent reflections.`,
    },
    {
      src: "mindkloud-journey/uploaded.webp",
      alt: "",
      type: "firebaseImage",
      text: `We also integrated Unity Analytics to track a funnel of user engagement throughout the onboarding and primary activity loop.
${_}
We trimmed long portions and added satisfying sounds and animations to checkpoints, increasing onboarding completion.`,
    },
    {
      src: "mindkloud-journey/health-story.webp",
      alt: "",
      type: "firebaseImage",
      text: `Although the management team dissolved the company before more could be learned from the app release, the experience concluded with a successful product launch.`,
    },
  ],
  links: [],
});

import { _, ProjectDetail } from "./projectDetails.tsx";

export const mindkloud = new ProjectDetail({
  title: "MindKloud",
  media: [
    {
      chapterTitle: "Media",
      src: "mindkloud-journey/face-id.webp",
      alt: "",
      type: "firebaseImage",
      text: `MindKloud Journey is a mobile app for young adults to **improve emotional self-awareness through journaling** and for college institutions to facilitate a thriving social atmosphere.
${_}
I served as the Head of Engineering when porting an iOS-only app to Unity, adding support for Android, analytics, and a smart AWS backend.
${_}
Security was an important requirement, so I made sure to integrate FaceID or a PIN for login.`,
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
      text: `Critically, the app also stored PHQ-9 health data.`,
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
We showed onboarding progress completion and used satisfying sounds and animations to increase onboarding completion.`,
    },
    {
      src: "mindkloud-journey/health-story.webp",
      alt: "",
      type: "firebaseImage",
      text: `Although the management team dissolved the company before more could be learned from the app release, the experience concluded with a successful product launch to the iOS App Store and Android Google Play Store.
${_}
Contributors:
Noe Foster (Co-Founder)
Kyle Chang (Co-Founder)
Brandon Rivera-Melo (Head of Engineering)`,
    },
  ],
  links: [],
});

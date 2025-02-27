import { ProjectDetail } from "./projectDetails.tsx";
import { _, dash } from "./projectDetails.tsx";

export const tiltTracker = new ProjectDetail({
  title: "Tilt Tracker",
  media: [
    {
      chapterTitle: "Problem",
      src: "tilt-tracker/stages-of-ulcer.webp",
      alt: "stages of ulcer",
      type: "firebaseImage",
      text: `For people in power wheelchairs, sitting in the same position for too long can cause a **pressure ulcer.**`,
    },
    {
      src: "tilt-tracker/nrh-patient-in-bed.webp",
      alt: "patient in hospital bed",
      type: "firebaseImage",
      text: `Pressure wounds are life-threatening, debilitating, costly, and time-consuming.`,
    },
    {
      src: "tilt-tracker/happy-pr-cropped.webp",
      alt: "tilt tracker logo",
      type: "firebaseImage",
      text: "Doing regular **Pressure Reliefs (PRs)** by tilting the chair back is the best prevention.",
    },
    {
      src: "tilt-tracker/josh-tilt-cropped.webp",
      alt: "man in chair looking out window",
      type: "firebaseImage",
      text: "But, tilting your chair every 20-30 minutes is easy to forget.",
    },
    {
      chapterTitle: "Solution",
      src: "tilt-tracker/tilt-tracker-system-diagram.webp",
      alt: "Tilt Tracker system diagram",
      type: "firebaseImage",
      text: `Tilt Tracker is a system that creates a cycle of positive reinforcement to improve pressure relief compliance and **prevent pressure ulcers.**
${_}
It uses **real-time feedback** to motivate compliance and objective reporting to provide insight for clinical care.`,
    },
    {
      src: "tilt-tracker/tilt-pcb-kit.webp",
      alt: "device cables",
      type: "firebaseImage",
      text: "Tilt Tracker **reports** compliance and **prompts** behavior change with inexpensive electronics.",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/Z4cu3ySafYU?rel=0&enablejsapi=1",
      alt: "Youtube",
      type: "youtube",
      text: "This is an early overview of the technology during the prototyping stage.",
    },
    {
      src: "tilt-tracker/installation-cropped.webp",
      alt: "installation",
      type: "firebaseImage",
      text: `Tilt Tracker is **compatible with all power wheelchairs.**
${_}
These tenets of low-cost and maximum compatibility increase user access.`,
    },
    {
      src: "tilt-tracker/device-back-mounted-circled1.webp",
      alt: "device cables",
      type: "firebaseImage",
      text: "The device attaches to the wheelchair backing, sends activity data to the cloud, and delivers friendly reminders if no pressure relief is detected.",
    },
    {
      src: "tilt-tracker/seat-tilt-sensor.webp",
      alt: "wheelchair angle sensor",
      type: "firebaseImage",
      text: "The seat angle sensor attaches underneath the wheelchair seat...",
    },
    {
      src: "tilt-tracker/force-sensor.webp",
      alt: "wheelchair power and occupancy sensor",
      type: "firebaseImage",
      text: "...and a paper-thin seat occupancy sensor attaches below the seat cushion.",
    },
    {
      src: "tilt-tracker/on-chair-diagram.webp",
      alt: "on chair diagram",
      type: "firebaseImage",
      text: "The case exposes a control button for a few common, operational needs.",
    },
    {
      chapterTitle: "Reports",
      src: "tilt-tracker/sample-relief-report.pdf",
      alt: "pressure relief report",
      type: "firebasePdf",
      text: `Completing a Pressure Relief (PR) with Tilt Tracker is like closing a fitness ring on an Apple Watch - it tracks adherence to personalized mobility goals. PRs form the foundation of Relief Reports, which provide transparency on how effectively users meet their agreed-upon goals.
${_}
These reports help power wheelchair users, care teams, and families monitor compliance and anticipate potential risks.`,
    },
    {
      src: "tilt-tracker/tilt-recline-heatmap.webp",
      alt: "tilt and recline relieve pressure",
      type: "firebaseImage",
      text: `Performing both a seat tilt and a backrest recline is key for providing effective pressure relief.
${_}
_Note: this is a one-off visual conducted in the lab and not available to Tilt Tracker users._`,
    },
    {
      src: "tilt-tracker/interactive-graph-compressed.gif",
      alt: "interactive graph animated",
      type: "firebaseImage",
      text: "Researchers and clinicians can drill down into the details of a single PR for deep insights using an interactive web tool on the Tilt Tracker website.",
    },
    {
      src: "tilt-tracker/pressure-relief-detection-model.webp",
      alt: "pressure relief detection model",
      type: "firebaseImage",
      text: "This works with a pressure relief detection algorithm using a raw stream of time-series angle data.",
    },
    {
      src: "tilt-tracker/occupancy-detection-model.webp",
      alt: "occupancy detection model",
      type: "firebaseImage",
      text: "A simplified variation of this model detects seat occupancy, which is critical for distinguishing non-compliance from chair absence.",
    },
    {
      src: "tilt-tracker/tilt-reporting.webp",
      alt: "notification settings",
      type: "firebaseImage",
      text: "Users, family, and care team members can subscribe to regular reporting via SMS or email with their choice of frequency.",
    },
    {
      chapterTitle: "Prompts",
      src: "tilt-tracker/audio-goal-feedback-v1.webp",
      alt: "audio goal feedback",
      type: "firebaseImageWithAudioButtons",
      text: `These reminders come in various formats, including audio ...
${_}
_"The sound... I really liked the sound, it just makes it easier to remind me if conversations are going on."_
${dash} Tilt Tracker user
${_}
This participant has my brother Nathan to thank for the audio design. Click to listen!`,
      audioButtons: [
        { audioPath: "tilt-tracker/interval.mp3", x: 32, y: 14 },
        { audioPath: "tilt-tracker/tilt.mp3", x: 32, y: 39 },
        { audioPath: "tilt-tracker/recline.mp3", x: 32, y: 63 },
        { audioPath: "tilt-tracker/duration.mp3", x: 32, y: 90 },
      ],
    },
    {
      src: "tilt-tracker/vibration-motor.webp",
      alt: "vibration motor",
      type: "firebaseImage",
      text: `... subtle vibrations ...
${_}
_"I could tell that it was like, notifying me. But it wasn’t like honking a horn or distracting somebody else. And consistently, I could feel it, versus either seeing it or hearing it. So the feel of the vibration was much more apparent."_
${dash} Tilt Tracker user`,
    },
    {
      src: "tilt-tracker/armrest-led.webp",
      alt: "armrest LED",
      type: "firebaseImage",
      text: `... and a blinking LED.
${_}
_"I do not have my phone with me a lot. I do not wear a watch. Or I am not a high tech. If [Tilt Tracker] reminds me, that’s all I want."_
${dash} Tilt Tracker user`,
    },
    {
      src: "tilt-tracker/notification-settings.webp",
      alt: "notification settings",
      type: "firebaseImage",
      text: `Watching a movie? Pressure relief reminders (Interval Feedback) can be disabled from the website or a button press on the device.
${_}
Users can also choose if they want fun beeps, buzzes, or flashes for the other key metrics of a proper PR, like if they've tilted for long enough (Duration), far enough (Tilt), or reclined far enough (Recline) too.`,
    },
    {
      chapterTitle: "Contributions",
      src: "tilt-tracker/recolored-brandon-pose.webp",
      alt: "brandon posing with Tilt Tracker",
      type: "firebaseImage",
      text: `Tilt Tracker was initially prototyped at The GApp Lab using a Samsung phone and Unity App for data collection and jQuery, CSS, HTML, NodeJS, Java, and SQL by a team of 5 graduate students. When one team member left, I filled in writing the Java API and SQL queries.
${_}
As the team downsized, I gradually took on the entire tech stack and client meetings. Dr. Jeffrey Rosenbluth M.D., project sponsor and Director of Spinal Cord Injury at the University of Utah, eventually hired me full time.`,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/AgdABWQStZo?rel=0&enablejsapi=1",
      alt: "gource video",
      type: "youtube",
      text: "Here is a gource visualization of all code additions, deletions, and modifications made in git source control over time (excluding the original sensor prototype). You will see a directory naming depth of just one, including each of the submodule repositories in use: API (Java, Spring, Maven), Web (NodeJS, jQuery, HTML, CSS), Sensor (C++, Particle IoT), Db (MariaDB, SQL), Mqtt (mosquitto), Data, CI/CD (GitLab .yml, Bash), Singularity (Bash), and Super.",
    },
    {
      src: "tilt-tracker/ross-worktable.webp",
      alt: "Ross at his worktable",
      type: "firebaseImage",
      text: "Although I took on the full tech stack, including C++ firmware and remote updates during clinical trials, our electrical engineer Ross Imburgia developed the electronics.",
    },
    {
      src: "tilt-tracker/ingenta-article.pdf",
      alt: "tilt tracker logo",
      type: "firebasePdf",
      text: "In 2018, we **published a journal article** to Technology and Innovation with the high level details of our approach.",
    },
    {
      src: "tilt-tracker/TiltTracker_MarketingPlan_Executive_Summary.pdf",
      alt: "tilt tracker marketing plan executive summary",
      type: "firebasePdf",
      text: "In 2021, I enlisted the support of my MBA classmates to write a marketing plan for bringing Tilt Tracker to market. The full plan is a 37-page document; this is just the executive summary.",
    },
    {
      src: "tilt-tracker/tilt-sbir-elevator-pitch.pdf",
      alt: "tilt tracker logo",
      type: "firebasePdf",
      text: "In 2022, we were invited to apply for SBIR (Small Business Innovation Research) funding, and we did. The full proposal is a 79-page pdf document with the full support of the Craig H. Neilsen Rehabilitation Hospital, a team of clinical staff, researchers, and business professionals. Like 90% of other applications, Tilt Tracker was denied an award. This is just the elevator pitch.",
    },
    {
      src: "tilt-tracker/design-and-eval-article-working-copy.pdf",
      alt: "tilt tracker logo",
      type: "firebasePdf",
      text: 'In January 2025, another article was accepted for publication in IMWUT, a high-impact ACM journal on Interactive, Mobile, Wearable, and Ubiquitous Technologies. The paper received **"very significant impact" scores from all reviewers.** We evaluated the feasibility of the aforementioned reminder and notification modalities to improve PR adherence and identified opportunities to facilitate reflection on personal data through data exploration.',
    },
    {
      src: `### "I think it would be **very beneficial to me to have this reminder** because in any situation, I would have the reminder to help me to go back to help **to not get pressures sores.**"
${dash} Tilt Tracker user`,
      alt: "quote",
      type: "quote",
      text: "Here, a clinical study participant expresses the value they see in Tilt Tracker.",
      quoteWidth: "60%",
    },
    {
      src: "tilt-tracker/logo.svg",
      alt: "tilt tracker logo",
      type: "firebaseImage",
      text: "Tilt Tracker: where rehab is a relief.",
    },
  ],
  links: [],
});

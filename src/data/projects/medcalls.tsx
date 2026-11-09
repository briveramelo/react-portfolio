import LanguageIcon from "@mui/icons-material/Language";
import { ProjectDetail, _, dash, iconStyle } from "../projectDetails.tsx";

export const medcalls = new ProjectDetail({
  title: "MedCalls AI",
  media: [
    {
      chapterTitle: "Problem",
      src: `### “Every missed phone call represents a frustrated patient, a potential bad review and ultimately, lost revenue.”
${dash} Andrew Brewster, Chief Revenue Officer, MedCalls AI`,
      alt: "Andrew Brewster on the cost of missed patient calls",
      type: "quote",
      quoteWidth: "75%",
      text: `A patient calls to book an appointment. The practice needs to answer, understand the request, and finish the work.
${_}
**MedCalls AI connects that conversation to the systems and people behind the front desk.** As CTO, I build the technology and operating practices that make it dependable.
${_}
[Quote: Healthcare Tech Outlook](https://www.healthcaretechoutlook.com/medcalls-ai-2026)`,
    },
    {
      chapterTitle: "Solution",
      src: "medcalls/booking-demo.svg",
      alt: "Listen to a new-patient booking demonstration",
      type: "firebaseImageWithAudioButtons",
      audioButtons: [
        { audioPath: "medcalls/new-patient-demo.mp3", x: 7, y: 40 },
      ],
      text: `**An appointment starts with a conversation.** Listen as MedCalls handles a new-patient booking, from the caller’s request to the next step.`,
    },
    {
      src: "medcalls/call-review-desktop.png",
      alt: "Dashboard call review with conversation and tool activity",
      type: "firebaseImage",
      text: `The conversation becomes a record the practice can act on. Staff can review the call, inspect tool activity, add notes, and track completion in one place.
${_}
I designed and built the dashboard around this handoff between **AI execution and human follow-through**.`,
    },
    {
      src: "medcalls/call-review-mobile.png",
      alt: "Call history in the mobile dashboard",
      type: "firebaseImage",
      text: `That same call history works on a phone, giving staff access to summaries and outcomes away from their desks.`,
    },
    {
      chapterTitle: "Technology",
      src: "medcalls/booking-schedule.png",
      alt: "Booking calendar and practice rule editor",
      type: "firebaseImage",
      text: `An available appointment must also be the **right appointment**. Providers, locations, visit types, and practice rules shape what the agent can offer.
${_}
I built the scheduling integrations and configuration tools that turn those constraints into usable availability. The calendar lets a practice see and adjust its booking rules.`,
    },
    {
      src: "medcalls/system.svg",
      alt: "Voice connects to tools and EHR; asynchronous processing feeds the dashboard",
      type: "firebaseImage",
      text: `The voice agent is one part of the system. I built services that connect its requests to practice configuration and EHR workflows, then process call events into outcomes that staff can review.
${_}
**Real-time actions and asynchronous follow-up have different jobs.** Scheduling needs a response during the conversation; downstream processing must remain reliable after the caller hangs up. My work spans the integrations, cloud infrastructure, dashboard, and operational tooling that connect those paths.
${_}
_Simplified architecture; available workflows depend on the practice’s integration._`,
    },
    {
      src: "medcalls/flow-playback.mp4",
      alt: "MedCalls inspection tool linking conversation, flow decisions, and scheduling actions",
      type: "firebaseVideoAsGif",
      text: `I built a **flow inspection tool** that brings the conversation, execution path, and tool activity into one workspace. Stepping through a call highlights the relevant node, making it easier to see why the agent asked a question, followed a branch, or invoked an integration.
${_}
The booking walkthrough follows a request through preference collection, availability lookup, confirmation, and booking. Engineers can inspect each transition instead of reconstructing it from disconnected logs. This tooling also supports my ongoing work on a Go-based agent runtime.`,
    },
    {
      chapterTitle: "Contributions",
      src: "medcalls/security-excerpt.pdf",
      alt: "Selected excerpts from the public MedCalls security and technical whitepaper",
      type: "firebasePdf",
      text: `I manage our **HIPAA compliance program using Compliancy Group** for policies and procedures, workforce training and attestations, risk analysis, and risk-management evidence.
${_}
I connect that program to the engineering and operational work: access controls, vendor and BAA review, security documentation, and customer reviews. The public security and technical whitepaper I authored explains those controls and responsibilities so practices can evaluate MedCalls alongside their own requirements.
${_}
_Excerpt from version 0.3, July 2026._`,
    },
    {
      src: "medcalls/ownership.svg",
      alt: "Engineering, financial planning, security, and operations responsibilities",
      type: "firebaseImage",
      text: `I manage the **financial model and compensation**, connecting business planning to the people and resources needed to deliver the product.
${_}
That work sits alongside architecture, compliance, onboarding, and support. Owning these responsibilities together helps me make practical tradeoffs between what we build, how we operate it, and how we sustain the company.`,
    },
    {
      src: "medcalls/brandmark.svg",
      alt: "MedCalls AI brand mark",
      type: "firebaseImage",
      text: `I serve as **CTO**, with hands-on responsibility for engineering, financial planning, compensation, security, and HIPAA compliance.
${_}
MedCalls is a team effort. I work with our leadership, marketing, sales, and operations colleagues to turn practice needs into a dependable service, from the first conversation through ongoing support.`,
    },
  ],
  links: [
    {
      text: "MedCalls AI",
      href: "https://medcalls.ai/",
      icon: <LanguageIcon style={iconStyle} />,
    },
  ],
});

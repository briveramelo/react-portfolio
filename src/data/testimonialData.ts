import jesse from "@/assets/people/jesse.webp";
import joshLevenson from "@/assets/people/josh-levenson.webp";
import andy from "@/assets/people/andy.webp";
import laurenMee from "@/assets/people/lauren-mee.webp";
import alannaCarrol from "@/assets/people/alanna.webp";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  link: string;
  relation: string;
  size: "full" | "small";
}
const _ = "&nbsp;"; //whitespace character. When on its own line, produces a line break.
export const testimonialsData: Testimonial[] = [
  {
    quote: `I had the privilege of managing Brandon over a two-year period, during which he consistently impressed me with his technical expertise, dedication, and initiative. **He is one of the most hardworking, organized, and resourceful individuals I have ever had the pleasure to work with.** His primary responsibilities involved technical development, where he delivered high-quality features with precision and efficiency. However, Brandon frequently went above and beyond his core duties, learning new technologies rapidly, taking on additional responsibilities, and driving meaningful contributions to the success of our projects.
${_}
One moment that truly stands out is when Brandon first reached out to me the summer before he would begin grad school and he expressed a sincere interest in the work we did in our lab. I casually mentioned the possibility of him working in the lab over the summer and without hesitation, Brandon purchased a plane ticket and surprised me as he was ready to contribute within a week of our initial call. This level of commitment was remarkable and reflected his readiness to seize opportunities and go the extra mile. Throughout his time with us, **he approached every challenge with the same focus and enthusiasm, consistently exceeding expectations**.
${_}
In addition to his technical work, Brandon played a vital role in fostering a positive and collaborative team environment. He led client meetings to align project goals with stakeholder needs, facilitating clear communication and mutual understanding. His work left such a strong impression that the client hired him full-time to continue developing the project. Brandon also offered innovative solutions to complex problems and brought a unique energy to the workplace. Whether it was brainstorming new ideas or launching into an impromptu Nerf dart romp, Brandon knew how to strike **the perfect balance between professionalism and camaraderie.** His ability to build morale and maintain a fun, engaging atmosphere made him a cherished member of the team.
${_}
Brandon’s initiative, technical proficiency, and ability to connect with people on both professional and personal levels make him an exceptional candidate for any organization. **I wholeheartedly recommend him** and am confident he will excel in any role he takes on.`,
    name: "Jesse Ferraro",
    title: "IT Project Manager",
    company: "The GApp Lab",
    photo: jesse,
    link: "https://www.linkedin.com/in/jesse-ferraro-5a093777/",
    relation: "Manager",
    size: "full",
  },
  {
    quote: `**You won’t meet a more hard-working, passionate individual than Brandon.** Over the course of our project, a game that helps teach children with Dyslexia word formation, he tackled incredibly difficult engineering challenges and managed to overcome them quickly and efficiently. **A problem-solver by nature**, his insight and feedback throughout development was immensely helpful to the process and I feel as if **the team as a whole was better for having him around.** However, he was also always very open to critique and constantly sought to better himself as well as the project. Anyone would be lucky to have Brandon as a part of their team and I hope to have the opportunity to work with him again in the future.`,
    name: "Lauren Mee",
    title: "Senior Writer",
    company: "Insomniac Games",
    photo: laurenMee,
    link: "https://www.linkedin.com/in/lauren-mee/",
    relation: "Colleague",
    size: "small",
  },
  {
    quote: `**Brandon is hard-working, motivated, and passionate about the projects he works on.** I had the pleasure of working with Brandon on a project, because of his expertise, commitment, and work ethic we were able to create a high quality and engaging game in under three weeks. I am confident that Brandon will be an asset to any team he works on. **I give him my highest recommendation without reservation.**`,
    name: "Joshua Levenson",
    title: "Web Developer",
    company: "Charter School",
    photo: joshLevenson,
    link: "https://www.linkedin.com/in/joshualevenson/",
    relation: "Colleague",
    size: "small",
  },
  {
    quote: `Brandon worked brilliantly as an engineer on our team for developing a web-based game. He has a knack of approaching problems correctly and developing elegant solutions, all in a commendably short amount of time. **He voices his opinions humbly and clearly and is extremely receptive of suggestions from other team members.** Not just programming, Brandon puts a life into the team, which promotes a healthy work environment. It was a pleasure working with him.`,
    name: "Abhinandan Sain",
    title: "Senior Software Engineering Manager",
    company: "Collins Aerospace",
    photo: andy,
    link: "https://www.linkedin.com/in/abhinandan-sain-229ba870/",
    relation: "Colleague",
    size: "small",
  },
  {
    quote: `Brandon is a fantastic engineer. **He works great in a team setting and makes sure that everyone’s voice is heard.** He always participated in team meetings. Brandon is willing to listen to criticism and gives his own honest feedback. He is willing to put in the extra hours to make sure whatever task he’s working on will be done on time, and that its done well. He will put in all of his effort to make sure the project he's working on is great. **I would be thrilled to have the opportunity to work with Brandon again.**`,
    name: "Alanna Carrol",
    title: "Senior Writer",
    company: "Ripple Effect",
    photo: alannaCarrol,
    link: "https://www.linkedin.com/in/alanna-carroll/",
    relation: "Colleague",
    size: "small",
  },
];

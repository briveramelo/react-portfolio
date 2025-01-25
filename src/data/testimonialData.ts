import joshLevenson from "@/assets/people/josh-levenson.jpeg";
import andy from "@/assets/people/andy.jpeg";
import laurenMee from "@/assets/people/laurenmee.jpeg";
import alannaCarrol from "@/assets/people/alanna.jpeg";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  link: string;
  relation: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote: `**Brandon is hard-working, motivated, and passionate about the projects he works on.** I had the pleasure of working with Brandon on a project, because of his expertise, commitment, and work ethic we were able to create a high quality and engaging game in under three weeks. I am confident that Brandon will be an asset to any team he works on. **I give him my highest recommendation without reservation.**`,
    name: "Joshua Levenson",
    title: "Web Developer",
    company: "Charter School",
    photo: joshLevenson,
    link: "https://www.linkedin.com/in/joshualevenson/",
    relation: "Colleague",
  },
  {
    quote: `Brandon worked brilliantly as an engineer on our team for developing a web-based game. He has a knack of approaching problems correctly and developing elegant solutions, all in a commendably short amount of time. **He voices his opinions humbly and clearly and is extremely receptive of suggestions from other team members.** Not just programming, Brandon puts a life into the team, which promotes a healthy work environment. It was a pleasure working with him.`,
    name: "Abhinandan Sain",
    title: "Senior Software Engineering Manager",
    company: "Collins Aerospace",
    photo: andy,
    link: "https://www.linkedin.com/in/abhinandan-sain-229ba870/",
    relation: "Colleague",
  },
  {
    quote: `**You won’t meet a more hard-working, passionate individual than Brandon.** Over the course of our project, a game that helps teach children with Dyslexia word formation, he tackled incredibly difficult engineering challenges and managed to overcome them quickly and efficiently. **A problem-solver by nature**, his insight and feedback throughout development was immensely helpful to the process and I feel as if **the team as a whole was better for having him around.** However, he was also always very open to critique and constantly sought to better himself as well as the project. Anyone would be lucky to have Brandon as a part of their team and I hope to have the opportunity to work with him again in the future.`,
    name: "Lauren Mee",
    title: "Senior Writer",
    company: "Insomniac Games",
    photo: laurenMee,
    link: "https://www.linkedin.com/in/lauren-mee/",
    relation: "Colleague",
  },
  {
    quote: `Brandon is a fantastic engineer. **He works great in a team setting and makes sure that everyone’s voice is heard.** He always participated in team meetings. Brandon is willing to listen to criticism and gives his own honest feedback. He is willing to put in the extra hours to make sure whatever task he’s working on will be done on time, and that its done well. He will put in all of his effort to make sure the project he's working on is great. **I would be thrilled to have the opportunity to work with Brandon again.**`,
    name: "Alanna Carrol",
    title: "Senior Writer",
    company: "Ripple Effect",
    photo: alannaCarrol,
    link: "https://www.linkedin.com/in/alanna-carroll/",
    relation: "Colleague",
  },
];

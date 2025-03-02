import { _, ProjectDetail } from "./projectDetails.tsx";

export const fruitBuddi = new ProjectDetail({
  title: "Fruit Buddi",
  media: [
    {
      chapterTitle: "Overview",
      src: "https://www.youtube-nocookie.com/embed/yp6D78N_8bY?rel=0&enablejsapi=1",
      alt: "Fruit Buddi Video",
      type: "youtube",
      text: `We began with a very broad question:
${_}
_How can we reduce childhood obesity?_`,
    },
    {
      chapterTitle: "Understand",
      src: "fruit-buddi/KidCheetos.jpg",
      alt: "kids with cheetos",
      type: "firebaseImage",
      text: `In Rogers Park, IL, children visit their local corner store to buy hot cheetos and sugary drinks as a meal substitute, forming unhealthy food nutrition preferences and shopping habits.`,
    },
    {
      src: "fruit-buddi/Cheetos.jpg",
      alt: "store chips kids POV",
      type: "firebaseImage",
      text: `Blaming children and families for not making healthier choices is an oversimplification. Grocery stores place many unhealthy and colorful items within a child's reach. Holding something causes increased feelings of ownership.`,
    },
    {
      src: "fruit-buddi/Child-Vision.jpg",
      alt: "store fruit kids POV",
      type: "firebaseImage",
      text: `On the flipside, these same stores often obscure healthier choices like fruits and vegetables from kids. From a child's point of view, the healthy food section is brown with only thin slivers of visible choices.`,
    },
    {
      src: "fruit-buddi/HCW_Grid.jpg",
      alt: "how can we post-its",
      type: "firebaseImage",
      text: `Armed with these insights, we wrote many more specific questions to reframe social impact within our sphere of influence.`,
    },
    {
      src: "fruit-buddi/FruitBuddiHCW.jpg",
      alt: "Fruit Buddi How Can We Post-It",
      type: "firebaseImage",
      text: `'How can we reduce childhood obesity?' became:
${_}
_How can we provide kids with their own shopping experience and reward healthy choices?_`,
    },
    {
      chapterTitle: "Prototype",
      src: "fruit-buddi/DFAMart.jpg",
      alt: "DFA Mock Grocery Store",
      type: "firebaseImage",
      text: `With this guiding question, we built a mock grocery store with a buffet of kid-centric experiences:
- A simple fruit stand at a kid's level
- A fruit washer
- Fruit stands that looked like plants
- A playful, wobbly, fruit stand
- Free-standing fruit...`,
    },
    {
      src: "fruit-buddi/FirstFruitBuddi.jpg",
      alt: "First Fruit Buddi Prototype",
      type: "firebaseImage",
      text: `...and a shopping cart attachment where kids could match fruits to pockets. Kids effortlessly understood and filled the pockets without explanation.
${_}
_Fruit Buddi was born._`,
    },
    {
      src: "fruit-buddi/KidsMockStore.jpg",
      alt: "Interviewing kids in the mock store",
      type: "firebaseImage",
      text: `The kids shared their insights, and we listened.`,
    },
    {
      src: "fruit-buddi/LabelsFeedback.jpg",
      alt: "kids giving feedback on labels",
      type: "firebaseImage",
      text: `Many fruits on a pocket label was clearly a popular hit.`,
    },

    {
      src: "fruit-buddi/GraceCart.jpg",
      alt: "comparing fruit buddi alternatives",
      type: "firebaseImage",
      text: `Attachments with a structured opening allowed for easy access.`,
    },
    {
      src: "fruit-buddi/Kid.jpg",
      alt: "kid engaging with fruit buddi in store",
      type: "firebaseImage",
      text: `Even if the kid sat in the cart, they could take ownership of the selection process. The magic, as many parents can attest, is the illusion of choice. Any fruit or vegetable is a win!`,
    },
    {
      src: "fruit-buddi/Banana.jpg",
      alt: "kid filling with bananas",
      type: "firebaseImage",
      text: `Motivating with health benefits was not as compelling for kids, but nevertheless engaging.`,
    },
    {
      src: "fruit-buddi/Lettuce.jpg",
      alt: "kid filling with lettuce",
      type: "firebaseImage",
      text: `They would put all sorts of things in the bag.`,
    },
    {
      chapterTitle: "Implement",
      src: "fruit-buddi/DFA-Process-Guide.pdf",
      alt: "Design for America Process Guide PDF",
      type: "firebasePdf",
      text: `Fruit Buddi won an online award on GOODmaker and has been featured on HCD Connect and in the Design for America (DFA) Process Guide.
${_}
_In the DFA Process Guide, shown here, Fruit Buddi is featured on pages: [34](#34), [97](#97), [119](#119), [138](#138), [159](#159), [179](#179), and [209](#209)._`,
    },
  ],
  links: [],
});

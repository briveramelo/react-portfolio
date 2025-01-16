import uhealthW from "@/assets/orgs/uhealth-w.png";
import uhealth from "@/assets/orgs/uhealth.png";
import gapplabW from "@/assets/orgs/gapplab-w.png";
import gapplab from "@/assets/orgs/gapplab.png";
import aolW from "@/assets/orgs/aol-w.png";
import aol from "@/assets/orgs/aol.png";
import hathos from "@/assets/orgs/hathos.jpg";

export interface Employer {
  whiteSrc: string;
  colorSrc: string;
  name: string;
  text: string;
}
export const featuredEmployerData: Employer[] = [
  {
    whiteSrc: uhealthW,
    colorSrc: uhealth,
    name: "UHealth",
    text: `2019 - 2023
Software Design Engineer`,
  },
  {
    whiteSrc: gapplabW,
    colorSrc: gapplab,
    name: "The GApp Lab",
    text: `2016 - 2018
Full-Stack Web Developer`,
  },
  {
    whiteSrc: aolW,
    colorSrc: aol,
    name: "Age of Learning",
    text: `2018 - 2019
Software Developer II`,
  },
];

export const allEmployerData: Employer[] = [
  ...featuredEmployerData,
  {
    whiteSrc: hathos,
    colorSrc: hathos,
    name: "Hathos Interactive",
    text: `2017 - 2018
Lead Engineer`,
  },
];

export function getEmployers(...names: string[]): Employer[] {
  return names
    .map((name) => allEmployerData.find((employer) => employer.name === name))
    .filter((employer): employer is Employer => employer !== undefined);
}

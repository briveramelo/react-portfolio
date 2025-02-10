import uhealthW from "@/assets/orgs/uhealth-w.webp";
import uhealth from "@/assets/orgs/uhealth.webp";
import uhealthLogo from "@/assets/orgs/uhealth-logo.webp";
import gapplabW from "@/assets/orgs/gapplab-w.webp";
import gapplab from "@/assets/orgs/gapplab.webp";
import gapplabLogo from "@/assets/orgs/gapplab-logo.webp";
import aolW from "@/assets/orgs/aol-w.webp";
import aol from "@/assets/orgs/aol.webp";
import aolLogo from "@/assets/orgs/aol-logo.webp";
import hathos from "@/assets/orgs/hathos.webp";
import hathosLogo from "@/assets/orgs/hathos-logo.webp";

export interface Employer {
  whiteSrc: string;
  colorSrc: string;
  logoSrc: string;
  name: string;
  text: string;
}
export const featuredEmployerData: Employer[] = [
  {
    whiteSrc: uhealthW,
    colorSrc: uhealth,
    logoSrc: uhealthLogo,
    name: "UHealth",
    text: `2019 - 2023
Software Design Engineer`,
  },
  {
    whiteSrc: gapplabW,
    colorSrc: gapplab,
    logoSrc: gapplabLogo,
    name: "The GApp Lab",
    text: `2016 - 2018
Full-Stack Web Developer`,
  },
  {
    whiteSrc: aolW,
    colorSrc: aol,
    logoSrc: aolLogo,
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
    logoSrc: hathosLogo,
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

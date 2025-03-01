import uhealthW from "@/assets/orgs/uhealth/uhealth-w.webp";
import uhealth from "@/assets/orgs/uhealth/uhealth.webp";
import uhealthLogo from "@/assets/orgs/uhealth/uhealth-logo.webp";

import gapplabW from "@/assets/orgs/gapp/gapplab-w.webp";
import gapplab from "@/assets/orgs/gapp/gapplab.webp";
import gapplabLogo from "@/assets/orgs/gapp/gapplab-logo.webp";

import aolW from "@/assets/orgs/aol/aol-w.webp";
import aol from "@/assets/orgs/aol/aol.webp";
import aolLogo from "@/assets/orgs/aol/aol-logo.webp";

import hathos from "@/assets/orgs/hathos/hathos.webp";
import hathosLogo from "@/assets/orgs/hathos/hathos-logo.webp";

import dfa from "@/assets/orgs/dfa/dfa.webp";
import dfaW from "@/assets/orgs/hathos/hathos-logo.webp";

import nuW from "@/assets/orgs/nu/nu-white.webp";
import nu from "@/assets/orgs/nu/nu-color.webp";

import uofuGamesW from "@/assets/orgs/uofu-games/uofu-games-white.webp";
import uofuGames from "@/assets/orgs/uofu-games/uofu-games-color.webp";

import uofuBizW from "@/assets/orgs/uofu-biz/uofu-biz-white.webp";
import uofuBiz from "@/assets/orgs/uofu-biz/uofu-biz-color.webp";

import hta from "@/assets/orgs/hta/hta-logo.webp";
import htaLogo from "@/assets/orgs/hta/hta-logo.webp";

import digitalHealthLogo from "@/assets/orgs/digital-health/digital-health-logo.webp";

export interface InstitutionData {
  name:
    | "UHealth"
    | "Age of Learning"
    | "The GApp Lab"
    | "Health Tech Apps"
    | "Digital Health"
    | "Hathos Interactive"
    | "University of Utah"
    | "Design for America"
    | "Northwestern University";
  whiteSrc?: string;
  colorSrc?: string;
  logoSrc?: string;
  text: string;
}

export const featuredEmployerData: InstitutionData[] = [
  {
    name: "UHealth",
    whiteSrc: uhealthW,
    colorSrc: uhealth,
    logoSrc: uhealthLogo,
    text: `2019 - 2023
Software Design Engineer`,
  },
  {
    name: "Age of Learning",
    whiteSrc: aolW,
    colorSrc: aol,
    logoSrc: aolLogo,
    text: `2018 - 2019
Software Developer II`,
  },
  {
    name: "The GApp Lab",
    whiteSrc: gapplabW,
    colorSrc: gapplab,
    logoSrc: gapplabLogo,
    text: `2016 - 2018
Full-Stack Web Developer`,
  },
];
export const otherEmployerData: InstitutionData[] = [
  {
    name: "Health Tech Apps",
    whiteSrc: "",
    colorSrc: "",
    logoSrc: htaLogo,
    text: "",
  },
  {
    name: "Digital Health",
    whiteSrc: "",
    colorSrc: "",
    logoSrc: digitalHealthLogo,
    text: "",
  },
  {
    name: "Hathos Interactive",
    whiteSrc: hathos,
    colorSrc: hathos,
    logoSrc: hathosLogo,
    text: `2017 - 2018
Lead Engineer`,
  },
  {
    name: "Design for America",
    whiteSrc: dfa,
    colorSrc: dfa,
    logoSrc: dfa,
    text: `2010 - 2014
Studio Lead, Workshop Coordinator`,
  },
];
export const schoolData: InstitutionData[] = [
  {
    name: "University of Utah",
    whiteSrc: uofuBizW,
    colorSrc: uofuBiz,
    text: `2020 - 2022
Master of Business Administration
Certificate: Information Systems`,
  },
  {
    name: "University of Utah",
    whiteSrc: uofuGamesW,
    colorSrc: uofuGames,
    text: `2016 - 2018
Master of Engineering, Arts, and Entertainment
Emphasis in Engineering Leadership`,
  },
  {
    name: "Northwestern University",
    whiteSrc: nuW,
    colorSrc: nu,
    text: `2009 - 2014
B.S. Biomedical Engineering
2nd Major: Psychology
Certificate: Human-Centered Design
Certificate: Entrepreneurship
Pre-med
`,
  },
];

export const allInstitutionsData: InstitutionData[] = [
  ...featuredEmployerData,
  ...otherEmployerData,
  ...schoolData,
];

export function getInstitutions(
  ...names: InstitutionData["name"][]
): InstitutionData[] {
  return names
    .map((name) =>
      allInstitutionsData.find((institution) => institution.name === name),
    )
    .filter(
      (institution): institution is InstitutionData =>
        institution !== undefined,
    );
}

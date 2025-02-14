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

import nuW from "@/assets/orgs/nu/nu-white.webp";
import nu from "@/assets/orgs/nu/nu-color.webp";

import uofuGamesW from "@/assets/orgs/uofu-games/uofu-games-white.webp";
import uofuGames from "@/assets/orgs/uofu-games/uofu-games-color.webp";

import uofuBizW from "@/assets/orgs/uofu-biz/uofu-biz-white.webp";
import uofuBiz from "@/assets/orgs/uofu-biz/uofu-biz-color.webp";

export interface InstitutionData {
  whiteSrc: string;
  colorSrc: string;
  logoSrc?: string;
  name: string;
  text: string;
}
export const featuredEmployerData: InstitutionData[] = [
  {
    whiteSrc: uhealthW,
    colorSrc: uhealth,
    logoSrc: uhealthLogo,
    name: "UHealth",
    text: `2019 - 2023
Software Design Engineer`,
  },
  {
    whiteSrc: aolW,
    colorSrc: aol,
    logoSrc: aolLogo,
    name: "Age of Learning",
    text: `2018 - 2019
Software Developer II`,
  },
  {
    whiteSrc: gapplabW,
    colorSrc: gapplab,
    logoSrc: gapplabLogo,
    name: "The GApp Lab",
    text: `2016 - 2018
Full-Stack Web Developer`,
  },
];
export const schoolData: InstitutionData[] = [
  {
    whiteSrc: uofuBizW,
    colorSrc: uofuBiz,
    name: "University of Utah",
    text: `2020 - 2022
Master of Business Administration
Certificate: Information Systems`,
  },
  {
    whiteSrc: uofuGamesW,
    colorSrc: uofuGames,
    name: "University of Utah",
    text: `2016 - 2018
Master of Engineering, Arts, and Entertainment
Emphasis in Engineering Leadership`,
  },
  {
    whiteSrc: nuW,
    colorSrc: nu,
    name: "Northwestern University",
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
  ...schoolData,
  {
    whiteSrc: hathos,
    colorSrc: hathos,
    logoSrc: hathosLogo,
    name: "Hathos Interactive",
    text: `2017 - 2018
Lead Engineer`,
  },
];

export function getEmployers(...names: string[]): InstitutionData[] {
  return names
    .map((name) =>
      allInstitutionsData.find((institution) => institution.name === name),
    )
    .filter(
      (institution): institution is InstitutionData =>
        institution !== undefined,
    );
}

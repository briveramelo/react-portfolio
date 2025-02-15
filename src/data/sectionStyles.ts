import { CustomPalette } from "../theme/theme.ts";
import { isColorDark } from "../utils/utils";
import React from "react";

class SectionStyle {
  backgroundKey: keyof CustomPalette["background"];
  textKey: keyof CustomPalette["text"];
  label: string;

  constructor(
    label: string,
    backgroundKey: keyof CustomPalette["background"],
    textKey: keyof CustomPalette["text"],
  ) {
    this.label = label;
    this.backgroundKey = backgroundKey;
    this.textKey = textKey;
  }

  backgroundColor(customPalette: CustomPalette): string {
    return customPalette.background[this.backgroundKey];
  }

  textColor(customPalette: CustomPalette): string {
    return customPalette.text[this.textKey];
  }

  isDark(customPalette: CustomPalette): boolean {
    return isColorDark(this.backgroundColor(customPalette));
  }
}

export const sectionStyles: Record<string, SectionStyle> = {
  home: new SectionStyle("Home", "default", "primary"),
  institutions: new SectionStyle("Institutions", "contrast", "secondary"),
  experience: new SectionStyle("Experience", "default", "primary"),
  projects: new SectionStyle("Projects", "contrast", "secondary"),
  testimonials: new SectionStyle("Testimonials", "default", "primary"),
  recent: new SectionStyle("Recent", "contrast", "secondary"),
  contact: new SectionStyle("Contact", "default", "primary"),
};

export interface NavLink {
  ref: React.RefObject<HTMLElement>;
  href: string;
  label: string;
  offset?: number;
}

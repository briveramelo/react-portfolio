import { CustomPalette } from "../theme";
import { cp, isColorDark } from "../utils/utils";
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

  get backgroundColor(): string {
    return cp(`background.${this.backgroundKey}`);
  }

  get textColor(): string {
    return cp(`text.${this.textKey}`);
  }

  get isDark(): boolean {
    return isColorDark(this.backgroundColor);
  }
}

export const sectionStyles: Record<string, SectionStyle> = {
  home: new SectionStyle("Home", "default", "primary"),
  employers: new SectionStyle("Employers", "contrast", "secondary"),
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

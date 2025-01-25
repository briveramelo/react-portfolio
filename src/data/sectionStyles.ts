import { CustomPalette } from "../theme";
import { cp, isColorDark } from "../utils/utils";

class SectionStyle {
  backgroundKey: keyof CustomPalette["background"];
  textKey: keyof CustomPalette["text"];

  constructor(
    backgroundKey: keyof CustomPalette["background"],
    textKey: keyof CustomPalette["text"],
  ) {
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
  home: new SectionStyle("default", "primary"),
  employers: new SectionStyle("contrast", "secondary"),
  skills: new SectionStyle("default", "primary"),
  work: new SectionStyle("contrast", "secondary"),
  testimonials: new SectionStyle("default", "primary"),
  recent: new SectionStyle("contrast", "secondary"),
  contact: new SectionStyle("default", "primary"),
};

import React from "react";
import { Header } from "../components/Header";
import { Hero } from "./sections/Hero";
import { SkillsSection } from "./sections/SkillsSection";
import { Projects } from "./sections/Projects";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection";
import { Employers } from "./sections/Employers";
import { useCustomPalette } from "../theme";
import { cp } from "../utils/utils";

export function HomePage() {
  const { mode } = useCustomPalette();

  return (
    <>
      <Header />
      <Hero
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <Employers
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
        useDarkImages={mode !== "dark"}
      />
      <SkillsSection
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <Projects
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
      />
      <TestimonialsSection
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <RecentWorkSection
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
      />
      <ContactSection
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
    </>
  );
}

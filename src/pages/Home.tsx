import React, { useRef } from "react";
import { Header } from "../components/Header";
import { Hero } from "./sections/Hero";
import { SkillsSection } from "./sections/SkillsSection";
import { Projects } from "./sections/Projects";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection";
import { Employers } from "./sections/Employers";
import { ThemeMode, useCustomPalette } from "../theme";
import { cp } from "../utils/utils";

export function HomePage() {
  const { mode } = useCustomPalette();

  // Create refs for each section
  const heroRef = useRef<HTMLElement | null>(null);
  const employersRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const recentWorkRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const sectionRefs = [
    heroRef,
    employersRef,
    skillsRef,
    projectsRef,
    testimonialsRef,
    recentWorkRef,
    contactRef,
  ];

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <Hero
        ref={heroRef}
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <Employers
        ref={employersRef}
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
        useDarkImages={mode !== ThemeMode.Dark}
      />
      <SkillsSection
        ref={skillsRef}
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <Projects
        ref={projectsRef}
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
      />
      <TestimonialsSection
        ref={testimonialsRef}
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
      <RecentWorkSection
        ref={recentWorkRef}
        backgroundColor={cp("background.contrast")}
        textColor={cp("text.secondary")}
      />
      <ContactSection
        ref={contactRef}
        backgroundColor={cp("background.default")}
        textColor={cp("text.primary")}
      />
    </>
  );
}

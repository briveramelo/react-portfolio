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
import { cp, isColorDark } from "../utils/utils";

export function HomePage() {
  const { mode } = useCustomPalette();

  const sectionStyles: Record<
    string,
    { backgroundColor: string; textColor: string; isDark: boolean }
  > = {
    home: {
      backgroundColor: cp("background.default"),
      textColor: cp("text.primary"),
      isDark: isColorDark(cp("background.default")),
    },
    employers: {
      backgroundColor: cp("background.contrast"),
      textColor: cp("text.secondary"),
      isDark: isColorDark(cp("background.contrast")),
    },
    skills: {
      backgroundColor: cp("background.default"),
      textColor: cp("text.primary"),
      isDark: isColorDark(cp("background.default")),
    },
    work: {
      backgroundColor: cp("background.contrast"),
      textColor: cp("text.secondary"),
      isDark: isColorDark(cp("background.contrast")),
    },
    testimonials: {
      backgroundColor: cp("background.default"),
      textColor: cp("text.primary"),
      isDark: isColorDark(cp("background.default")),
    },
    recent: {
      backgroundColor: cp("background.contrast"),
      textColor: cp("text.secondary"),
      isDark: isColorDark(cp("background.contrast")),
    },
    contact: {
      backgroundColor: cp("background.default"),
      textColor: cp("text.primary"),
      isDark: isColorDark(cp("background.default")),
    },
  };

  const currentSectionId = window.location.hash.replace("#", "");
  const initialColors =
    sectionStyles[currentSectionId] || sectionStyles["home"];

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
      <Header
        sectionRefs={sectionRefs}
        defaultBackgroundColor={initialColors.backgroundColor}
        defaultTextColor={initialColors.textColor}
        defaultIsBackgroundDark={initialColors.isDark}
      />
      <Hero
        ref={heroRef}
        id="home"
        backgroundColor={sectionStyles.home.backgroundColor}
        textColor={sectionStyles.home.textColor}
      />
      <Employers
        ref={employersRef}
        id="employers"
        backgroundColor={sectionStyles.employers.backgroundColor}
        textColor={sectionStyles.employers.textColor}
        useDarkImages={mode !== ThemeMode.Dark}
      />
      <SkillsSection
        ref={skillsRef}
        id="skills"
        backgroundColor={sectionStyles.skills.backgroundColor}
        textColor={sectionStyles.skills.textColor}
      />
      <Projects
        ref={projectsRef}
        id="work"
        backgroundColor={sectionStyles.work.backgroundColor}
        textColor={sectionStyles.work.textColor}
      />
      <TestimonialsSection
        ref={testimonialsRef}
        id="testimonials"
        backgroundColor={sectionStyles.testimonials.backgroundColor}
        textColor={sectionStyles.testimonials.textColor}
      />
      <RecentWorkSection
        ref={recentWorkRef}
        id="recent"
        backgroundColor={sectionStyles.recent.backgroundColor}
        textColor={sectionStyles.recent.textColor}
      />
      <ContactSection
        ref={contactRef}
        id="contact"
        backgroundColor={sectionStyles.contact.backgroundColor}
        textColor={sectionStyles.contact.textColor}
      />
    </>
  );
}

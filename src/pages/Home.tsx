import React, { useRef } from "react";
import { Header } from "./sections/Header.tsx";
import { HeroSection } from "./sections/HeroSection.tsx";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection.tsx";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection.tsx";
import { EmployersSection } from "./sections/EmployersSection.tsx";
import { ThemeMode, useCustomPalette } from "../theme";
import { NavLink, sectionStyles } from "../data/sectionStyles";
import AnimatedCursor from "./components/specialty/AnimatedCursor.tsx";

export function HomePage() {
  const { mode } = useCustomPalette();

  const currentSectionId = window.location.hash.replace("#", "");
  const initialColors =
    sectionStyles[currentSectionId] || sectionStyles["home"];

  const heroRef = useRef<HTMLElement | null>(null);
  const heroLinkRef = useRef<HTMLElement | null>(null);
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

  const navigationLinks: NavLink[] = [
    { ref: heroLinkRef, href: "#home", label: "Home", offset: 200 },
    { ref: skillsRef, href: "#experience", label: "Experience" },
    { ref: projectsRef, href: "#projects", label: "Projects" },
    { ref: testimonialsRef, href: "#testimonials", label: "Testimonials" },
    { ref: contactRef, href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Header
        sectionRefs={sectionRefs}
        navigationLinks={navigationLinks}
        defaultBackgroundColor={initialColors.backgroundColor}
        defaultTextColor={initialColors.textColor}
        defaultIsBackgroundDark={initialColors.isDark}
      />
      <HeroSection
        ref={heroRef}
        heroLinkRef={heroLinkRef}
        id="home"
        backgroundColor={sectionStyles.home.backgroundColor}
        textColor={sectionStyles.home.textColor}
      />
      <EmployersSection
        ref={employersRef}
        id="employers"
        backgroundColor={sectionStyles.employers.backgroundColor}
        textColor={sectionStyles.employers.textColor}
        useDarkImages={mode !== ThemeMode.Dark}
      />
      <SkillsSection
        ref={skillsRef}
        id="experience"
        backgroundColor={sectionStyles.experience.backgroundColor}
        textColor={sectionStyles.experience.textColor}
      />
      <ProjectsSection
        ref={projectsRef}
        id="projects"
        backgroundColor={sectionStyles.projects.backgroundColor}
        textColor={sectionStyles.projects.textColor}
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

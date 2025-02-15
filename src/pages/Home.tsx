import React, { useRef } from "react";
import { Header } from "./sections/Header.tsx";
import { HeroSection } from "./sections/HeroSection.tsx";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection.tsx";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection.tsx";
import { InstitutionsSection } from "./sections/InstitutionsSection.tsx";
import { ThemeMode, useCustomPalette } from "../theme/theme.ts";
import { NavLink, sectionStyles } from "../data/sectionStyles";

export function HomePage() {
  const cp = useCustomPalette();

  const currentSectionId = window.location.hash.replace("#", "");
  const initialColors =
    sectionStyles[currentSectionId] || sectionStyles["home"];

  const heroRef = useRef<HTMLElement | null>(null);
  const heroLinkRef = useRef<HTMLElement | null>(null);
  const institutionsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const recentWorkRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs = [
    heroRef,
    institutionsRef,
    skillsRef,
    projectsRef,
    testimonialsRef,
    recentWorkRef,
    contactRef,
  ];

  const desktopHiddenNavLinks: string[] = [
    "#home",
    "#institutions",
    // "#recent",
  ];

  const allNavLinks: NavLink[] = [
    { ref: heroLinkRef, href: "#home", label: "Home", offset: 200 },
    { ref: institutionsRef, href: "#institutions", label: "Institutions" },
    { ref: skillsRef, href: "#experience", label: "Experience" },
    { ref: projectsRef, href: "#projects", label: "Projects" },
    { ref: testimonialsRef, href: "#testimonials", label: "Testimonials" },
    { ref: recentWorkRef, href: "#recent", label: "Recent" },
    { ref: contactRef, href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Header
        sectionRefs={sectionRefs}
        desktopHiddenNavigationLinks={desktopHiddenNavLinks}
        navigationLinks={allNavLinks}
        defaultBackgroundColor={initialColors.backgroundColor(cp)}
        defaultTextColor={initialColors.textColor(cp)}
        defaultIsBackgroundDark={initialColors.isDark(cp)}
      />
      <HeroSection
        ref={heroRef}
        heroLinkRef={heroLinkRef}
        id="home"
        backgroundColor={sectionStyles.home.backgroundColor(cp)}
        textColor={sectionStyles.home.textColor(cp)}
      />
      <InstitutionsSection
        ref={institutionsRef}
        id="institutions"
        backgroundColor={sectionStyles.institutions.backgroundColor(cp)}
        textColor={sectionStyles.institutions.textColor(cp)}
        invertImages={cp.mode !== ThemeMode.Dark}
      />
      <SkillsSection
        ref={skillsRef}
        id="experience"
        backgroundColor={sectionStyles.experience.backgroundColor(cp)}
        textColor={sectionStyles.experience.textColor(cp)}
      />
      <ProjectsSection
        ref={projectsRef}
        id="projects"
        backgroundColor={sectionStyles.projects.backgroundColor(cp)}
        textColor={sectionStyles.projects.textColor(cp)}
      />
      <TestimonialsSection
        ref={testimonialsRef}
        id="testimonials"
        backgroundColor={sectionStyles.testimonials.backgroundColor(cp)}
        textColor={sectionStyles.testimonials.textColor(cp)}
      />
      <RecentWorkSection
        ref={recentWorkRef}
        id="recent"
        backgroundColor={sectionStyles.recent.backgroundColor(cp)}
        textColor={sectionStyles.recent.textColor(cp)}
      />
      <ContactSection
        ref={contactRef}
        id="contact"
        backgroundColor={sectionStyles.contact.backgroundColor(cp)}
        textColor={sectionStyles.contact.textColor(cp)}
      />
    </>
  );
}

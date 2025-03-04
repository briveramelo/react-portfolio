import React from "react";
import { useOutletContext } from "react-router-dom";
import { HeroSection } from "./sections/HeroSection";
import { InstitutionsSection } from "./sections/InstitutionsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { ThemeMode, useCustomPalette } from "../theme/theme";
import { sectionStyles } from "../data/sectionStyles";
import { SectionRef } from "./MainLayout";

interface LayoutContext {
  sections: SectionRef[];
  cp: any;
}

export function HomePage() {
  const { sections } = useOutletContext<LayoutContext>();
  const cp = useCustomPalette();

  const getSectionRef = (label: SectionRef["label"]) =>
    sections.find((s) => s.label === label)?.ref;

  return (
    <>
      <HeroSection
        ref={getSectionRef("Home")}
        homeLinkRef={getSectionRef("HomeLink")}
        id="home"
        backgroundColor={sectionStyles.home.backgroundColor(cp)}
        textColor={sectionStyles.home.textColor(cp)}
      />
      <InstitutionsSection
        ref={getSectionRef("Institutions")}
        id="institutions"
        backgroundColor={sectionStyles.institutions.backgroundColor(cp)}
        textColor={sectionStyles.institutions.textColor(cp)}
        invertImages={cp.mode !== ThemeMode.Dark}
      />
      <SkillsSection
        ref={getSectionRef("Strengths")}
        id="strengths"
        backgroundColor={sectionStyles.strengths.backgroundColor(cp)}
        textColor={sectionStyles.strengths.textColor(cp)}
      />
      <ProjectsSection
        ref={getSectionRef("Projects")}
        id="projects"
        backgroundColor={sectionStyles.projects.backgroundColor(cp)}
        textColor={sectionStyles.projects.textColor(cp)}
      />
      <TestimonialsSection
        ref={getSectionRef("Testimonials")}
        id="testimonials"
        backgroundColor={sectionStyles.testimonials.backgroundColor(cp)}
        textColor={sectionStyles.testimonials.textColor(cp)}
      />
      <ContactSection
        ref={getSectionRef("Contact")}
        id="contact"
        backgroundColor={sectionStyles.contact.backgroundColor(cp)}
        textColor={sectionStyles.contact.textColor(cp)}
      />
    </>
  );
}

import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { RecentWorkSection } from "../components/RecentWorkSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { WorkedWith } from "../components/WorkedWith";
import { useTheme } from "@mui/material";

export function HomePage() {
  const theme = useTheme();
  const themeName = theme.palette.type;
  return (
    <>
      <Header />
      <Hero backgroundColor={"background.default"} textColor={"text.primary"} />
      <WorkedWith
        backgroundColor={"background.contrast"}
        textColor={"text.secondary"}
        useDarkImages={themeName !== "dark"}
      />
      <SkillsSection
        backgroundColor={"background.default"}
        textColor={"text.primary"}
      />
      <CaseStudiesSection
        backgroundColor={"background.contrast"}
        textColor={"text.secondary"}
      />
      <TestimonialsSection
        backgroundColor={"background.default"}
        textColor={"text.primary"}
      />
      <RecentWorkSection
        backgroundColor={"background.contrast"}
        textColor={"text.secondary"}
      />
      <ContactSection
        backgroundColor={"background.default"}
        textColor={"text.primary"}
      />
      <Footer
        backgroundColor={"background.default"}
        textColor={"text.primary"}
      />
    </>
  );
}

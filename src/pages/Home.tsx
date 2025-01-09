import React from "react";
import { Header } from "../components/Header";
import { Hero } from "./sections/Hero";
import { SkillsSection } from "./sections/SkillsSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { WorkedWith } from "./sections/WorkedWith";
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

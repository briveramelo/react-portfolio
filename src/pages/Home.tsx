import React, { useRef } from "react";
import { Header } from "../components/Header";
import { Hero } from "./sections/Hero";
import { SkillsSection } from "./sections/SkillsSection";
import { Projects } from "./sections/Projects";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentWorkSection } from "./sections/RecentWorkSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "../components/Footer";
import { Employers } from "./sections/Employers";
import { useTheme } from "@mui/material";

export function HomePage() {
  const theme = useTheme();
  const themeName = theme.palette.type;
  const heartRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Header />
      <Hero backgroundColor={"background.default"} textColor={"text.primary"} />
      <Employers
        backgroundColor={"background.contrast"}
        textColor={"text.secondary"}
        useDarkImages={themeName !== "dark"}
      />
      <SkillsSection
        backgroundColor={"background.default"}
        textColor={"text.primary"}
      />
      <Projects
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
        heartRef={heartRef}
      />
      <Footer
        backgroundColor={"background.default"}
        textColor={"text.primary"}
        heartRef={heartRef}
      />
    </>
  );
}

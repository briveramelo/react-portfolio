import React, { createRef, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./sections/Header";
import { NavLink, sectionStyles } from "../data/sectionStyles";
import { useCustomPalette } from "../theme/theme";

export interface SectionRef {
  label:
    | "Home"
    | "HomeLink"
    | "Institutions"
    | "Strengths"
    | "Projects"
    | "Testimonials"
    | "Contact";
  ref: React.RefObject<HTMLElement> | undefined;
}

export const MainLayout: React.FC = () => {
  const cp = useCustomPalette();

  const sections: SectionRef[] = [
    { label: "Home", ref: useRef<HTMLElement>(null) },
    { label: "HomeLink", ref: useRef<HTMLElement>(null) },
    { label: "Institutions", ref: useRef<HTMLElement>(null) },
    { label: "Strengths", ref: useRef<HTMLElement>(null) },
    { label: "Projects", ref: useRef<HTMLElement>(null) },
    { label: "Testimonials", ref: useRef<HTMLElement>(null) },
    { label: "Contact", ref: useRef<HTMLElement>(null) },
  ];

  const allNavLinks: NavLink[] = [
    {
      ref: sections.find((s) => s.label === "HomeLink")!.ref,
      href: "/home",
      label: "Home",
      offset: 200,
    },
    {
      ref: sections.find((s) => s.label === "Institutions")!.ref,
      href: "/institutions",
      label: "Institutions",
    },
    {
      ref: sections.find((s) => s.label === "Strengths")!.ref,
      href: "/strengths",
      label: "Strengths",
    },
    {
      ref: sections.find((s) => s.label === "Projects")!.ref,
      href: "/projects",
      label: "Projects",
    },
    {
      ref: sections.find((s) => s.label === "Testimonials")!.ref,
      href: "/testimonials",
      label: "Testimonials",
    },
    {
      ref: sections.find((s) => s.label === "Contact")!.ref,
      href: "/contact",
      label: "Contact",
    },
  ];
  const desktopHiddenNavLinks: string[] = ["/home"];

  return (
    <>
      <Header
        sectionRefs={sections.map((s) => s.ref)}
        desktopHiddenNavigationLinks={desktopHiddenNavLinks}
        navigationLinks={allNavLinks}
        defaultBackgroundColor={sectionStyles.home.backgroundColor(cp)}
        defaultTextColor={sectionStyles.home.textColor(cp)}
        defaultIsBackgroundDark={sectionStyles.home.isDark?.(cp) || false}
      />
      <Outlet context={{ sections }} />
    </>
  );
};

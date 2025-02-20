import { Project } from "./projectData.ts";
import React from "react";

export interface AudioButtonData {
  audioPath: string;
  // x and y can be defined as percentages (0 to 100) of the image width/height
  x: number;
  y: number;
}

export interface MediaItem {
  chapterTitle?: string;
  src: string; // eg: https://www.youtube-nocookie.com/embed/{videoId}?rel=0 for privacy-enhanced youtube links
  alt: string;
  type:
    | "firebaseImage"
    | "firebaseVideoAsGif"
    | "image"
    | "firebasePdf"
    | "pdf"
    | "youtube"
    | "quote"
    | "firebaseImageWithAudioButtons";
  text?: string;
  audioButtons?: AudioButtonData[];
  quoteWidth?: string;
  playAsGif?: boolean;
}

export interface ProjectLink {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export class ProjectDetail {
  public title: Project["title"];
  public media: MediaItem[];
  public links: ProjectLink[];

  constructor({
    title,
    media,
    links,
  }: {
    title: Project["title"];
    media: MediaItem[];
    links: ProjectLink[];
  }) {
    this.title = title;
    this.media = media;
    this.links = links;
  }
}

export const dash = "&#45;";
export const _ = "&nbsp;"; //whitespace character. When on its own line, produces a line break.
export const iconStyle = { width: 20, height: 20, color: "inherit" };

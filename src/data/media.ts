export interface MediaItem {
  src: string;
  alt: string;
  scaleFactor?: number;
  text?: string;
  type: "firebaseImage" | "image" | "firebasePdf" | "pdf" | "youtube"; // New type field
}

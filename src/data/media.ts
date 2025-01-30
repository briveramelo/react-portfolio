export interface MediaItem {
  src: string;
  alt: string;
  scaleFactor?: number;
  type: "firebaseImage" | "image" | "firebasePdf" | "pdf" | "youtube"; // New type field
}

export interface MediaItem {
  src: string;
  alt: string;
  text?: string;
  type: "firebaseImage" | "image" | "firebasePdf" | "pdf" | "youtube"; // New type field
}

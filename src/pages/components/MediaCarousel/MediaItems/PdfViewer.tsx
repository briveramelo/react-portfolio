import React, { useEffect, useRef } from "react";
import EmbedPDF from "/src/vendor/embedpdf.bundle.js";

interface PdfViewerProps {
  pdfUrl: string;
  isActive: boolean;
  borderRadius: string;
  startPage?: number;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  pdfUrl,
  isActive,
  borderRadius,
  startPage = 1,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<any>(null); // EmbedPDF instance


  // Initialize / teardown the viewer
  useEffect(() => {
    if (!isActive) {
      return;
    }
    if (!containerRef.current) {
      return;
    }

    // If we already have a viewer for a previous pdfUrl, clear it.
    if (viewerRef.current) {
      try {
        // Best-effort cleanup if the instance exposes a destroy method
        viewerRef.current.destroy?.();
      } catch {
        /* no-op */
      }
      viewerRef.current = null;
      containerRef.current.innerHTML = "";
    }

    let cancelled = false;

    (async () => {
      try {
        const instance = await EmbedPDF.init({
          type: "container",
          target: containerRef.current!,
          src: pdfUrl,
          // You can configure additional UI options here:
          // e.g. hideToolbar: false, initialZoom: "fitWidth"
        });

        // Navigate to startPage if provided (>1) and API supports it
        if (!cancelled && startPage > 1 && instance && typeof instance.goToPage === "function") {
          try {
            instance.goToPage(startPage);
          } catch {
            /* ignore if method signature differs */
          }
        }

        if (!cancelled) {
          viewerRef.current = instance;
        }
      } catch (e) {
        // You might want to surface this via an error boundary or toast
        // For now we silently fail to avoid crashing the app
        // console.error("Failed to initialize PDF viewer", e);
      }
    })();

    return () => {
      cancelled = true;
      if (viewerRef.current) {
        try {
          viewerRef.current.destroy?.();
        } catch {
          /* no-op */
        }
        viewerRef.current = null;
      }
    };
  }, [pdfUrl, isActive, startPage]);

  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius,
        overflow: "hidden",
        position: "relative",
        background: "#fff",
      }}
      data-pdf-url={pdfUrl}
    />
  );
};

export default React.memo(PdfViewer);
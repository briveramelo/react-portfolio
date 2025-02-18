import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, CircularProgress } from "@mui/material";
import { useCustomPalette } from "../../../../theme/theme";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfControls from "./PdfControls";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const PdfViewerContext = React.createContext<any>({});

interface PdfViewerProps {
  pdfUrl: string;
  isActive: boolean;
  borderRadius: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  pdfUrl,
  isActive,
  borderRadius,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfInstanceRef = useRef<any>(null);
  const { background } = useCustomPalette();
  const controlBarHeight = "40px";

  const recalcScaleForPage = (pageNum: number) => {
    if (!isActive || !pdfInstanceRef.current || !containerRef.current) return;

    pdfInstanceRef.current.getPage(pageNum).then((page: any) => {
      if (!containerRef.current) return;
      const viewport = page.getViewport({ scale: 1 });
      const containerRect = containerRef.current.getBoundingClientRect();
      const controlBarHeightValue = parseFloat(controlBarHeight) || 40;
      const availableHeight = containerRect.height - controlBarHeightValue;
      const newScale = Math.min(
        containerRect.width / viewport.width,
        availableHeight / viewport.height,
      );
      setScale(newScale);
    });
  };

  const onDocumentLoadSuccess = (pdf: any) => {
    pdfInstanceRef.current = pdf;
    setNumPages(pdf.numPages);
    setPageNumber(1);
  };

  const onPageLoadSuccess = () => {
    setIsLoaded(true);
  };

  // Rescale on displaying a new page
  useEffect(() => {
    recalcScaleForPage(pageNumber);
  }, [isActive, pageNumber]);

  const contextValue = {
    pdfUrl,
    containerRef,
    pdfInstanceRef,
    pageNumber,
    setPageNumber,
    numPages,
    scale,
    setScale,
    recalcScaleForPage,
  };

  return (
    <PdfViewerContext.Provider value={contextValue}>
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          position: "relative",
          borderRadius,
        }}
      >
        <PdfControls />

        {/* PDF Document */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: background.dark,
          }}
        >
          {!isLoaded && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) =>
              console.error("Error while loading document:", error)
            }
          >
            <Page
              onRenderSuccess={onPageLoadSuccess}
              pageNumber={pageNumber}
              scale={scale}
            />
          </Document>
        </Box>
      </Box>
    </PdfViewerContext.Provider>
  );
};

export default PdfViewer;

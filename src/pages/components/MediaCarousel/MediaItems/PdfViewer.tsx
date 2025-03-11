import React, { useState, useRef, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, CircularProgress } from "@mui/material";
import { useCustomPalette } from "../../../../theme/theme.ts";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfControls from "../Controls/PdfControls.tsx";
import { v4 as uuidv4 } from "uuid";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const PdfViewerContext = React.createContext<any>({});

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
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  const [isDocLoaded, setIsDocLoaded] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(startPage);
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfInstanceRef = useRef<any>(null);
  const { background } = useCustomPalette();
  const controlBarHeight = "40px";
  const isMountedRef = useRef(true);
  const key = uuidv4();

  const recalcScaleForPage = useCallback(
    (pageNum: number) => {
      const tryRecalc = () => {
        if (
          !isMountedRef.current ||
          !isActive ||
          !pdfInstanceRef.current ||
          !containerRef.current ||
          !isDocLoaded
        ) {
          return;
        }

        pdfInstanceRef.current.getPage(pageNum).then((page: any) => {
          if (!isMountedRef.current || !containerRef.current) return;

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

      tryRecalc();
    },
    [isActive, isDocLoaded],
  );

  const onDocumentLoadSuccess = useCallback(
    (pdf: any) => {
      pdfInstanceRef.current = pdf;
      setNumPages(pdf.numPages);
      setPageNumber(Math.min(startPage, pdf.numPages));
      setIsDocLoaded(true);
    },
    [startPage],
  );

  const onPageLoadSuccess = useCallback(() => {
    setIsPageLoaded(true);
  }, []);

  // Rescale on displaying a new page
  useEffect(() => {
    recalcScaleForPage(pageNumber);
  }, [isActive, pageNumber]);

  // mark as unmounted to avoid null refs in callbacks when dismounted
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

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
            minWidth: "max-content",
          }}
        >
          {!isPageLoaded && (
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
            key={key}
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

export default React.memo(PdfViewer);

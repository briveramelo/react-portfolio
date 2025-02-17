import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCustomPalette } from "../../../../theme/theme";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import FitScreenIcon from "@mui/icons-material/FitScreen"; // Icon for fit-to-page
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // Icon for open in new tab

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfUrl: string;
  isActive: boolean;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, isActive }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [editingZoom, setEditingZoom] = useState<boolean>(false);
  const [zoomInput, setZoomInput] = useState<string>("100");
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfInstanceRef = useRef<any>(null);
  const zoomInputRef = useRef<HTMLInputElement>(null);
  const controlBarHeight = "40px";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const zoomIncrement = isMobile ? 0.1 : 0.2;
  const { background } = useCustomPalette();

  const recalcScaleForPage = (pageNum: number) => {
    if (!isActive || !pdfInstanceRef?.current || !containerRef?.current) return;

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
      setZoomInput(String(Math.round(newScale * 100)));
    });
  };

  const onDocumentLoadSuccess = (pdf: any) => {
    pdfInstanceRef.current = pdf;
    setNumPages(pdf.numPages);
    setPageNumber(1);
  };

  // Whenever pageNumber changes, recalc the scale.
  useEffect(() => {
    recalcScaleForPage(pageNumber);
  }, [isActive, pageNumber]);

  // When entering editing mode, automatically select the input text.
  useEffect(() => {
    if (editingZoom && zoomInputRef.current) {
      zoomInputRef.current.select();
    }
  }, [editingZoom]);

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => {
    const newScale = scale + zoomIncrement;
    setScale(newScale);
    setZoomInput(String(Math.round(newScale * 100)));
  };
  const zoomOut = () => {
    const newScale = Math.max(scale - zoomIncrement, 0.2);
    setScale(newScale);
    setZoomInput(String(Math.round(newScale * 100)));
  };

  const handleZoomInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setZoomInput(event.target.value);
  };

  const handleZoomInputBlur = () => {
    const parsed = parseFloat(zoomInput);
    if (!isNaN(parsed) && parsed > 0) {
      setScale(parsed / 100);
    } else {
      setZoomInput(String(Math.round(scale * 100)));
    }
    setEditingZoom(false);
  };

  const handleZoomInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      handleZoomInputBlur();
    }
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  // Common circular button styles
  const iconStyle = { fontSize: "16px" };
  const circularButtonSx = {
    minWidth: "24px",
    width: "24px",
    height: "24px",
    padding: 0,
    borderRadius: "50%",
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      {/* Sticky Control Bar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: background.dark,
          zIndex: 10,
          height: controlBarHeight,
          p: 0.5,
        }}
      >
        {/* Left Group: Page Controls */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            size="small"
            sx={circularButtonSx}
          >
            {"<"}
          </Button>
          <Typography variant="body2" sx={{ color: "white" }}>
            {pageNumber} / {numPages}
          </Typography>
          <Button
            variant="contained"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            size="small"
            sx={circularButtonSx}
          >
            {">"}
          </Button>
        </Box>

        {/* Center Group: Zoom Controls */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={zoomOut}
            size="small"
            sx={circularButtonSx}
          >
            –
          </Button>
          {editingZoom ? (
            <TextField
              value={zoomInput}
              onChange={handleZoomInputChange}
              onBlur={handleZoomInputBlur}
              onKeyDown={handleZoomInputKeyDown}
              variant="standard"
              inputRef={zoomInputRef}
              // Override the spinner buttons with custom styling
              inputProps={{
                style: {
                  textAlign: "center",
                  color: "white",
                  padding: 0,
                  width: "40px",
                  // Remove spinner buttons in Chrome, Safari, Edge, Opera
                  MozAppearance: "textfield",
                },
                type: "number",
                min: 1,
              }}
              // Global CSS override to remove spinners in WebKit browsers
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    display: "none",
                  },
              }}
            />
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => setEditingZoom(true)}
            >
              {Math.round(scale * 100)}%
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={zoomIn}
            size="small"
            sx={circularButtonSx}
          >
            +
          </Button>
          {/* Fit to Page Button */}
          <Button
            variant="contained"
            onClick={() => recalcScaleForPage(pageNumber)}
            size="small"
            sx={circularButtonSx}
          >
            <FitScreenIcon sx={iconStyle} />
          </Button>
        </Box>

        {/* Right Group: Open and Download Buttons */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={handleOpenInNewTab}
            size="small"
            sx={circularButtonSx}
          >
            <OpenInNewIcon sx={iconStyle} />
          </Button>
        </Box>
      </Box>

      {/* PDF Document Overlapping Under the Control Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) =>
            console.error("Error while loading document:", error)
          }
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </Box>
    </Box>
  );
};

export default PdfViewer;

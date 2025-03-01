import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useCustomPalette } from "../../../theme/theme.ts";
import { PdfViewerContext } from "./MediaItems/PdfViewer.tsx";
import { MediaControlContext } from "./MediaControlContext.tsx";

const PdfControls: React.FC = () => {
  const {
    pdfUrl,
    pageNumber,
    setPageNumber,
    numPages,
    scale,
    setScale,
    recalcScaleForPage,
    containerRef,
  } = useContext(PdfViewerContext);

  const { setGoToPage } = useContext(MediaControlContext);
  // Set the goToPage function for MediaControlContext to update PDF pages.
  useEffect(() => {
    setGoToPage((page: number) => {
      setPageNumber(page);
    });
  }, [setGoToPage, setPageNumber]);

  // handle panning with middle mouse click
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;
    let isPanning = false;

    const handleMouseDown = (e: MouseEvent) => {
      // Only trigger for middle mouse button
      if (e.button !== 1) return;
      e.preventDefault(); // Prevent default autoscroll behavior
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isPanning) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      container.scrollLeft = scrollLeft - dx;
      container.scrollTop = scrollTop - dy;
    };

    const handleMouseUp = () => {
      isPanning = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    container.addEventListener("mousedown", handleMouseDown);
    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const [editingZoom, setEditingZoom] = useState<boolean>(false);
  const [zoomInput, setZoomInput] = useState<string>(
    Math.round(scale * 100).toString(),
  );
  const zoomInputRef = useRef<HTMLInputElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const zoomIncrement = isMobile ? 0.1 : 0.2;
  const { background } = useCustomPalette();
  const controlBarHeight = "40px";

  // Whenever the scale changes update the input display
  useEffect(() => {
    setZoomInput(String(Math.round(scale * 100)));
  }, [scale]);

  // Auto-select input text when editing
  useEffect(() => {
    if (editingZoom && zoomInputRef.current) {
      zoomInputRef.current.select();
    }
  }, [editingZoom]);

  const goToPrevPage = () =>
    setPageNumber((prev: number) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev: number) => Math.min(prev + 1, numPages));

  const zoomIn = () => {
    const newScale = scale + zoomIncrement;
    setScale(newScale);
    setZoomInput(String(Math.round(newScale * 100)));
  };

  const zoomOut = () => {
    const newScale = Math.max(scale - zoomIncrement, 0.05);
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
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: background.dark,
        zIndex: 1,
        height: controlBarHeight,
        width: "100%",
        p: 1,
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
            inputProps={{
              style: {
                textAlign: "center",
                color: "white",
                padding: 0,
                width: "40px",
                MozAppearance: "textfield",
              },
              type: "number",
              min: 1,
            }}
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
        <Button
          variant="contained"
          onClick={() => recalcScaleForPage(pageNumber)}
          size="small"
          sx={circularButtonSx}
        >
          <FitScreenIcon sx={iconStyle} />
        </Button>
      </Box>

      {/* Right Group: Open in New Tab */}
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
  );
};

export default PdfControls;

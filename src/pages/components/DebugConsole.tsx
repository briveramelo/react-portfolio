import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  SxProps,
  Theme,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ClearAllIcon from "@mui/icons-material/ClearAll";

interface LogEntry {
  type: "log" | "warn" | "error";
  message: string;
}

/**
 * Determines whether to display the debug console based on environment.
 */
function isLocalNetworkOrDebug(): boolean {
  const hostname = window.location.hostname;
  return (
    // hostname === "localhost" ||
    // hostname === "127.0.0.1" ||
    // hostname.endsWith(".local") ||
    hostname.includes("ngrok") ||
    hostname.includes("192.168.") ||
    hostname.includes("10.")
  );
}

const DebugConsole: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  // Share format state: "plain" for text, "file" for a .txt file.
  const [shareFormat, setShareFormat] = useState<"plain" | "file">("plain");

  useEffect(() => {
    if (!isLocalNetworkOrDebug()) return;

    // Save original console methods.
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    // Helper to capture logs.
    const capture = (type: LogEntry["type"], args: any[]) => {
      setLogs((prevLogs) => [
        ...prevLogs,
        { type, message: args.map(String).join(" ") },
      ]);
    };

    // Override console methods.
    console.log = (...args: any[]) => {
      capture("log", args);
      originalLog.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      capture("warn", args);
      originalWarn.apply(console, args);
    };

    console.error = (...args: any[]) => {
      capture("error", args);
      originalError.apply(console, args);
    };

    // Cleanup: restore original methods on unmount.
    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  if (!isLocalNetworkOrDebug()) {
    return null;
  }

  // sharing only works with https (ie: release build or ngrok)
  // see vite.config.ts server.allowedHosts to enable access
  const shareLogs = async () => {
    const logText = logs.map((log) => `${log.type}: ${log.message}`).join("\n");
    if (navigator.share) {
      try {
        if (shareFormat === "plain") {
          await navigator.share({
            title: "Debug Logs",
            text: logText,
          });
        } else {
          // Create a .txt file from logs.
          const blob = new Blob([logText], { type: "text/plain" });
          const file = new File([blob], "logs.txt", { type: "text/plain" });
          await navigator.share({
            title: "Debug Logs",
            files: [file],
          });
        }
      } catch (error) {
        console.error("Error sharing logs", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  // Panel styling using MUI Box
  const panelSx: SxProps<Theme> = fullScreen
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#222",
        color: "#fff",
        overflowY: "auto",
        zIndex: 1300,
        fontFamily: "monospace",
        fontSize: "14px",
      }
    : {
        position: "fixed",
        bottom: "50px",
        left: 0,
        width: "100%",
        maxHeight: "200px",
        backgroundColor: "#222",
        color: "#fff",
        overflowY: "auto",
        zIndex: 1300,
        fontFamily: "monospace",
        fontSize: "12px",
      };

  return (
    <>
      {/* Toggle button in bottom-left */}
      <Box
        sx={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          zIndex: 1400,
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (visible && fullScreen) setFullScreen(false);
            setVisible((prev) => !prev);
          }}
        >
          {visible ? "Hide Logs" : "Show Logs"}
        </Button>
      </Box>

      {/* Log viewer panel */}
      {visible && (
        <Box sx={panelSx}>
          {/* Sticky header for interactive controls */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              bgcolor: "#222",
              p: 1,
              borderBottom: "1px solid #555",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Left-aligned controls */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={
                    fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />
                  }
                  onClick={() => setFullScreen((prev) => !prev)}
                >
                  {fullScreen ? "Exit Full Screen" : "Full Screen"}
                </Button>
              </Box>

              {/* Right-aligned controls: Clear Logs, Share Logs, and radio options inline */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<ClearAllIcon />}
                  onClick={() => setLogs([])}
                >
                  Clear Logs
                </Button>
                <Button
                  variant="contained"
                  startIcon={<ShareIcon />}
                  onClick={shareLogs}
                >
                  Share Logs
                </Button>
                <RadioGroup
                  row
                  value={shareFormat}
                  onChange={(e) =>
                    setShareFormat(e.target.value as "plain" | "file")
                  }
                  sx={{ m: 0 }}
                >
                  <FormControlLabel
                    value="plain"
                    control={<Radio size="small" />}
                    label="Plain Text"
                  />
                  <FormControlLabel
                    value="file"
                    control={<Radio size="small" />}
                    label="File (.txt)"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Box>

          {/* Logs list */}
          <Box sx={{ p: 1 }}>
            {logs.map((log, index) => (
              <Box key={index} sx={{ mb: 0.5 }}>
                <strong>{log.type}:</strong> {log.message}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default DebugConsole;

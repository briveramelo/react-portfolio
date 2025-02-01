import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { enablePerformanceTracking } from "./tracking/performanceTracking";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FirebaseCacheProvider } from "./context/FirebaseCacheContext";
import { CursorProvider } from "./context/CursorContext.tsx";

enablePerformanceTracking();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <FirebaseCacheProvider>
        <ThemeProvider>
          <CursorProvider>
            <App />
          </CursorProvider>
        </ThemeProvider>
      </FirebaseCacheProvider>
    </AuthProvider>
  </React.StrictMode>,
);

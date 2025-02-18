import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { enablePerformanceTracking } from "./utils/tracking/autoTracking/enablePerformanceTracking.ts";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FirebaseCacheProvider } from "./context/FirebaseCacheContext";
import { CursorProvider } from "./context/CursorContext.tsx";
import DebugConsole from "./pages/components/specialty/DebugConsole.tsx";
import { HeaderHeightProvider } from "./context/HeaderHeightContext.tsx";

enablePerformanceTracking();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <FirebaseCacheProvider>
        <ThemeProvider>
          <CursorProvider>
            <HeaderHeightProvider>
              <App />
              {/*<DebugConsole />*/}
            </HeaderHeightProvider>
          </CursorProvider>
        </ThemeProvider>
      </FirebaseCacheProvider>
    </AuthProvider>
  </React.StrictMode>,
);

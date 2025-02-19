import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  // this is commented out because the default 'undefined' value is 'auto'
  // auto is more permissive, and setting an explicit array is more limiting
  // I'd rather keep this flexible post-deployment and leave it as 'auto'
  // it's a good reference in case I want to do a semi-local test though
  server: {
    allowedHosts: ["c98d-209-122-135-213.ngrok-free.app"],
  },
  plugins: [
    react(),
    visualizer({
      filename: "build-stats.html", // Generate visualization file in project folder
      template: "treemap", // Choose visualization type: sunburst, treemap, network
      open: false, // Automatically open report after build
      gzipSize: true, // Show gzip size in report
      brotliSize: true, // Show brotli size in report
    }),
    svgr(),
  ],
  publicDir: "public",
  build: {
    target: "es2024", // Matches modern browser support
    cssCodeSplit: true, // Separate CSS for better caching
    sourcemap: false, // Disable sourcemaps for smaller builds
    chunkSizeWarningLimit: 750, // Increase chunk size limit warning
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("firebase")) return "vendor-firebase";
            if (
              id.includes("plausible") ||
              id.includes("vitals") ||
              id.includes("uuid")
            )
              return "vendor-tracking";
            if (id.includes("confetti")) return "vendor-confetti";
            if (id.includes("pdf")) return "vendor-react-pdf";
            if (id.includes("react")) return "vendor-react";
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Alias "@" to the "src" directory for cleaner imports
    },
  },
  optimizeDeps: {
    include: ["@mui/material", "@mui/icons-material"],
  },
});

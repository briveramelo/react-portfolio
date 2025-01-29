import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "build-stats.html", // Generate visualization file in project folder
      template: "treemap", // Choose visualization type: sunburst, treemap, network
      open: false, // Automatically open report after build
      gzipSize: true, // Show gzip size in report
      brotliSize: true, // Show brotli size in report
    }),
  ],
  publicDir: "public",
  build: {
    target: "es2024", // Matches modern browser support
    cssCodeSplit: true, // Separate CSS for better caching
    sourcemap: false, // Disable sourcemaps for smaller builds
    chunkSizeWarningLimit: 500, // Increase chunk size limit warning
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
});

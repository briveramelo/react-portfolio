import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    target: "es2020", // Matches modern browser support
    cssCodeSplit: true, // Separate CSS for better caching
    sourcemap: false, // Disable sourcemaps for smaller builds
    chunkSizeWarningLimit: 500, // Increase chunk size limit warning
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Split vendor code into a separate chunk
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Alias "@" to the "src" directory
    },
  },
});

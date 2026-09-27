import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      // Extra entries emit dist/privacy/index.html and dist/terms/index.html,
      // so /privacy and /terms work on any static host without SPA rewrites.
      input: {
        main: "index.html",
        privacy: "privacy/index.html",
        terms: "terms/index.html",
      },
    },
  },
});

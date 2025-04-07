import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": "/src/shared",
      "@styles": "/src/shared/styles",
      "@icons": "/src/shared/assets/icons",
      "@pages": "/src/pages",
      "@components": "/src/shared/components",
    },
  },
});

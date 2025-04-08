import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@shared": "/src/shared",
        "@styles": "/src/shared/styles",
        "@icons": "/src/shared/assets/icons",
        "@pages": "/src/pages",
        "@components": "/src/shared/components",
        "@modules": "/src/modules",
      },
    },
    server:
      mode === "development"
        ? {
            proxy: {
              "/api": {
                target: env.VITE_BASE_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
              },
            },
          }
        : undefined,
  };
});

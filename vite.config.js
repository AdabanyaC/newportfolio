import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // other configurations
  server: {
    proxy: {
      "/api/fotmob": {
        target: "https://www.fotmob.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/fotmob/, ""),
      },
    },
  },
});

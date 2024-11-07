import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@api": resolve(__dirname, "src/api"),
      "@assets": resolve(__dirname, "src/assets"),
      "@icons": resolve(__dirname, "src/assets/icons"),
      "@images": resolve(__dirname, "src/assets/images"),
      "@components": resolve(__dirname, "src/components"),
      "@constants": resolve(__dirname, "src/constants"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@pages": resolve(__dirname, "src/pages"),
      "@routes": resolve(__dirname, "src/routes"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/styles"),
      "@views": resolve(__dirname, "src/views"),
    },
  },
});

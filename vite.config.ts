import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@modules", replacement: "/src/modules" },
      { find: "@components", replacement: "/src/components/index.tsx" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@types", replacement: "/src/types" },
      { find: "@api", replacement: "/src/api" },
    ],
  },
});

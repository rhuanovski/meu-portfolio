import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  vite: {
    build: {
      target: "es2022",
    },
  },
});

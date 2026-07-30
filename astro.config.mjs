import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
  }),
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

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    auth(),
  ],
  output: "server",
  prefetch: {
    defaultStrategy: "hover",
  },
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      expiration: 60 * 60,
    },
  }),
});

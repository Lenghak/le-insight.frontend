import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import auth from "auth-astro";
import million from "million/compiler";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      expiration: 60 * 60,
    },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    auth(),
  ],
  prefetch: {
    defaultStrategy: "hover",
  },
  vite: {
    plugins: [million.vite({ mode: "react", server: true, auto: true })],
    ssr: {
      noExternal: ["react-tweet"],
    },
  },
});

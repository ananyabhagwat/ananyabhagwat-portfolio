import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// BASE_PATH is "/" for a user site (ananyabhagwat.github.io) or "/<repo-name>/" for a project site.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true, prerender: { outputPath: "/index.html", crawlLinks: true } },
    router: { basepath: base === "/" ? undefined : base.replace(/\/$/, "") },
  },
  vite: { base },
});

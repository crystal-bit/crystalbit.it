import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { excerpt, remarkReadingTime } from "./src/utils/markdown-plugins.mjs";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://crystalbit.it",
  trailingSlash: "ignore",
  output: "static",
  integrations: [mdx(), image()],
  markdown: {
    remarkPlugins: [remarkReadingTime, excerpt],
  },
});

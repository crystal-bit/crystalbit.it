import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  output: "static",
  integrations: [mdx(), image()]
});
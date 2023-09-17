import { defineConfig } from "astro/config";
import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: "https://dayl.in",
  integrations: [UnoCSS({
    injectReset: true,
  }
  )],
});

import { defineConfig } from "astro/config";
import { presetUno } from 'unocss'
import uno from "astro-uno";

// https://astro.build/config
export default defineConfig({
  site: "https://dayl.in",
  integrations: [uno({ presets: [presetUno()] })],
});

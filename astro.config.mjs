import { defineConfig } from "astro/config";
import Unocss from "@unocss/vite";
import { presetUno } from 'unocss'
import uno from "astro-uno";

// https://astro.build/config
export default defineConfig({
  site: "https://dayl.in",
  integrations: [uno({presets:[presetUno()]})],
  // vite: {
  // plugins: [
  // Unocss({})
  // ],
  // }
});

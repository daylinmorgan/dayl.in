import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  transformers: [transformerVariantGroup()],

  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom ones
      },
    }),
  ],
  theme: {
    colors: {
      ctp: {
        crust: "#11111b",
        mantle: "#181825",
        base: "#1e1e2e",
        text: "#cdd6f4",
        mauve: "#cba6f7",
        red: "#f38ba8",
        rosewater: "#f5e0dc",
      },
    },
  },
});

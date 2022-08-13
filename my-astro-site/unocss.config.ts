import { defineConfig, presetWebFonts, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
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
        base: "#1e1e2e",
        text: "#cdd6f4",
        mauve: "#cba6f7",
        red: "#f38ba8",
        mantle: "#181825",
        rosewater: "#f5e0dc",
      },
    },
  },
});

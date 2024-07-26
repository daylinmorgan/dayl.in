import { flavors } from "@catppuccin/palette";
import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerVariantGroup,
  presetAttributify
} from "unocss";

const generatePalette = (): { [key: string]: string } => {
  const colors: { [key: string]: string } = {};
  Object.keys(flavors.mocha.colors).forEach((colorName) => {
    const sanitizedName = colorName
      .replace("0", "zero")
      .replace("1", "one")
      .replace("2", "two");
    colors[sanitizedName] = flavors.mocha.colors[colorName].hex;
  });

  return colors;
};

// TODO: use the typed iterator?
const catppuccinColors = generatePalette();

export default defineConfig({
  preflights: [
    {
      layer: "mycss",
      getCSS: () => `
    body {
      font-family: 'Recursive', monospace;
      font-variation-settings: 'MONO' 1;
    }
   `,
    },
  ],
  transformers: [transformerVariantGroup()],
  presets: [presetUno(), presetIcons(), presetAttributify()],
  rules: [
    ["font-casual", { "font-variation-settings": "'CASL' 1;" }],
    ["font-mono-casual", { "font-variation-settings": "'MONO' 1, 'CASL' 1;" }],
  ],
  shortcuts: {
    link: "cursor-pointer text-ctp-rosewater hover:text-ctp-mauve",
  },
  theme: {
    colors: {
      ctp: catppuccinColors,
    },
  },
  // layers: {
  // mycss: 0.5,
  // shortcuts: 0,
  // components: 1,
  // default: 2,
  // utilities: 3,
  // },
});

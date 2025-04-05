import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "periwinkle-gray": {
          "50": "#f4f7fa",
          "100": "#e5eaf4",
          "200": "#d1dbec",
          "300": "#b8c9e1",
          "400": "#8da6cd",
          "500": "#718ac0",
          "600": "#5e73b2",
          "700": "#5363a2",
          "800": "#485385",
          "900": "#3d466b",
          "950": "#292e42",
        },
        razzmatazz: {
          "50": "#fff0f9",
          "100": "#ffe4f5",
          "200": "#ffc9ec",
          "300": "#ff9cdb",
          "400": "#ff5fc1",
          "500": "#ff30a6",
          "600": "#f50d83",
          "700": "#e3006d",
          "800": "#b00454",
          "900": "#920949",
          "950": "#5b0028",
        },
        "purple-haze": {
          "50": "#fbf3ff",
          "100": "#f5e3ff",
          "200": "#edcdff",
          "300": "#dfa5ff",
          "400": "#cc6cff",
          "500": "#b935ff",
          "600": "#a80fff",
          "700": "#9300f0",
          "800": "#7d06c3",
          "900": "#5c068c",
          "950": "#470077",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        reno: ["var(--font-renogare)", "monospace"],
        firacode: ["var(--font-firacode)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        velluto: {
          gold: "#B89765",
          ivory: "#FBF9F6",
          espresso: "#1C1A19",
          primary: "#B89765",
          background: "#FBF9F6",
          foreground: "#1C1A19",
        },
      },
      boxShadow: {
        product: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px",
      },
      fontFamily: {
        display: [
          "serif",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        text: [
          "sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;

export default config;

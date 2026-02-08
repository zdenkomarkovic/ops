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
        primary: {
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5feaca",
          400: "#2dd4b4",
          500: "#1ba898",
          600: "#159a83",
          700: "#127f6e",
          800: "#0f6558",
          900: "#0d5347",
        },
        beige: {
          50: "#fdfcfb",
          100: "#faf7f4",
          200: "#f5efe8",
          300: "#ebe2d5",
          400: "#ddd0be",
          500: "#c9b89a",
          600: "#b39f7e",
          700: "#9a8566",
          800: "#7d6d54",
          900: "#665a45",
        },
        secondary: {
          500: "#f9b317",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

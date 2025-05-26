// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F25C30",
          yellow: "#FFC300",
          green: "#2B7A78",
          "green-dark": "#004D40",
          black: "#0D0D0D",
          white: "#F4F4F4",
          gray: "#E0E0E0",
        },
        gradient: {
          sun: "linear-gradient(to right, #FF9F2C, #F24F2E)",
        },
      },
    },
  },
  plugins: [],
};

export default config;

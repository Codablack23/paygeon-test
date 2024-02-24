import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "light":"#747A80",
        "light-800":"#CFDBD5B2",
        "dark":"#26282B",
        "dark-component":"#353941",
        "light-500":"#EBF0F0",
        "theme":"#0052FF"
      }
    },
  },
  plugins: [],
};
export default config;

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
        primaryBlack: "#232323",
        primaryWhite: "#F8FAFC",
        primaryOrange: "#EA5326",
        lightRed: "#520E0D",
        secondary: "#EB2926",
        info: "#F8FAFC",
        success: "#34D399",
        warning: "#F16365",
        parimaryWhite: "#F8FAFC",
        primaryRed: "#EB2926",
      

      },
      fontFamily:{
        roboto:["var(--font-roboto)"],

      }
    },
  },
  plugins: [],
  important: true,

};
export default config;

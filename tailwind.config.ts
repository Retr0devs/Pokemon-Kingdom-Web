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
        primary: "#fff",
        primaryDark: "rgba(255,255,255, 0.2);",
        secondary: "#FB6F47",
      },
      backgroundImage: {
        botonJoin:
          "linear-gradient(20deg, #FC2D2D 0%, rgba(249, 2, 2, 0.9) 95.83%)",
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #FB6F47 0%, #FB6F47 91.61%)",
        blueRadial:
          "linear-gradient(20deg, #FB6F47 0%, rgba(251, 74, 71, 0.9) 95.83%)",
        blueLight:
          "linear-gradient(90deg, #F73535 0%, rgba(248, 48, 48, 0.86) 100% )",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;

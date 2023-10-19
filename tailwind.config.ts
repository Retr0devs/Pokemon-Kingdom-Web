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
        secondary: "#FAFAF5",
      },
      backgroundImage: {
        botonJoin:
          "linear-gradient(20deg, #FC2D2D 0%, rgba(249, 2, 2, 0.9) 95.83%)",
        radialBlack:
          "linear-gradient(225.95deg, #0C0C0C 0%, #0C0C0C 0%, #0C0C0C 91.61%)",
        blueRadial:
          "linear-gradient(20deg, #67FF33 0%, rgba(103, 255, 51, 0.9) 95.83%)",
        textos: // antes blueLight
          "linear-gradient(90deg, #FF6C33 0%, rgba(248, 48, 48, 0.86) 100% )",
        mc: // member count
          "linear-gradient(90deg, #F7480B 0%, rgba(247, 72, 11, 0.86) 100% )"
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;

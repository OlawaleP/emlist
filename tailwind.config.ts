import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "become-expert-banner": "url('/assets/images/privateExpertBanner.png')",
        "congrats-banner": "url('/assets/images/congrats.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        "primary-gradient": "linear-gradient(90deg, #3ad87e 0%, #9ef769 100%)",
      },
      backgroundColor: {
        "full-transparent": "rgba(0, 0, 0, 0.1)",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "part-transparent": "rgba(0, 0, 0, 0.9)",
      },
      colors: {
        "primary-green": "#3ad87e",
        "dark-green": "#054753",
        "light-green": "#9ef769",
        "primary-orange": "#FF9933",
        "primary-yellow": "#fee300",
        "neutral-black": "#030a05",
        "nuetral-light": "#f6ffec",
        "light-brown": "#8A8D8B",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
export default config;

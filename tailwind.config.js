/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindtypography from "@tailwindcss/typography";


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-aqua': '#21b2a6',
      },
      textColor: {
        'custom-aqua': '#21b2a6',
      },
      minWidth: {
        '50': '50%',
      },
    },
  },
  plugins: [tailwindtypography, daisyui],
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
};



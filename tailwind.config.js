/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindtypography from "@tailwindcss/typography";


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-orange': '#FF9067',
      },
      minWidth: {
        '50': '50%',
      },
    },
  },
  plugins: [tailwindtypography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};



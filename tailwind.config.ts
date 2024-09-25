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
        'off-white': '#FAF9F6',
        'main-orange': '#FF5B1E',
        'main-black' : '#303841',
      },
      textShadow: {
        'outline' : '1px -1px 0 rgba(250, 249, 246, 1), 1px -1px 0 rgba(250, 249, 246, 1), -1px 1px 0 rgba(250, 249, 246, 1), 1px 1px 0 rgba(250, 249, 246, 1) '
      },
      fontFamily: {
        sans: ['Poppins','Urbanist', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(250, 249, 246, 1)",
          "0 0px 15px rgba(250, 249, 246, 1)"
        ],
        textstrokeshadow: [
          "1px -1px 0 rgba(250, 249, 246, 1)",
          "1px -1px 0 rgba(250, 249, 246, 1)", 
          "-1px 1px 0 rgba(250, 249, 246, 1)", 
          "1px 1px 0 rgba(250, 249, 246, 1)" 
        ]
      },
    },
  },
  plugins: [
    function ({ addUtilities }:any) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.stroke-white': {
          '-webkit-text-stroke-color': '#ffffff',
        },
        '.stroke-black': {
          '-webkit-text-stroke-color': '#000000',
        },
        '.stroke-orange': {
          '-webkit-text-stroke-color': '#FF5B1E',
          },
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config;

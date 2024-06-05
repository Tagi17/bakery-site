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
      height: {
        "custom-height": '75vh',
      },
      margin: {
        '15': '5rem',
        '22': '5.5rem', 
        '24': '6rem',  
        '26': '6.5rem', 
        '28': '7rem', 
        '30': '7.5rem', 
        '35': '9.5rem', 
      },
      padding: {
        '22': '5.5rem', 
        '24': '6rem',  
        '26': '6.5rem', 
        '28': '7rem', 
        '30': '7.5rem', 
        '35': '9.5rem', 
        '37': '13rem', 
        '40': '15rem', 
      },
    },
  },
  plugins: [],
};
export default config;

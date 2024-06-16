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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
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
      colors: {
        primary: {
          100: '#171717',
          200: '#fcf6e8', //i think this is perfect
          300: '#211ddb',
          400: '#ffedd2', //this is the other one i was using on the home page
          500: '#faf1da', //this is very dark
          600: '#fcf7e8',
        },
        secondary: {
          100: '#d1e63e',
          200: '#516aec',
          300: '#342d99',
          400: '#f310e1',
          500: '#20e62e',
          600: '#6ce316',
        },
        minHeight: {
          '450': '450px',  // Now you can use class 'min-h-450'
        }
      },
    },
  },
  // Define the responsive variants for the display utility if really necessary
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
  plugins: [],
};

export default config;

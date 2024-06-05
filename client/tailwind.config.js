/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#5e6472',
        lightdark: '#aed9e0',
        mid: '#b8f2e6',
        light: '#faf3dd',
        lightlight: '#ffa69e'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          lightest: '#F5EFFF',
          lighter: '#E5D9F2',
          light: '#CDC1FF',
          base: '#A294F9',
        },
      },
    },
  },
  plugins: [],
}
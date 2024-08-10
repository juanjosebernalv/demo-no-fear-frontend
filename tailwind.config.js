/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#025556",
        secondary: "#B6F501",
        tertiary: "#EFEEC9",
        "dark-green": "#012222",
        "light-green": "#FDFDF7",
        "light-gray": "#D9D9D9"
      },
    },
  },
  plugins: [],
}


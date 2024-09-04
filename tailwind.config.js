/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "grey-900": "#101828",
      "grey-800": "#1D2939",
      "grey-700": "#344054",
      "grey-600": "#475467",
      "grey-400": "#98A2B3",
      "white": "#FFFF",
      "white-64": "#FFFFFFA3",
      "white-24": "#FFFFFF3D",
      "white-16": "#FFFFFF29",
      "black-0": "#00000000",
      "black-100": "#000000"
    }
  },
  plugins: [],
}
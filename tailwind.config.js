/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "rumble-green": "#003366",
        "rumble-green-dark": "#003366",
        "rumble-dark": "#061726",
        "rumble-content-dark": "#000312",
        "titan-blue": "#003366",
        "titan-red": "#EE6464",
        "titan-red-dark": "#EB2626",
        "titan-gray": "#36454F"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};



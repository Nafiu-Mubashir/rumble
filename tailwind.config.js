/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'rumble-green': '#74CC1D',
        'rumble-green-dark': '#77b23b',
        'rumble-dark': '#061726',
        'rumble-content-dark': '#000312'
      }
    },
  },
  plugins: [],
}



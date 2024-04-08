/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'rumble-green': '#74CC1D',
        'rumble-green-dark': '#77b23b'
      }
    },
  },
  plugins: [],
}


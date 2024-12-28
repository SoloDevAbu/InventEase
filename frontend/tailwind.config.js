/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          btn: '#744c64',
          btnHover: '#79586C',
          form: '#C8CDBA'
        }
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
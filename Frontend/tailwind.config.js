/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [{
        light: {
          "--btn-active": "#bfdbfe", // Change active state for buttons
          // Other theme customizations...
        },
      }, , "dark", "cupcake"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
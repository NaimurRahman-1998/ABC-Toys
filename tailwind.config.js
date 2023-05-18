/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../assets/Category/bg-image.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}


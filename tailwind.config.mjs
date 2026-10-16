/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111713",
        forest: "#173d2d",
        sage: "#dfe8df",
        brass: "#c7a66a",
        cream: "#f8f7f2"
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 23, 19, 0.08)"
      }
    }
  },
  plugins: []
};

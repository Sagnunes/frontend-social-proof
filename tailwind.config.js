/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        magenta: {
          "very-dark": "hsl(300, 43%, 22%)",
          "dark-grayish": "hsl(303, 10%, 53%)",
          "light-grayish": "hsl(300, 24%, 96%)",
        },
        softPink: "hsl(333, 80%, 67%)"
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}
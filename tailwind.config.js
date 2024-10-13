/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111827",
        text: "#1d4ed8",
        second: "#1f2937",
      },
    },
  },

  plugins: [],
};

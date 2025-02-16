/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        text: "#FFFFFF",
        textsecond: "#B3B3B3",
        second: "#1E1E1E",
        highred: "#FF4655",
        highpurple: "#8A2BE2",
        highgreen: "#00FF7F",
        highyellow: "#FFA500",
        redterang: "#FF0000",
        borderabu: "#292929",
      },
    },
  },

  plugins: [],
};

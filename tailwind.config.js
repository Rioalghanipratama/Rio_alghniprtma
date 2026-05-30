/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#050505",
        muted: "#666666",
        soft: "#888888",
      },
    },
  },

  plugins: [],
};

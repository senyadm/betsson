// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // App Router
    "./pages/**/*.{js,jsx,ts,tsx}",      // Pages Router (если есть)
    "./components/**/*.{js,jsx,ts,tsx}", // Компоненты
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5500",
        secondary: "#1F1F1F",
      },
    },
  },
  plugins: [],
};

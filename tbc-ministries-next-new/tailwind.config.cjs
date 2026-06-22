/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
        serif: ["var(--font-serif)", "Georgia"],
      },
    },
  },
  plugins: [],
};

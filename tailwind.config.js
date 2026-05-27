/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#050505',
          900: '#080808',
          800: '#121212',
          gold: '#bfa369',
          gold2: '#d4b86f',
        },
      },
      boxShadow: {
        glow: '0 20px 50px rgba(255, 212, 125, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(223, 184, 94, 0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#bfa369',
        'gold-light': '#d4b86f',
        brand: {
          950: '#050505',
          900: '#080808',
          800: '#121212',
        },
      },
      boxShadow: {
        glow: '0 20px 50px rgba(191, 163, 105, 0.12)',
        'glow-lg': '0 32px 72px rgba(191, 163, 105, 0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(223, 184, 94, 0.18), transparent 35%)',
        'gold-gradient': 'linear-gradient(135deg, #bfa369, #d4b86f)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

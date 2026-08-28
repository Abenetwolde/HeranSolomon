/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfaf6',
          100: '#f8f1e9',
          200: '#efe2d3',
          300: '#e3ccb6',
          400: '#d4af90',
          500: '#c79270',
          600: '#bb7a57',
          700: '#a36248',
          800: '#85503e',
          900: '#6d4436',
        },
        forest: {
          50: '#f1f6f2',
          100: '#ddebe0',
          200: '#bdd8c2',
          300: '#90bc9a',
          400: '#649871',
          500: '#447a54',
          600: '#345f43',
          700: '#2a4d37',
          800: '#243f2e',
          900: '#1f3528',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'fade-up-delay': 'fadeUp 0.7s ease-out 0.2s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

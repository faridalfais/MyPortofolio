/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        neon: '#39ff14',
        dark: {
          DEFAULT: '#0A0A0A',
          lighter: '#151515',
          lightest: '#1D1D1D',
        },
        light: {
          DEFAULT: '#F5F5F5',
          dimmed: '#BDBDBD',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold accent
          hover: '#E6C158',
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0b0d10',
          secondary: '#0f1114',
          lighter: '#1a1d23',
        },
        light: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
          accent: '#F0F2F5',
        },
        accent: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F5',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E3C563',
          dark: '#B38E2A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E6E6E6',
          muted: '#A8A8A8',
          light: '#1A1A1A',
          'light-secondary': '#4A4A4A',
          'light-muted': '#999999',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, rgba(11, 13, 16, 0), rgba(11, 13, 16, 0.9), rgba(11, 13, 16, 1))',
        'gradient-light': 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
};

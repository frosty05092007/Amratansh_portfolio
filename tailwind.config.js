/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        void: '#06060b',
        surface: '#0d0e17',
        surfaceHover: '#131524',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        cyanAccent: '#22d3ee',
        violetAccent: '#7c3aed',
      },
    },
  },
  plugins: [],
};
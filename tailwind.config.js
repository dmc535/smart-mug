/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B2B', // Orange accent color from the display
          dark: '#E65A1A',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Dark display background
          light: '#2A2A2A',
        },
        wood: {
          light: '#E5B684',
          DEFAULT: '#C19A6B',
          dark: '#8B6B4C',
        }
      }
    },
  },
  plugins: [],
}
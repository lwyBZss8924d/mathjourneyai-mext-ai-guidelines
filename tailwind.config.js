/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-500': '#77878F',
        'gray-600': '#5F6C72',
        'secondary-50': '#EAF6FE',
        'secondary-100': '#D5EDFD',
        'secondary-700': '#1B6392',
      },
    },
  },
  plugins: [],
};

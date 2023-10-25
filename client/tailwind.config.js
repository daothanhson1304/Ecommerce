/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-50': '#F2F4F5',
        'gray-100': 'var(--color-gray-100)',
        'gray-300': '#ADB7BC',
        'gray-400': '##929FA5',
        'gray-500': '#77878F',
        'gray-600': '#5F6C72',
        'gray-800': '#303639',
        'gray-900': '#191C1F',
        'secondary-50': '#EAF6FE',
        'secondary-100': '#D5EDFD',
        'secondary-500': '#2DA5F3',
        'secondary-700': '#1B6392',
        'primary-500': '#FA8232',
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        base: '0px 8px 40px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

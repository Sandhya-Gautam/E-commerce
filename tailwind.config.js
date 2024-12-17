/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,ts}'],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '650px' },
        'max-md': { max: '800px' },
        'max-lg': { max: '1000px' },
        'sm': { min: '650px' },
        'md': { min: '800px' },
        'lg': { min: '1000px' },
      },
    },
    plugins: [],
  },
}

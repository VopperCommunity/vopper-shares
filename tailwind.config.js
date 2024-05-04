/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      },
      fontFamily: {
        'principal': ['Bitter', 'serif;']
      },
      colors:{
        'purple-light': "#CFCFFC",
        'gray-light': "#4F5464",
      }
    }
  },
  plugins: []
};

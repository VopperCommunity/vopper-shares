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
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          200: "#d0bcedff",
          500: "#b375e1ff",
          600: "#871fdbff",
        },
        gray: {
          100: "#e5e7eb",
          200: "#9ca3af",
          600: "#424447ff",
        },
      },
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
}


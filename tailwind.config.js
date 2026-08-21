/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here
        brand: {
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
      },
    },
  },
};

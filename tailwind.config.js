/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
        dark: {
          "bg-primary-dark": "#262933",
        },
      },
      width: {
        240: "240px", // ✅ custom width class w-240
      },
      height: {
        240: "240px", // ✅ custom height class h-240
      },
    },
  },
};

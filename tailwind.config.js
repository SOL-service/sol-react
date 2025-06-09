/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-80': '80vh',
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
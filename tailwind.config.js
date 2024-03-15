/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mg: '1440px',
      },
      width: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1920px',
        '11xl': '2560px',
        '12xl': '3840px',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1920px',
        '11xl': '2560px',
        '12xl': '3840px',
      },
    },
  },
  plugins: [],
};

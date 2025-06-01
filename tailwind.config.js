/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['var(--font-libre)', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};

export default config;
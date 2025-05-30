/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-libre)'],
      },
    },
  },
  plugins: [daisyui],
};

export default config;
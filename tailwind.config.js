/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',                 // ← system-based dark mode
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: { extend: {} },
  plugins: [],
};

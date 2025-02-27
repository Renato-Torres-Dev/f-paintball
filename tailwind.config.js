/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/bg-hero-f-paintball.jpg')",
      },
      fontFamily: {
        mono: ['Consolas', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(255, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

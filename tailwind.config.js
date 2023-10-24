/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        'purple': '#8284FA',
        'purple-dark': '#5E60CE',
        'blue': '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'gray-700': '#0D0D0D',
        'gray-300': '#808080',
        'gray-500': '#262626',
      },
    }
  },
  plugins: [],
}

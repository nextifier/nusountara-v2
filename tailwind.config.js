const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: '540px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'sans': ['PlusJakartaSans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#6A2DFF',
        'primary-lighten': '#7a43ff',
        'primary-darken': '#5B17FF',
        'accent-yellow': '#FFD400',
        gray: colors.zinc,
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

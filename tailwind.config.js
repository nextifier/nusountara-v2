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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1800px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '7rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['PlusJakartaSans', ...defaultTheme.fontFamily.sans],
        'display': ['MuseoModerno', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#6A2DFF',
        'primary-lighten': '#7a43ff',
        'primary-darken': '#5B17FF',
        'secondary': '#33c3ff',
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

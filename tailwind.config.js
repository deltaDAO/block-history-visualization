const colors = require('./tailwind.colors.json')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        gaiaX: {
          primary: colors.blue,
          'primary-focus': colors.blue,
          'primary-content': colors.white,
          secondary: colors.violet,
          'secondary-focus': colors.purple,
          'secondary-content': colors.white,
          accent: colors.cyan,
          'accent-focus': colors.cyan,
          'accent-content': colors.white,
          'base-100': colors.white,
          'base-200': '#e2e2e2',
          'base-content': '#1f2937',
          info: colors.info,
          success: colors.success,
          error: colors.error,
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

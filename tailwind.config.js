module.exports = {
  theme: {
    extend: {
      colors: {
        'vue-green': '#42d392',
        'vue-blue': '#647eff',
        'lit-blue': '#325cff',
        'lit-green': '#17FFFF',
      },
      fontSize: {
        '10xl': '10rem',
      },
      zIndex: {
        999: '999',
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
};

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192,
      minPixelValue: 2,
      unitPrecision: 5,
      selectorBlackList: [],
      propList: ['*', '!box-shadow'],
    },
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions',
        'Android >= 4.1',
      ],
      grid: true,
    },
  },
};

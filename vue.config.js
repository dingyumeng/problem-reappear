const path = require('path');
const { defineConfig } = require('@vue/cli-service');

const resolve = dir => path.join(__dirname, dir);

module.exports = defineConfig({
  publicPath: '/',
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {},
  chainWebpack: config => {
    // set src as @
    config.resolve.alias.set('@', resolve('src'));
  },
});

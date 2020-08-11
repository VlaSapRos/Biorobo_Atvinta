const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf'); // ссылаемся на файл базовой конфигурации т.е. конфига который будет выполняться в обоих модах (dev & build)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', 
  devServer: {
    contentBase: `${baseWebpackConfig.externals.paths.dist}`,
    port: 8081,
    overlay: {
      warnings: false,
      errors: true,
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ 
      filename: '[file].map' 
    }) 
  ]
});

module.exports = new Promise ((resolve, reject) => {
  resolve(devWebpackConfig);
});
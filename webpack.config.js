const path = require('path');

const pr = (src) => path.resolve(__dirname, src)

module.exports = {
  mode: 'development',
  entry: pr('./src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: pr('./public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: pr('./public'),
    },
  },
};
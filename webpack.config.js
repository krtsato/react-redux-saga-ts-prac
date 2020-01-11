const path = require('path');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // This is a minimum setting. Add config below.

  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8000,
    watchContentBase: true
  }
};
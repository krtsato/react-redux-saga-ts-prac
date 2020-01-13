const path = require('path');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // This is a minimum setting. Add more config below.

  // Babel
  module: {
    rules: [{
      test: /\.(tsx|ts|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", {
              "targets": [">5% in JP", "not ie < 11", "not op_mini all"]
            }],
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      }
    }]
  },

  // import sentences
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/components')
    },
    extensions: ['.tsx', '.ts', '.js']
  },

  // webpack-dev-server
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 8000,
    watchContentBase: true
  },
  devtool: 'inline-source-map'
}
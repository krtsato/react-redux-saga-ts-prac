const path = require("path")
const env = process.env.NODE_ENV || "development"

module.exports = {
  mode: env,
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  // Babel
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"]
      }
    ]
  },

  // import sentences
  resolve: {
    alias: {
      "@actn": path.resolve(__dirname, "src/actions"),
      "@comm": path.resolve(__dirname, "src/commons"),
      "@comp": path.resolve(__dirname, "src/components"),
      "@cont": path.resolve(__dirname, "src/containers"),
      "@rdcr": path.resolve(__dirname, "src/reducers")
    },
    extensions: [".tsx", ".ts", ".js"]
  },

  // development
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, "public"),
    host: "0.0.0.0",
    port: 8000,
    watchContentBase: true
  },
  devtool: "eval-source-map"
}

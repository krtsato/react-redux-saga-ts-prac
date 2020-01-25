const path = require("path")
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")

module.exports = {
  stories: ["../src/**/*.stories.(ts?(x)|js|mdx)"],
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-docs/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    // Storybook addon-docs
    config.module.rules.push({
      test: /\.stories\.(tsx|ts|js)$/,
      enforce: "pre",
      exclude: /node_modules/,
      use: ["babel-loader", "@storybook/source-loader", "react-docgen-typescript-loader"]
    })

    // Storybook addon-docs : jsx in the markdown file
    config.module.rules.push({
      test: /\.stories\.mdx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {plugins: ["@babel/plugin-transform-react-jsx"]}
        },
        {
          loader: require.resolve("@mdx-js/loader"),
          options: {compilers: [createCompiler({})]}
        }
      ]
    })

    // Babel & TypeScript
    config.module.rules.push({
      test: /\.(tsx|ts|js)$/,
      exclude: /node_modules/,
      use: ["babel-loader", "source-map-loader"]
    })

    config.resolve.alias = {"@": path.resolve(__dirname, "../src/components")}
    config.resolve.extensions.push(".tsx", ".ts")
    config.devServer = {host: "0.0.0.0", port: 8001}
    return config
  }
}
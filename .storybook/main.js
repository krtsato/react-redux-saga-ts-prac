module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions/register",
    // "@storybook/addon-info/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    // "@storybook/addon-storyshots",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "./src/components"),
      use: [
        {
          loader: require.resolve("babel-loader")
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    })
    config.resolve.extensions.push(".ts", ".tsx")
    config.devServer = {host: "0.0.0.0", port: 8001}
    return config
  }
}

echo "\n========== 以下で webpack.config.js を生成 ==========\n" &&
echo "\n========== 以下で .storybook/main.js + preview.js を生成==========\n" &&
npx -p @storybook/cli sb init -f --type react &&
rm -rf ./stories &&
echo "\n========== Start webpack-dev-server ==========\n" &&
npm run build-dev

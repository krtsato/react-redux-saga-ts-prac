FROM node:12.14.0-alpine3.11

WORKDIR /react-redux-ts-prac

# The command "create-react-app" is not executed to avoid making a black box.

# npm i -D
## Babel as a transpiler, TypeScript as a type definer
## because of Jest dependence

## Babel
### @babel/cli @babel/core @babel/preset-typescript (TypeScript from https://bit.ly/35pIWJk)
### babel-loader @babel/core @babel/preset-env (Webpack from https://bit.ly/2ZVzEUr)

## ESLint
### eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks (React rules from https://bit.ly/37E4nrV)
### eslint-plugin-jest (Jest Rules from https://bit.ly/39I6WuW)
### prettier eslint-config-prettier eslint-plugin-prettier (Prettier from https://bit.ly/2rPSz6q)
### @typescript-eslint/parser @typescript-eslint/eslint-plugin (TypeScript Rules from https://bit.ly/2tq4Pey)

## stylelint
### stylelint-config-standard stylelint-order (stylelint Rules from https://bit.ly/2ZVGjOr, https://bit.ly/35jKapL)
### stylelint stylelint-prettier stylelint-config-prettier (Prettier from https://bit.ly/2Fm98dy)

## Jest
### @babel/preset-typescript (TypeScript from https://bit.ly/2rSz7WI)s
### jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer (React from https://bit.ly/2txISKh)
### jest babel-jest (Redux from  https://bit.ly/2uiUDVy)

## Test for axios & Redux
# axios-mock-adapter (from https://bit.ly/2uaZesH)
# redux-saga-test-plan (from https://bit.ly/37ybVMH)

## Storybook
### react-test-render require-context.macro babel-plugin-macros (SnapShot from https://bit.ly/2FmyJCU)
### @storybook/react @storybook/addon-{actions,a11y,knobs,info,links,storyshots,viewport} react-docgen-typescript-loader
### @types/{node,react-test-renderer}

RUN set -ox pipefail \
  && npm init -y \
  && npm i \
  axios \
  react \
  redux \
  redux-saga \
  react-dom \
  react-redux \
  react-router \
  react-router-dom \
  connected-react-router \
  && npm i -D \
  axios-mock-adapter \
  @babel/cli \
  @babel/core \
  babel-jest \
  babel-loader \
  @babel/preset-env \
  @babel/preset-react \
  @babel/preset-typescript \
  eslint \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-jest \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  jest \
  react-test-renderer \
  redux-saga-test-plan \
  source-map-loader \
  stylelint \
  stylelint-order \
  stylelint-prettier \
  stylelint-config-prettier \
  stylelint-config-standard \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @types/{react,react-dom,react-router,react-router-dom,react-redux,node,jest} \
  webpack \
  webpack-cli \
  webpack-dev-server

###### sample
# yarn add semantic-ui-react semantic-ui-css
# yarn add @storybook/react (@types/storybook__react) react-docgen-typescript-loader
# yarn add -D @storybook/addon-a11y (@types/storybook__addon-a11y) @storybook/addon-actions (@types/storybook__addon-actions) @storybook/addon-info (@types/storybook__addon-info) @storybook/addon-knobs (@types/storybook__addon-knobs) @storybook/addon-links (@types/storybook__addon-links) (@storybook/addon-viewport @types/storybook__addon-viewport)
# yarn add -D redux-saga-test-plan axios-mock-adapter
# yarn add -D @storybook/addon-storyshots @types/storybook__addon-storyshots react-test-renderer require-context.macro babel-plugin-macros
# yarn add -D cypress
#####

##### Default
# ENV NODE_ENV production
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD npm start
#####
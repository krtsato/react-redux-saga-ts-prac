FROM node:12.14.0-alpine3.11

WORKDIR /react-redux-ts-prac

# npm install notes
## The command "create-react-app" is not executed to avoid making a black box.

## Babel as a transpiler, TypeScript as a type definer
## because of Jest dependence
## needless of ts-loader, @types/jest and ts-jest

## Babel
### @babel/cli @babel/core @babel/preset-typescript (TypeScript from https://bit.ly/35pIWJk)
### babel-loader @babel/core @babel/preset-env (Webpack from https://bit.ly/2ZVzEUr)

## TypeScript
### typescript @types/react @types/react-dom source-map-loader webpack webpack-cli webpack-dev-server (React & Webpack from https://bit.ly/39xoYjc)

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

## Test of axios, Redux and E2E system
### axios-mock-adapter (Mock Test from https://bit.ly/2uaZesH)
### redux-saga-test-plan (Integration Test from https://bit.ly/37ybVMH)
### cypress (E2E Test from https://bit.ly/2FlIRvK)

## Storybook
### babel-plugin-macros @storybook/addon-storyshots react-test-render require-context.macro @types/react-test-renderer (SnapShots from https://bit.ly/2FmyJCU)
### @storybook/react (React from https://bit.ly/36AJgGw)
### @storybook/addon-{a11y,actions,knobs,info,links,storyshots,viewport} @types/node (Addons from https://bit.ly/39DJwGW, https://bit.ly/37Eu1wK)
### babel-loader react-docgen-typescript-loader @storybook/addon-info (TypeScript from https://bit.ly/37BmY7P)

## Material UI
### eslint-plugin-material-ui (Material UI Rules from https://bit.ly/2SUakws, https://bit.ly/2tqOdDj)
### @material-ui/core @material-ui/icons (SVG icons & other styles from https://bit.ly/2tuKp45)
### @types/material-ui (TypeScript from https://bit.ly/2MVUiOR)

RUN set -ox pipefail \
  && apt-get update \
  && apt-get install -y --no-install-recommends \
  jq \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && npm init -y \
  && npm i \
  axios \
  @material-ui/core \
  @material-ui/icons \
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
  babel-plugin-macros \
  @babel/preset-env \
  @babel/preset-react \
  @babel/preset-typescript \
  cypress \
  eslint \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-jest \
  eslint-plugin-material-ui \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  jest \
  react-docgen-typescript-loader \
  react-test-renderer \
  redux-saga-test-plan \
  require-context.macro \
  source-map-loader \
  @storybook/react \
  @storybook/addon-{a11y,actions,knobs,info,links,storyshots,viewport} \
  stylelint \
  stylelint-order \
  stylelint-prettier \
  stylelint-config-prettier \
  stylelint-config-standard \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @types/{material-ui,node,react,react-dom,react-router,react-router-dom,react-redux,react-test-renderer} \
  webpack \
  webpack-cli \
  webpack-dev-server

ENV NODE_ENV production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]

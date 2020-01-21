#!/bin/zsh

# This script runs at the Dockerfile entry point

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
### babel-plugin-macros @storybook/addon-storyshots react-test-render r̶e̶q̶u̶i̶r̶e̶-̶c̶o̶n̶t̶e̶x̶t̶.̶m̶a̶c̶r̶o̶ @types/react-test-renderer (SnapShots from https://bit.ly/2FmyJCU)
### @storybook/react (React from https://bit.ly/36AJgGw)
### @storybook/addons @storybook/addon-{a11y,actions,docs,knobs,links,storyshots,viewport} @types/node (Addons from https://bit.ly/39DJwGW, https://bit.ly/37Eu1wK)
### babel-loader react-docgen-typescript-loader @̶s̶t̶o̶r̶y̶b̶o̶o̶k̶/̶a̶d̶d̶o̶n̶-̶i̶n̶f̶o̶ -> @storybook/addon-docs react react-is (TypeScript from https://bit.ly/37BmY7P https://bit.ly/2RIJllF)

## Material UI
### eslint-plugin-material-ui (Material UI Rules from https://bit.ly/2SUakws, https://bit.ly/2tqOdDj)
### @material-ui/core @material-ui/icons (SVG icons & other styles from https://bit.ly/2tuKp45)
### @types/material-ui (TypeScript from https://bit.ly/2MVUiOR)

## Install peer dependencies myself
### npm WARN eslint-config-airbnb@18.0.1 requires a peer of eslint-plugin-react-hooks@^1.7.0 but none is installed.
### npm WARN @egoist/vue-to-react@1.1.0 requires a peer of vue@^2.6.10 but none is installed.
### npm WARN acorn-jsx@5.1.0 requires a peer of acorn@^7.0.0 but none is installed.

## Skip optional dependency
### npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11
### wanted {"os":"darwin","arch":"any"} / current: {"os":"linux","arch":"x64"}

## Skip manual install temporaly Because of issue. Auto setup brings these packages.
### @storybook/react
### @storybook/addons
### @storybook/addon-actions
### @storybook/addon-links

save() {
  npm i \
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
    connected-react-router
}

save_dev() {
  npm i -D \
    acorn@^7.0.0 \
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
    eslint-import-resolver-webpack \
    eslint-plugin-import \
    eslint-plugin-jsx-a11y \
    eslint-plugin-jest \
    eslint-plugin-material-ui \
    eslint-plugin-prettier \
    eslint-plugin-react \
    eslint-plugin-react-hooks@^1.7.0 \
    jest \
    prettier \
    react-docgen-typescript-loader \
    react-is \
    react-test-renderer \
    redux-saga-test-plan \
    source-map-loader \
    @storybook/addon-a11y \
    @storybook/addon-docs \
    @storybook/addon-knobs \
    @storybook/addon-storyshots \
    @storybook/addon-viewport \
    stylelint \
    stylelint-order \
    stylelint-prettier \
    stylelint-config-prettier \
    stylelint-config-standard \
    typescript \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    @types/material-ui \
    @types/node \
    @types/react \
    @types/react-dom \
    @types/react-router \
    @types/react-router-dom \
    @types/react-redux \
    @types/react-test-renderer \
    vue@^2.6.10 \
    webpack \
    webpack-cli \
    webpack-dev-server
}

if [ ! -d "node_modules" ]; then
  echo "\n========== Start npm install --save ==========\n" &&
    save &&
    echo "\n========== Start npm install --save-dev ==========\n" &&
    save_dev &&
    echo "\n========== Start npm audit fix ==========\n" &&
    npm audit fix &&
    echo "\n========== Start dedupe ==========\n" &&
    npm dedupe &&
    echo "\n========== Finish npm-setup.sh ==========\n"
fi

echo "If config files have not been created,
you can execute 'webpack-setup.sh'." && zsh

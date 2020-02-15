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

## stylelint -> Material UI in JS modules may be enough.
### s̶t̶y̶l̶e̶l̶i̶n̶t̶-̶c̶o̶n̶f̶i̶g̶-̶s̶t̶a̶n̶d̶a̶r̶d̶ s̶t̶y̶l̶e̶l̶i̶n̶t̶-̶o̶r̶d̶e̶r̶ (stylelint Rules from https://bit.ly/2ZVGjOr, https://bit.ly/35jKapL)
### s̶t̶y̶l̶e̶l̶i̶n̶t̶ s̶t̶y̶l̶e̶l̶i̶n̶t̶-̶p̶r̶e̶t̶t̶i̶e̶r̶ s̶t̶y̶l̶e̶l̶i̶n̶t̶-̶c̶o̶n̶f̶i̶g̶-̶p̶r̶e̶t̶t̶i̶e̶r̶ (Prettier from https://bit.ly/2Fm98dy)

## Jest
### @babel/preset-typescript (TypeScript from https://bit.ly/2rSz7WI)s
### jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer (React from https://bit.ly/2txISKh)
### jest babel-jest (Redux from  https://bit.ly/2uiUDVy)

## Test of axios, Redux and E2E system
### axios-mock-adapter (Mock Test from https://bit.ly/2uaZesH)
### redux-saga-test-plan (Integration Test from https://bit.ly/37ybVMH)

## Storybook
### b̶a̶b̶e̶l̶-̶p̶l̶u̶g̶i̶n̶-̶m̶a̶c̶r̶o̶s̶ @storybook/addon-storyshots react-test-render r̶e̶q̶u̶i̶r̶e̶-̶c̶o̶n̶t̶e̶x̶t̶.̶m̶a̶c̶r̶o̶ @types/react-test-renderer (SnapShots from https://bit.ly/2FmyJCU)
### @storybook/react (React from https://bit.ly/36AJgGw)
### @storybook/addons @storybook/addon-{a11y,actions,docs,knobs,links,storyshots,viewport} @types/node (Addons from https://bit.ly/39DJwGW, https://bit.ly/37Eu1wK)
### babel-loader react-docgen-typescript-loader @̶s̶t̶o̶r̶y̶b̶o̶o̶k̶/̶a̶d̶d̶o̶n̶-̶i̶n̶f̶o̶ -> @storybook/addon-docs react react-is (TypeScript from https://bit.ly/37BmY7P https://bit.ly/2RIJllF)

## Material UI
### eslint-plugin-material-ui (Material UI Rules from https://bit.ly/2SUakws, https://bit.ly/2tqOdDj)
### @material-ui/core @material-ui/icons  babel-plugin-import (Material UI from https://bit.ly/2tuKp45, https://bit.ly/2RTKFDa)
### @types/material-ui (TypeScript from https://bit.ly/2MVUiOR)

## Overwriting meta tags
### Using beta package Because of the issue (https://bit.ly/3b9f8ou)
### react-helmet@6.0.0-beta.2 @types/react-helmet (react-helmet from https://bit.ly/2SkK3pi, https://bit.ly/3bcDOwq)

## Install peer dependencies myself
### npm WARN eslint-config-airbnb@18.0.1 requires a peer of eslint-plugin-react-hooks@^1.7.0 but none is installed.
### npm WARN @egoist/vue-to-react@1.1.0 requires a peer of vue@^2.6.10 but none is installed.
### npm WARN acorn-jsx@5.1.0 requires a peer of acorn@^7.0.0 but none is installed.
### npm WARN connected-react-router@6.7.0 requires a peer of immutable@^3.8.1 || ^4.0.0-rc.1 but none is installed.
### npm WARN connected-react-router@6.7.0 requires a peer of seamless-immutable@^7.1.3 but none is installed.
###
### For recent TypeScript version (Roadmap : https://bit.ly/2vyN6lV)
### npm WARN tsutils@3.17.1 requires a peer of typescript@>= 3.7.0-beta but none is installed.
### 
### For the warning :  Parsing error: '=' expected. (eslint)
### npm install -D babel-eslint

## Skip optional dependency
### npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11
### wanted {"os":"darwin","arch":"any"} / current: {"os":"linux","arch":"x64"}

save() {
  npm i \
    axios \
    @material-ui/core \
    @material-ui/icons \
    react \
    redux \
    redux-saga \
    react-dom \
    react-helmet@6.0.0-beta.2 \
    react-redux \
    react-router \
    react-router-dom \
    connected-react-router
}

save_dev() {
  npm i -D \
    axios-mock-adapter \
    @babel/cli \
    @babel/core \
    babel-eslint \
    babel-jest \
    babel-loader \
    babel-plugin-import \
    @babel/preset-env \
    @babel/preset-react \
    @babel/preset-typescript \
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
    jest \
    prettier \
    react-docgen-typescript-loader \
    react-is \
    react-test-renderer \
    redux-saga-test-plan \
    source-map-loader \
    @storybook/addons \
    @storybook/addon-a11y \
    @storybook/addon-actions \
    @storybook/addon-docs \
    @storybook/addon-knobs \
    @storybook/addon-links \
    @storybook/addon-storyshots \
    @storybook/addon-viewport \
    @storybook/react \
    typescript@3.8.1-rc\
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    @types/material-ui \
    @types/node \
    @types/react \
    @types/react-dom \
    @types/react-helmet \
    @types/react-router \
    @types/react-router-dom \
    @types/react-redux \
    @types/react-test-renderer \
    webpack \
    webpack-cli \
    webpack-dev-server
}

save_peer() {
  npm i -D \
    babel-eslint \
    acorn@^7.0.0 \
    eslint-plugin-react-hooks@1.7.0 \
    immutable@^3.8.1 \
    seamless-immutable@^7.1.3 \
    vue@^2.6.10
}

if [ ! -d "node_modules" ]; then
  echo "\n========== Start npm install --save ==========\n" &&
    save &&
    echo "\n========== Start npm install --save-dev ==========\n" &&
    save_dev &&
    echo "\n========== Start npm install peerDependencies --save-dev ==========\n" &&
    save_peer &&
    echo "\n========== Start npm audit fix ==========\n" &&
    npm audit fix &&
    echo "\n========== Start dedupe ==========\n" &&
    npm dedupe &&
    echo "\n========== Finish npm-setup.sh ==========\n"
fi

echo "If config files have not been created,
you can execute 'webpack-setup.sh'." && zsh

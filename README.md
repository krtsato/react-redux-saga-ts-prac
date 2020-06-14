# react-redux-ts-prac

フロントエンドの設計を勉強するために作成．  
[成果物](https://master.dfk5u1b9h65at.amplifyapp.com/)から得られること

- 2020年時点でのモダンなフロントエンド構成
  - React / Redux Hooks / TypeScript
  - Custom Hooks と async-await による汎用的な非同期処理

- Re-ducks パターンによる設計
  - 詳細は [references/react-redux-ts/redux-arch.md](https://github.com/krtsato/references/blob/master/react-redux-ts/redux-arch.md) を参照
  - Redux の複雑性を乗りこなす
    - 堅く作ることで増大していく記述量
    - 責務をどこで，どこまで，どうやって分けるか

<br>

リポジトリ概要

- [機能](#機能)
- [環境](#環境)
- [環境構築](#環境構築)
  - [プロジェクト作成](#プロジェクト作成)
  - [Webpack](#webpack)
  - [Lint/Format](#lintformat)
  - [Jest](#jest)
  - [StroyBook](#stroybook)
  - [Cypress](#cypress)
  - [Docker](#docker)
  - [実行手順](#実行手順)
- [TypeScript 3.8 について](#typescript-38-について)

<br>

## 機能

フロントエンドのみであるため，永続化されないことを前提として  

- Todo の CRUD
- テック企業の開発メンバを取得する
  - GitHub API を GET 通信で叩く

<br>

## 環境

- Docker
- React
- Redux
- TypeScript
- Webpack
- Babel
- ESLint
- Prettier
- Material UI
- テスト (設定のみ)
  - StoryBook
  - Jest
  - Cypress

以下は作業工程を記録した自分用のメモ．

<br>

## 環境構築

### プロジェクト作成

- Git リポジトリを作る
- .gitignore を書く
- .npmrc を書く
  - also="dev"
  - progress=false
  - save-exact=true
- package.json を書く
  - docker image build 時の警告を避けるため最低限は記入する
- npm-install.sh を書く
  - chmod +x ./npm-install.sh
  - npm install をしてその経緯をコメントアウトしておく
  - 他人と共有する場合は npm-install.sh でなく出力済みの package.json を使用
  - webpack-dev-server の起動まで行う
- 以下のディレクトリを掘る
  - redux のディレクトリ構成は re-ducks パターン

```zsh
.
├── public/
├── src/
│     ├── commons/
│     ├── components/
│     ├── containers/
│     ├── reducks/
│     └── services/
├── .dockerignore
├── .git
├── .gitignore
├── .npmrc
├── Dockerfile
├── README.md
├── docker-compose.yml
├── npm-install.sh
└── package.json
```

<br>

### Webpack

- エントリポイントとなるファイルを作成
  - public/index.html
  - src/index.tsx
- webpack.config.js を書く
  - webpack-dev-server の設定
  - HMR の設定？ (今後対応)
  - React の設定
    - src/containers/app.tsx を作成
    - index.tsx で containers/app.tsx を import
    - webpack.config.js の resolve
      - alias
      - extensions
  - Babel の設定
    - webpack.config.js の use
      - babel-loader
      - source-map-loader
    - webpack.config.js の preset を babelrc.json に分離
      - Jest が参照するため
      - @babel/preset-env
      - @babel/preset-env
      - @babel/preset-react
  - TypeScript の設定
    - tsconfig.json を作成
    - webpack.config.js を編集
      - module.rule の test に拡張子を追加
      - "@babel/preset-typescript"
      - path の可読性のため resolve.alias を追加
      - path の略記のため resolve.extensions を追加
      - tsconfig.json に同様の alias を追加

<br>

### Lint/Format

- eslint の settings に import/resolver: webpack を追加
- React の設定を追加
- TypeScript の設定を追加
- Prettier の設定を追加
- VSCode の設定を追加

<br>

### Jest

- tsconfig の設定を追加 `jest.config.js`
- ESLint の設定を追加 `import/extensions`
- config ファイル作成 `npm test -- --init`
- ./src/containers/\*\*/* にテストコードを書く

<br>

### StroyBook
  
- TypeScript with Babel の設定を .storybook/main.js に追加
- addon を.storybook/main.js に追加
- @storybook/addon-snapshots はここでは追加しない (後述)
- addon-docs の設定を ./storybook/preview.js に追加
- ESLint の設定を追加 `import/no-extraneous-dependencies`
- jest.config.js の transform に mdx の設定を追加
  - ./src/components/\*\*/* にテストコードを書く
  - Snapshots の設定を追加
    - src/components/snapshots.test.js を作成
    - 親子関係は components/snapshots.test.js > components/\*\*/snapshot/snap.js

<br>

### Cypress

バックエンドが構築できたら対応  
以下の monorepo 構成で管理できる？ (今後実験)

```zsh
.
├── backend/
│    ├── Dockerfile
│    └── ...
├── frontend/
│    ├── Dockerfile
│    └── ...
├── e2e/
│    ├── Dockerfile
│    └── ...
├── docker-compose.yml
└── .git
```

<br>

### Docker

- Dockerfile
  - 個人開発で常に新しい npm パッケージを使いたい場合 npm-install.sh を実行する
  - 他者とプロジェクトを共有する場合 `COPY package*.json` して CMD で webpack-dev-server を起動する
    - このとき docker-compose.yml の当該 volume に `/proj-cont/node_modules` を追加する
    - [node_modules/ and Docker volume mount 問題と対策](https://castaneai.hatenablog.com/entry/2019/01/29/151257)
    - 上記の手順が面倒ならば，いっそ npm-install.sh をバージョン付きで管理するのも一手
- docker-compose.yml
  - 起動 : `docker-compose up --build -d`  
    - 環境が固まらないうちは image を再ビルド
  - 確認 : `docker exec -it コンテナ名 zsh`  
  - 停止 : `docker container stop コンテナ名`
  - 削除 : `docker container rm コンテナ名`
  - 一括停止 & 削除 : `docker-compose down --rmi all`
    - それでも削除されないイメージを強制的に削除 : `docker images -aq | xargs docker rmi`

<br>

### 実行手順

- npm-install.sh が実行される
  - node_modules が存在しない場合はインストール作業
  - それ以外の場合は webpack-dev-server が起動する

```zsh
# ビルドを要する初回起動
% docker-compose up --build -d frontend

# 初回以降
% docker-compose up -d frontend
```

<br>

### TypeScript 3.8 について

2020年3月時点

- 導入済みだが新機能は未使用
- babel-loader が新記法に未対応
  - Storybook が Babel のトランスパイルに依存しているため babel-loader に統一した
- 今後は TypeScript のアップデートに対応するべく ts-loader 主導でパッケージを導入していく

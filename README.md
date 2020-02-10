# react-redux-saga-ts-prac

ボイラープレートの草案．  
作業工程を記録した自分用のメモ．  
以下の環境で Web アプリを作成する．

- Docker
- React
- Redux
- Redux Saga
- TypeScript
- Babel
- ESLint
- Prettier
- StoryBook
- Material UI
- Jest
- Cypress

<br>

## 環境構築

### プロジェクト作成

- Git リポジトリを作る
- .gitignore を書く
- .npmrc を書く
  - also="dev"
  - progress=false
  - save-exact=true
- package.json を任意で書く
  - docker image build 時の警告を避けるため最低限は記入する
- npm-setup.sh を書く
  - パッケージのインストール
  - webpack のセットアップ
  - サーバの起動まで行う
  - chmod +x ./npm-setup.sh
- npm-setup.sh を書く？ (今後対応)
  - コマンド１つで各 config ファイルを作成
- 以下のディレクトリを掘る
  - redux のディレクトリ構成は re-ducks パターン

```zsh
.
├── public/
├── src
│     ├── containers/
│     ├── components/
│     └── reducks/
├── .dockerignore
├── .git
├── .gitignore
├── .npmrc
├── Dockerfile
├── README.md
├── docker-compose.yml
├── npm-setup.sh
├── webpack-setup.sh
└── package.json
```

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

### Lint/Format

- 警告 `Module.createRequireFromPath() is deprecated`
  - 現時点で Lint には影響していないため保留
  - npm run コマンドに  exit 0 を付与
- eslint の settings に import/resolver: webpack を追加
- React の設定を追加
- TypeScript の設定を追加
- Prettier の設定を追加
- VSCode の設定を追加

### Jest

- tsconfig の設定を追加 `jest.config.js`
- ESLint の設定を追加 `import/extensions`
- config ファイル作成 `npm test -- --init`
- ./src/containers/\*\*/* にテストコードを書く

### StroyBook の設定
  
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

### Cypress の設定

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

### Docker

- Dockerfile
  - CMD は分離性のため docker-compose.yml に書かない
- docker-compose.yml
  - 起動 : `docker-compose up --build -d`  
    - 環境が固まらないうちは image を再ビルド
  - 確認 : `docker exec -it コンテナ名 zsh`  
  - 停止 : `docker container stop コンテナ名`
  - 削除 : `docker container rm コンテナ名`
  - 一括停止 & 削除 : `docker-compose down --rmi all`

### 実行手順

コンテナを立ち上げる

```zsh
docker-compose up --build -d サービス名 && docker logs -f コンテナ名
```

コンテナ内で webpack の設定ファイルを生成する

```zsh
docker-compose exec サービス名 zsh

# webpack 設定ファイルを複数作成
webpack-setup.sh
```

コードを書く

```zsh
# webpack-dev-server を起動
npm run build-dev
```

# react-redux-saga-ts-prac

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
- 以下のディレクトリを掘る

```zsh
.
├── public/
├── src/
├── .git
├── .gitignore
├── .npmrc
├── Dockerfile
├── README.md
├── docker-compose.yml
├── npm-setup.sh
└── package.json
```

### Webpack

- エントリポイントとなるファイルを作成
  - public/index.html
  - src/index.js
- webpack.config.js を書く
  - webpack-dev-server の設定
  - HMR の設定？ (今後対応)
  - React の設定
  - Babel の設定
  - TypeScript の設定
  - Lint/Format の設定
  - Material UI の設定
  - Jest の設定
  - StroyBook の設定
  - Cypress の設定

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
docker-compose up --build -d サービス名 && docker logs -f サービス名
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

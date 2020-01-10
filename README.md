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
├── dist/
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

### Docker

- Dockerfile
  - CMD は分離性のため docker-compose.yml に書かない
- docker-compose.yml
  - 起動 : `docker-compose up --build -d` 
    - 環境が固まらないうちは image を再ビルド
  - 確認 : `docker exec -it コンテナ名 zsh`  
  - 停止 : `docker container stop コンテナ名`
  - 削除 : `docker container rm コンテナ名`
  - 一括停止 & 削除は以下のコマンド
    - 環境が固まったらこの辺は丁寧にやる

```zsh
docker container stop コンテナ名 &&
docker ps -aq | xargs docker rm &&
docker images -aq | xargs docker rmi
```

### Webpack

- hoge
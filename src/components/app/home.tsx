import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Box, Link, Typography} from "@material-ui/core"

export const HomeComp: FC = () => (
  <>
    <Helmet>
      <title>Home | React-Redux-TS-Prac</title>
    </Helmet>
    <Box width="50%">
      <Typography variant="h2" gutterBottom paragraph>
        Frontend Re-ducks Pattern
      </Typography>
      <Typography variant="body1" gutterBottom paragraph>
        Redux の設計手法である Re-ducks
        パターンを実践しています．ディレクトリはドメインごとに管理し，Presentational Component や Container
        Component のディレクトリに加え，Redux の処理を受け持つ reducks
        ディレクトリなどを作成しました．ここでは各ドメインが index / types / actions / reducers / selectors /
        operations というファイルを持ち，責務を適切に分散させることで Redux の複雑性を乗りこなしています．
      </Typography>
      <Typography variant="body2" paragraph>
        ソースコード：
        <Link href="https://github.com/krtsato/react-redux-ts-prac" variant="body2" color="secondary">
          react-redux-ts-prac
        </Link>
      </Typography>
      <Typography variant="body2" paragraph>
        設計手法メモ：
        <Link href="https://github.com/krtsato/react-redux-ts-prac" variant="body2" color="secondary">
          references / react-redux-ts / redux-arch
        </Link>
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        環境構築 : Docker，Webpack，Babel
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        使用言語 : React，Redux，TypeScript
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        デプロイ : Heroku
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        非同期処理 : async-await，axios，React Custom Hook
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        デザイン : Material UI
      </Typography>
      <Typography variant="body2" gutterBottom paragraph>
        テスト : Storybook，Jest 設定のみ
      </Typography>
    </Box>
  </>
)

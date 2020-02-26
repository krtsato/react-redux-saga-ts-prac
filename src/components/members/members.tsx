import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Container, Typography} from "@material-ui/core"

export const MembersComp: FC = () => (
  <>
    <Helmet>
      <title>Members ｜react-redux-saga-ts-prac</title>
    </Helmet>
    <Container>
      <Typography variant="h2">○○の開発メンバ</Typography>
    </Container>
  </>
)

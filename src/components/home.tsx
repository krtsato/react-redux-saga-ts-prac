import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Container, Typography} from "@material-ui/core"

export const HomeComp: FC = () => (
  <>
    <Helmet>
      <title>Home | react-redux-saga-ts-prac</title>
    </Helmet>
    <Container>
      <Typography variant="h2">App by React-Redux-Saga-TS</Typography>
    </Container>
  </>
)

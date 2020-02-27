import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Typography} from "@material-ui/core"

export const HomeComp: FC = () => (
  <>
    <Helmet>
      <title>Home | React-Redux-Saga-TS-Prac</title>
    </Helmet>
    <Typography variant="h2">Home</Typography>
  </>
)

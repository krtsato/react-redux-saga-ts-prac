import React, {FC} from "react"
import {Helmet} from "react-helmet"
import {Typography} from "@material-ui/core"

export const MemberDisplayComp: FC = () => (
  <>
    <Helmet>
      <title>Members | react-redux-saga-ts-prac</title>
    </Helmet>
    <Typography variant="h2">○○ Members</Typography>
  </>
)

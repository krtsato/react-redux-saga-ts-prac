import React, {FC} from "react"
import {Typography} from "@material-ui/core"
import {Alert, AlertTitle} from "@material-ui/lab"

type FlashDisplayProps = {
  errorMsg: string
  closeErrorHdl: VoidFunction
}

export const FlashDisplayComp: FC<FlashDisplayProps> = ({errorMsg, closeErrorHdl}) => (
  <Alert severity="error" color="error" onClose={closeErrorHdl}>
    <AlertTitle>Error</AlertTitle>
    <Typography variant="body2">{errorMsg}</Typography>
  </Alert>
)

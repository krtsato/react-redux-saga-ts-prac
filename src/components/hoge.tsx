import React, {FC} from "react"
import {Button, Card, CardActions, CardContent, CssBaseline, Typography} from "@material-ui/core"
import HistoryRounded from "@material-ui/icons/HistoryRounded"
import {useStyles} from "./hoge.style"

interface HogeProps {
  timeLeft: number
  reset: VoidFunction
}

export const HogeComp: FC<HogeProps> = ({timeLeft, reset}) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <CardContent>
            <Typography>Time</Typography>
            <Typography>{timeLeft}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<HistoryRounded />}
              onClick={reset}>
              Reset
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

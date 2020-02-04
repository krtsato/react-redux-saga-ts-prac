import React, {FC} from "react"
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core"
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
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card className={classes.root}>
          <CardContent>
            <Typography>Time</Typography>
            <Typography>{timeLeft}</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} startIcon={<HistoryRounded />} onClick={reset}>
              Reset
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

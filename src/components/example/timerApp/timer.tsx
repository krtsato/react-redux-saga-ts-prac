import React, {FC} from "react"
import {Button, Card, CardActions, CardContent, Container, Typography} from "@material-ui/core"
import HistoryRounded from "@material-ui/icons/HistoryRounded"
import {useStyles} from "./timer.styles"

interface HogeProps {
  timeLeft: number
  reset: VoidFunction
}

export const TimerComp: FC<HogeProps> = ({timeLeft, reset}) => {
  const classes = useStyles()

  return (
    <>
      <div className="container">
        <Container component="header">
          <Typography variant="h1">タイマー</Typography>
        </Container>
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

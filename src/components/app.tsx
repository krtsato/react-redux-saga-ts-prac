import React, {FC} from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Icon,
  Typography,
  makeStyle
} from "@material-ui/core"

interface AppProps {
  timeLeft: number
  reset: VoidFunction
}

export const AppComp: FC<AppProps> = ({timeLeft, reset}) => (
  <>
    <CssBaseline />
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <CardContent>
          {/*
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>

          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
          */}
        </CardContent>
      </Card>
    </div>
  </>
)

/* ===================================
For storybook example
export const App: React.FC<HelloProps> = () => (
  <Provider store={store}>
    <InboxScreen error={null} />
  </Provider>
)
==================================== */

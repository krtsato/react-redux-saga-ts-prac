import React, {FC} from "react"
import {Button, Card, CardActions, CardContent, Container, Typography} from "@material-ui/core"

export type CounterProps = {
  // スタイルガイドに載せるとき
  // Props をいちいち指定しなくてもマウントできるようにする
  count?: number
  add?: (amount: number) => void
  decrement?: VoidFunction
  increment?: VoidFunction
}

export const CounterComp: FC<CounterProps> = ({
  count = 0,
  add = (): void => undefined,
  decrement = (): void => undefined,
  increment = (): void => undefined
}) => (
  <>
    <Container component="header">
      <Typography variant="h1">ビーズカウンター</Typography>
    </Container>
    <Card>
      <Typography>
        <Typography>count</Typography>
        <Typography>{count}</Typography>
      </Typography>
      <CardContent>
        <CardActions>
          <Button color="primary" onClick={decrement}>
            -1
          </Button>
          <Button color="secondary" onClick={increment}>
            +1
          </Button>
          <Button fullWidth color="inherit" onClick={add(10)}>
            +10
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </>
)

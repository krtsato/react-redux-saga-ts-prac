import React, {FC} from "react"
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core"

export interface CounterProps {
  // スタイルガイドに載せるとき
  // Props をいちいち指定しなくてもマウントできるようにする
  count?: number
  add?: (amount: number) => void // VoidFunction
  decrement?: VoidFunction
  increment?: VoidFunction
}

export const CounterComp: FC<CounterProps> = ({count = 0, add, decrement, increment}) => (
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
)

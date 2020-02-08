import React, {FC} from "react"
import {Box, Container} from "@material-ui/core"
import {useStyles} from "./colofulBeans.styles"

const colors = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "grey",
  "blueGrey"
]

// 連番配列の作成
const range = (n: number): Array<number> => (n < 0 ? [] : Array.from(Array(n), (_, i) => i))

export interface ColorfulBeadsProps {
  count?: number
}

export const ColorfulBeads: FC<ColorfulBeadsProps> = ({count = 0}) => {
  const classes = useStyles()
  return (
    <Container>
      {range(count).map((i: number) => (
        <Box className={classes.colorCircle} color={colors[i % colors.length]} component="span" key={i} />
      ))}
    </Container>
  )
}

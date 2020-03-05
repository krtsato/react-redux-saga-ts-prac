import React, {FC, MouseEvent} from "react"
import {Button, ButtonGroup} from "@material-ui/core"
import {DispFilterLiteral} from "@redx/todos"
import {useStyles} from "./filterSwitch.styles"

type FilterSwitchProps = {
  setDispFilterHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const FilterSwitchComp: FC<FilterSwitchProps> = ({setDispFilterHdl}) => {
  const classes = useStyles()

  return (
    <ButtonGroup color="secondary" aria-label="filterSwitch" size="large" className={classes.buttonGroup}>
      <Button
        className={classes.displayButton}
        data-filter={DispFilterLiteral.ShowAll}
        onClick={setDispFilterHdl}>
        All
      </Button>
      <Button
        className={classes.displayButton}
        data-filter={DispFilterLiteral.ShowActive}
        onClick={setDispFilterHdl}>
        Active
      </Button>
      <Button
        className={classes.displayButton}
        data-filter={DispFilterLiteral.ShowCompleted}
        onClick={setDispFilterHdl}>
        Completed
      </Button>
    </ButtonGroup>
  )
}

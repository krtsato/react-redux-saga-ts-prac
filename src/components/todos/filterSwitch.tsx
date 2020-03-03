import React, {FC, MouseEvent} from "react"
import {Button, ButtonGroup} from "@material-ui/core"
import {DispFilterLiteral} from "@redx/todos"

type FilterSwitchProps = {
  setDispFilterHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const FilterSwitchComp: FC<FilterSwitchProps> = ({setDispFilterHdl}) => (
  <ButtonGroup color="secondary" aria-label="filterSwitch">
    <Button data-filter={DispFilterLiteral.ShowAll} onClick={setDispFilterHdl}>
      All
    </Button>
    <Button data-filter={DispFilterLiteral.ShowActive} onClick={setDispFilterHdl}>
      Active
    </Button>
    <Button data-filter={DispFilterLiteral.ShowCompleted} onClick={setDispFilterHdl}>
      Completed
    </Button>
  </ButtonGroup>
)

import React, {FC, useCallback, MouseEvent} from "react"
import {useDispatch, useSelector} from "react-redux"
import {DispFilter, todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoDisplayComp} from "@comp/example/todoApp/todoDisplay"
import {FilterSwitchComp} from "@comp/example/todoApp/filterSwitch"

export const TodoDisplayCont: FC = () => {
  const dispatch = useDispatch()
  const filteredTodos = useSelector(todosSelectors.dispFilterSel)

  // onClick : delete
  const delTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.dataset.id as string, 10)
      dispatch(todosOperations.delTodoOpe(id))
    },
    [dispatch]
  )

  // onClick : toggle
  const tglTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.dataset.id as string, 10)
      dispatch(todosOperations.tglTodoOpe(id))
    },
    [dispatch]
  )

  // onClick : dispFilter
  const setDispFilterHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      dispatch(todosOperations.setDispFilterOpe(e.currentTarget.dataset.filter as DispFilter))
    },
    [dispatch]
  )

  return (
    <>
      <FilterSwitchComp setDispFilterHdl={setDispFilterHdl} />
      <TodoDisplayComp todos={filteredTodos} delTodoHdl={delTodoHdl} tglTodoHdl={tglTodoHdl} />
    </>
  )
}

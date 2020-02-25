import React, {FC, useCallback, MouseEvent} from "react"
import {useDispatch, useSelector} from "react-redux"
import {DispFilter, todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoDisplayComp} from "@comp/example/todoApp/todoDisplay"
import {FilterSwitchComp} from "@comp/example/todoApp/filterSwitch"

export const TodoDisplayCont: FC = () => {
  const {dispFilterSel} = todosSelectors
  const {delTodoOpe, tglTodoOpe, setDispFilterOpe} = todosOperations
  const dispatch = useDispatch()
  // const todos = useSelector(todoListSel)
  const filteredTodos = useSelector(dispFilterSel)

  // onClick : delete
  const delTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.id, 10)
      dispatch(delTodoOpe(id))
    },
    [delTodoOpe, dispatch]
  )

  // onClick : toggle
  const tglTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.id, 10)
      dispatch(tglTodoOpe(id))
    },
    [dispatch, tglTodoOpe]
  )

  // onClick : dispFilter
  const setDispFilterHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      dispatch(setDispFilterOpe(e.currentTarget.dataset.filter as DispFilter))
    },
    [dispatch, setDispFilterOpe]
  )

  return (
    <>
      <FilterSwitchComp setDispFilterHdl={setDispFilterHdl} />
      <TodoDisplayComp todos={filteredTodos} delTodoHdl={delTodoHdl} tglTodoHdl={tglTodoHdl} />
    </>
  )
}

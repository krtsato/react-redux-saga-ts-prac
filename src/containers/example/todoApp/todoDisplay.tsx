import React, {FC, useCallback, MouseEvent} from "react"
import {useDispatch, useSelector} from "react-redux"
import {todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoDisplayComp} from "@comp/example/todoApp/todoDisplay"

export const TodoDisplayCont: FC = () => {
  const todos = useSelector(todosSelectors.todoListSel)
  const dispatch = useDispatch()

  // onClick : delete
  const delTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.id, 10)
      dispatch(todosOperations.delTodoOpe(id))
    },
    [dispatch]
  )

  // onClick : toggle
  const tglTodoHdl = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      const id = parseInt(e.currentTarget.id, 10)
      dispatch(todosOperations.tglTodoOpe(id))
    },
    [dispatch]
  )

  return <TodoDisplayComp todos={todos} delTodoHdl={delTodoHdl} tglTodoHdl={tglTodoHdl} />
}

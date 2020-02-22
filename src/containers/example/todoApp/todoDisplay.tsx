import React, {FC, useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import {todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoDisplayComp} from "@comp/example/todoApp/todoDisplay"

export const TodoDisplayCont: FC = () => {
  const todos = useSelector(todosSelectors.todoListSel)
  const dispatch = useDispatch()

  const delTodoHdl = useCallback((id: number): void => dispatch(todosOperations.delTodoOpe(id)), []) // eslint-disable-line react-hooks/exhaustive-deps

  return <TodoDisplayComp todos={todos} delTodoHdl={delTodoHdl} />
}

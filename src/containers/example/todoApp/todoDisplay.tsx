import React, {FC, useCallback, MouseEvent} from "react"
import {useDispatch, useSelector} from "react-redux"
import {todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoDisplayComp} from "@comp/example/todoApp/todoDisplay"

export const TodoDisplayCont: FC = () => {
  const todos = useSelector(todosSelectors.todoListSel)
  const dispatch = useDispatch()

  const delTodoHdl = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    const id = parseInt(e.currentTarget.id, 10)
    dispatch(todosOperations.delTodoOpe(id)) // 要確認 : 引数で指定された event は初期状態のまま？
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <TodoDisplayComp todos={todos} delTodoHdl={delTodoHdl} />
}
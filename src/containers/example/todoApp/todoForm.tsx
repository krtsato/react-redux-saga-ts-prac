import React, {FC, ChangeEvent, useCallback, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {todosOperations, todosSelectors} from "@redx/example/todoApp"
import {TodoFormComp} from "@comp/example/todoApp/todoForm"

export const TodoFormCont: FC = () => {
  const [inputText, setInputText] = useState("")
  const latestId = useSelector(todosSelectors.latestIdSel)
  const dispatch = useDispatch()

  // onChange
  const inputHdl = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value) // 要確認 : 引数で指定された event は初期状態のまま？
  }, [])

  // onClick
  const addTodoHdl = useCallback((): void => {
    if (inputText.trim() === "") return
    dispatch(todosOperations.addTodoOpe(latestId, inputText))
    setInputText("")
  }, [latestId]) // eslint-disable-line react-hooks/exhaustive-deps

  return <TodoFormComp inputText={inputText} inputHdl={inputHdl} addTodoHdl={addTodoHdl} />
}

/*
  const delTodoHdl = useCallback(
    (id: number): void => {
      dispatch(delTodoOpe(id))
    },
    [delTodoOpe, dispatch]
  ) // eslint-disable-line react-hooks/exhaustive-deps

return (
    <>
      <h1>TODO</h1>
      <input type="text" value={inputText} onChange={inputHdl} autoFocus />
      <button type="button" onClick={addTodoHdl}>
        ADD
      </button>
      <ul>
        {todoList.map(item => (
          <TodoListItem key={item.id} onClick={delTodoHdl(item.id)}>
            {item.text}
          </TodoListItem>
        ))}
      </ul>
    </>
  )
}
*/

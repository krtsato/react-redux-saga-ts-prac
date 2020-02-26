import React, {FC, ChangeEvent, useCallback, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {todosOperations, todosSelectors} from "@redx/todos"
import {TodoFormComp} from "@comp/todos/todoForm"

export const TodoFormCont: FC = () => {
  const [inputText, setInputText] = useState("")
  const latestId = useSelector(todosSelectors.latestIdSel)
  const dispatch = useDispatch()

  // onChange
  const inputHdl = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value)
  }, [])

  // onClick
  const addTodoHdl = useCallback((): void => {
    if (inputText.trim() === "") return
    dispatch(todosOperations.addTodoOpe(latestId, inputText))
    setInputText("")
  }, [dispatch, inputText, latestId])

  return <TodoFormComp inputText={inputText} inputHdl={inputHdl} addTodoHdl={addTodoHdl} />
}

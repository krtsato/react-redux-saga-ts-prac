import {actions} from "./actions"
import {DispFilter, TodosAction, DispFilterAction} from "./types"

// for Domain Reducer
// view で クリックしたとき, id は新しいものを生成する必要がある
// const latestId = state.slice(-1)[0].id // id in the end of todos array
const addTodoOpe = (id: number, text: string, wasCompleted = false): TodosAction => {
  return actions.addTodo(id, text, wasCompleted)
}

const tglTodoOpe = (id: number): TodosAction => {
  return actions.tglTodo(id)
}

// for UI Reducer
const setDispFilterOpe = (dispFilter: DispFilter): DispFilterAction => {
  return actions.setDispFilter(dispFilter)
}

// Referenced from outside the todo domain
export const todosOperations = {
  addTodoOpe,
  tglTodoOpe,
  setDispFilterOpe
}

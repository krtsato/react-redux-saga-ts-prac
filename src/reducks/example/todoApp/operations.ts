import {actions} from "./actions"
import {DispFilter, TodosAction, DispFilterAction} from "./types"

const addTodo = (text: string): TodosAction => {
  return actions.addTodo(text)
}

const setVisibilityFilter = (dispFilter: DispFilter): DispFilterAction => {
  return actions.setVisibilityFilter(dispFilter)
}

const toggleTodo = (id: number): TodosAction => {
  return actions.toggleTodo(id)
}

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
}

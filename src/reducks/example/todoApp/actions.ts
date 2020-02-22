import {ManageAction, DispFilterAction, ActionTypes, DispFilter} from "./types"

// ========== Domain Actions ==========
// todos
const addTodoAct = (id: number, text: string, wasCompleted: boolean): ManageAction => ({
  type: ActionTypes.addTodo,
  payload: {id, text, wasCompleted}
})

const tglTodoAct = (id: number): ManageAction => ({
  type: ActionTypes.tglTodo,
  payload: {id}
})

const delTodoAct = (id: number): ManageAction => ({
  type: ActionTypes.tglTodo,
  payload: {id}
})

// ========== UI Actions ==========
// display filter
const setDispFilterAct = (dispFilter: DispFilter): DispFilterAction => ({
  type: ActionTypes.setDispFilter,
  payload: {dispFilter}
})

// ========== Referenced from the operations ==========
export const todosActions = {addTodoAct, tglTodoAct, delTodoAct, setDispFilterAct}

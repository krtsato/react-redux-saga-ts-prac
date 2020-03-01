import {ManageActions, DispFilterActions, ActionTypes, DispFilter} from "./types"

// ========== Domain Actions ==========
// todos
const addTodoAct = (id: number, text: string, wasCompleted: boolean): ManageActions["AddTodo"] => ({
  type: ActionTypes.AddTodo,
  payload: {id, text, wasCompleted}
})

const tglTodoAct = (id: number): ManageActions["TglTodo"] => ({
  type: ActionTypes.TglTodo,
  payload: {id}
})

const delTodoAct = (id: number): ManageActions["DelTodo"] => ({
  type: ActionTypes.DelTodo,
  payload: {id}
})

// ========== UI Actions ==========
// display filter
const setDispFilterAct = (dispFilter: DispFilter): DispFilterActions["SetDispFilter"] => ({
  type: ActionTypes.SetDispFilter,
  payload: {dispFilter}
})

// ========== Referenced from the operations ==========
export const todosActions = {addTodoAct, tglTodoAct, delTodoAct, setDispFilterAct}

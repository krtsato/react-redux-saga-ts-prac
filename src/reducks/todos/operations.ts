import {todosActions} from "./actions"
import {DispFilter, ManageAction, DispFilterAction} from "./types"

// ========== Domain Reducers ==========
// todos
const addTodoOpe = (id: number, text: string, wasCompleted = false): ManageAction =>
  todosActions.addTodoAct(id, text, wasCompleted)

const tglTodoOpe = (id: number): ManageAction => todosActions.tglTodoAct(id)

const delTodoOpe = (id: number): ManageAction => todosActions.delTodoAct(id)

// ========== UI Reducers ==========
// display filter
const setDispFilterOpe = (dispFilter: DispFilter): DispFilterAction =>
  todosActions.setDispFilterAct(dispFilter)

// ========== Referenced from outside the todo domain ==========
export const todosOperations = {
  addTodoOpe,
  tglTodoOpe,
  delTodoOpe,
  setDispFilterOpe
}

import {todosActions} from "./actions"
import {DispFilter, ManageActions, DispFilterActions} from "./types"

// ========== Domain Operations ==========
// todos
const addTodoOpe = (id: number, text: string, wasCompleted = false): ManageActions["AddTodo"] =>
  todosActions.addTodoAct(id, text, wasCompleted)

const tglTodoOpe = (id: number): ManageActions["TglTodo"] => todosActions.tglTodoAct(id)

const delTodoOpe = (id: number): ManageActions["DelTodo"] => todosActions.delTodoAct(id)

// ========== UI Operations ==========
// display filter
const setDispFilterOpe = (dispFilter: DispFilter): DispFilterActions["SetDispFilter"] =>
  todosActions.setDispFilterAct(dispFilter)

// ========== Referenced from outside the todos domain ==========
export const todosOperations = {
  addTodoOpe,
  tglTodoOpe,
  delTodoOpe,
  setDispFilterOpe
}

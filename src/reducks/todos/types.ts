// ========== Action Types ==========
export const ActionTypes = {
  addTodo: "ADD_TODO",
  tglTodo: "TGL_TODO",
  delTodo: "DEL_TODO",
  setDispFilter: "SET_DISP_FILTER"
} as const

// ========== Domain Types ==========
// todos data
export type Todos = Todo[]
export type Todo = {
  id: number
  text: string
  wasCompleted: boolean
}

// todos action
export type ManageAction = AddTodo | TglTodo | DelTodo

type AddTodo = {
  type: typeof ActionTypes.addTodo
  payload: {
    id: number
    text: string
    wasCompleted: boolean
  }
}

type TglTodo = {
  type: typeof ActionTypes.tglTodo
  payload: {id: number}
}

type DelTodo = {
  type: typeof ActionTypes.delTodo
  payload: {id: number}
}

// ========== UI Types ==========
// display filter data
export type DispFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED"

export const DispFilterLiteral = {
  showAll: "SHOW_ALL",
  showActive: "SHOW_ACTIVE",
  showCompleted: "SHOW_COMPLETED"
} as const

// display filer action
export type DispFilterAction = SetDispFilter

type SetDispFilter = {
  type: typeof ActionTypes.setDispFilter
  payload: {dispFilter: DispFilter}
}

/* ========== unnecessary? ==========
import {Dispatch as RawDispatch} from "redux"

// Dispatch
type TodosDispatch = RawDispatch<ManageAction | DispFilterAction>

// State
type TodosState = {
  todos: Todos
  dispFilter: DispFilter
}

// Srore
type TodosStore = Store<Todos, TodosAction>
*/

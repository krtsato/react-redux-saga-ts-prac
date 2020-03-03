// ========== Action Types ==========
export const ActionTypes = {
  AddTodo: "ADD_TODO",
  TglTodo: "TGL_TODO",
  DelTodo: "DEL_TODO",
  SetDispFilter: "SET_DISP_FILTER"
} as const

// ========== Domain Types ==========
// todos data
export type Todo = {
  id: number
  text: string
  wasCompleted: boolean
}

// todos action
export type ManageActions = {
  AddTodo: AddTodo
  TglTodo: TglTodo
  DelTodo: DelTodo
}

type AddTodo = {
  type: typeof ActionTypes.AddTodo
  payload: {
    id: number
    text: string
    wasCompleted: boolean
  }
}

type TglTodo = {
  type: typeof ActionTypes.TglTodo
  payload: {id: number}
}

type DelTodo = {
  type: typeof ActionTypes.DelTodo
  payload: {id: number}
}

// ========== UI Types ==========
// display filter data
export type DispFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED"

export const DispFilterLiteral = {
  ShowAll: "SHOW_ALL",
  ShowActive: "SHOW_ACTIVE",
  ShowCompleted: "SHOW_COMPLETED"
} as const

// display filer action
export type DispFilterActions = {
  SetDispFilter: SetDispFilter
}

type SetDispFilter = {
  type: typeof ActionTypes.SetDispFilter
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

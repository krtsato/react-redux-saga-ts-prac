import {Dispatch as RawDispatch} from "redux"

/* ===== Data Type imported from containers via index.ts =====  */
// Dispath
export type Dispatch = RawDispatch<TodosAction>

// State
export type State = {
  todos: Todos
  dispFilter: DispFilter
}

// unnecessary?
export type TodosTypes = {
  State: State
  Dispach: Dispatch
}

// Srore ... unnecessary?
// type TodosStore = Store<Todos, TodosAction>

/* ===== Data Type ===== */
// todos
export type Todos = Todo[]
export type Todo = {
  id: number
  text: string
  wasCompleted: boolean
}

// displayFilter
export type DispFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED"
export const DispFilterLiteral = {
  showAll: "SHOW_ALL",
  showActive: "SHOW_ACTIVE",
  showCompleted: "SHOW_COMPLETED"
} as const

/* =====  Action ===== */
export const ActionTypes = {
  addTodo: "ADD_TODO",
  tglTodo: "TGL_TODO",
  setDispFilter: "SET_DISP_FILTER"
} as const

// todos
export type TodosAction = AddTodo | TglTodo

type AddTodo = {
  type: typeof ActionTypes.addTodo
  payload: {
    id: number
    text: string
  }
}

type TglTodo = {
  type: typeof ActionTypes.tglTodo
  payload: {id: number}
}

// displayFilter
export type DispFilterAction = SetDispFilter

type SetDispFilter = {
  type: typeof ActionTypes.setDispFilter
  payload: {dispFilter: DispFilter}
}

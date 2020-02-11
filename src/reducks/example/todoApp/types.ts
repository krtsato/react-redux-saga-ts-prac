/* 注意
 * ・completed -> wasCompleted
 * ・visibilityFilter -> visibility
 * ・setVisibilityFilter -> setVisibility
 */

import {Store, Dispatch} from "redux"

// Store
export type TodosStore = Store<Todos, TodosAction>

// Dispath
export type TodosDispatch = Dispatch<TodosAction>

// State
export type TodosState = {
  todos: Todos
  visibility: Visibility
}

export type Todos = Todo[]

export type Todo = {
  id: number
  text: string
  wasCompleted: boolean
}

export type Visibility = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED"

// Action
export type TodosAction = AddTodo | TglTodo

export type VisibilityAction = SetVisibility

export const ActionTypes = {
  addTodo: "ADD_TODO",
  tglTodo: "TGL_TODO",
  setVisibilty: "SET_VISIBILITY"
} as const

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

type SetVisibility = {
  type: typeof ActionTypes.setVisibilty
  payload: {visibility: Visibility}
}

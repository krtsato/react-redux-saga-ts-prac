import {combineReducers} from "redux"
import {Todo, Todos, TodosAction, DispFilter, DispFilterAction, ActionTypes, DispFilterLiteral} from "./types"

const createTodo = (id: number, text: string): Todo => ({
  id,
  text,
  wasCompleted: false
})

const tglTodo = (todos: Todos, id: number): Todos =>
  todos.map(todo => (todo.id === id ? {...todo, wasCompleted: !todo.wasCompleted} : todo))

// Domain Reducer for todos
const todosReducer = (state: Todos = [], action: TodosAction): Todos => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return [...state, createTodo(action.payload.id + 1, action.payload.text)]
    case ActionTypes.tglTodo:
      return tglTodo(state, action.payload.id)
    default: {
      const _exhaustion: never = action
      return state
    }
  }
}

// UI Reducer for visibility
const dispFilterReducer = (
  state: DispFilter = DispFilterLiteral.showAll,
  action: DispFilterAction
): DispFilter => {
  switch (action.type) {
    case ActionTypes.setDispFilter:
      return action.payload.dispFilter
    default: {
      // If you add a action, release the following union-check comment
      // const _exhaustion: never = action
      return state
    }
  }
}

export const todosReducers = combineReducers({
  todosReducer,
  dispFilterReducer
})

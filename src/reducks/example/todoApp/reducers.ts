import {combineReducers} from "redux"
import {Todos, TodosAction, DispFilter, DispFilterAction, ActionTypes, DispFilterLiteral} from "./types"

const toggledTodos = (todos: Todos, id: number): Todos =>
  todos.map(todo => (todo.id === id ? {...todo, wasCompleted: !todo.wasCompleted} : todo))

// Domain Reducer for todos
const todosRed = (state: Todos = [], action: TodosAction): Todos => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return [...state, action.payload]
    case ActionTypes.tglTodo:
      return toggledTodos(state, action.payload.id)
    default: {
      const _exhaustion: never = action
      return state
    }
  }
}

// UI Reducer for display filter
const dispFilterRed = (
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

// Referenced from outside the todo domain
export const todosReducers = combineReducers({
  todosRed,
  dispFilterRed
})

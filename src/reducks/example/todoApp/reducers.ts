import {combineReducers} from "redux"
import {Todo, Todos, TodosAction, Visibility, VisibilityAction, ActionTypes} from "./types"
import {addTodo} from "./actions"

const createTodo = (id: number, text: string): Todo => ({
  id,
  text,
  wasCompleted: false
})

const tglTodo = (todos: Todos, id: number): Todos =>
  todos.map(todo => (todo.id === id ? {...todo, wasCompleted: !todo.wasCompleted} : todo))

// Domain Reducer for todos
const todos = (state: Todos = [], action: TodosAction): Todos => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return [...state, createTodo(action.payload.id + 1, action.payload.text)]
    case ActionTypes.tglTodo:
      return tglTodo(state, action.payload.id)
    default: {
      const _: never = action
      return state
    }
  }
}

// UI Reducer for visibility
const visibility = (state: Visibility = "SHOW_ALL", action: VisibilityAction): Visibility => {
  switch (action.type) {
    case ActionTypes.setVisibilty:
      return action.payload.visibility
    default: {
      return state
    }
  }
}

/* state shape
todosState {
  todos: [],
  visibility: "SHOW_ALL"
}
*/

const todosReducer = combineReducers({
  todos,
  visibility
})

export default todosReducer

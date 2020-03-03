import {Reducer, combineReducers} from "redux"
import {Todo, ManageActions, DispFilter, DispFilterActions, ActionTypes, DispFilterLiteral} from "./types"

// ========== Domain Reducers ==========
// todos
const manageRed: Reducer<Todo[], ManageActions["AddTodo" | "TglTodo" | "DelTodo"]> = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.AddTodo:
      return [...state, action.payload]
    case ActionTypes.TglTodo:
      return state.map(todo =>
        todo.id === action.payload.id ? {...todo, wasCompleted: !todo.wasCompleted} : todo
      )
    case ActionTypes.DelTodo:
      return state.filter(todo => todo.id !== action.payload.id)
    default: {
      const _exhaustion: never = action
      return state
    }
  }
}

// ========== UI Reducers ==========
// display filter
const dispFilterRed: Reducer<DispFilter, DispFilterActions["SetDispFilter"]> = (
  state = DispFilterLiteral.ShowAll,
  action
) => {
  switch (action.type) {
    case ActionTypes.SetDispFilter:
      return action.payload.dispFilter
    default: {
      // If you add a action, release the following union-check comment
      // const _exhaustion: never = action
      return state
    }
  }
}

// ========== Referenced from the store ==========
export const todosReducers = combineReducers({
  manage: manageRed,
  dispFilter: dispFilterRed
})

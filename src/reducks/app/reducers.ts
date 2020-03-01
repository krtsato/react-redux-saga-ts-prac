import {Reducer, combineReducers} from "redux"
import {AppState, AppActions, ActionTypes} from "./types"

// ========== Domain Reducers ==========
const initAppState = {errorMsg: ""}

const flashRed: Reducer<AppState, AppActions["CatchError"]> = (state = initAppState, action) => {
  switch (action.type) {
    case ActionTypes.CatchError:
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    default: {
      // If you add a action, release the following union-check comment
      // const _exhaustion: never = action
      return state
    }
  }
}

// ========== Referenced from the store ==========
export const appReducers = combineReducers({
  flash: flashRed
})

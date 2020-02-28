import {Reducer, combineReducers} from "redux"
import {GitHubState, GitHubAction, ActionTypes} from "./types"

// ========== Domain Reducers ==========
// github
const githubRed: Reducer<GitHubState, GitHubAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.getMembersStart:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    /*
      return {
        ...state,
        users: [], <- これ不要では？
        isLoading: true
      }
    */
    case ActionTypes.getMembersSucceed:
      return {
        ...state,
        users: action.payload.users,
        isLoading: action.payload.isLoading
      }
    case ActionTypes.getMembersFail:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error
      }
    default: {
      const _exhaustion: never = action
      return state
    }
  }
}

// ========== UI Reducers ==========

export const githubReducers = combineReducers({
  github: githubRed
})

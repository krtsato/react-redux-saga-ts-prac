import {Reducer, combineReducers} from "redux"
import {CompaniesState, MembersActions, ActionTypes} from "./types"

// ========== Domain Reducers ==========
// github
const initCompaniesState: CompaniesState = {
  companyName: "companyName",
  githubUsers: []
}

const membersRed: Reducer<CompaniesState, MembersActions["GetMembers"] | MembersActions["InitMembers"]> = (
  state = initCompaniesState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GetMembers:
      return {
        ...state,
        githubUsers: action.payload.githubUsers
      }
    case ActionTypes.InitMembers:
      return {
        ...state,
        githubUsers: action.payload.githubUsers
      }
    default: {
      // const _exhaustion: never = action
      return state
    }
  }
}

// ========== Referenced from the store ==========
export const companiesReducers = combineReducers({
  members: membersRed
})

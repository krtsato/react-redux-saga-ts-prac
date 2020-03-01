import {Reducer, combineReducers} from "redux"
import {CompaniesState, MembersActions, ActionTypes} from "./types"

// ========== Domain Reducers ==========
// github
const initCompaniesState: CompaniesState = {
  companyName: "companyName",
  githubUsers: []
}

const membersRed: Reducer<CompaniesState, MembersActions["GetMembers"]> = (
  state = initCompaniesState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GetMembers:
      return {
        ...state,
        users: action.payload.githubUsers
      }
    default: {
      // If you add a action, release the following union-check comment
      // const _exhaustion: never = action
      return state
    }
  }
}

// ========== Referenced from the store ==========
export const companiesReducers = combineReducers({
  members: membersRed
})

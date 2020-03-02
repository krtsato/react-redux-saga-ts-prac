import {GithubUser, MembersActions, ActionTypes} from "./types"

// ========== Domain Actions ==========
// companies
const getMembersAct = (companyName: string, githubUsers: GithubUser[]): MembersActions["GetMembers"] => ({
  type: ActionTypes.GetMembers,
  payload: {companyName, githubUsers}
})

const initMembersAct = (githubUsers: GithubUser[]): MembersActions["InitMembers"] => ({
  type: ActionTypes.InitMembers,
  payload: {githubUsers}
})

// ========== Referenced from the operations ==========
export const companiesActions = {getMembersAct, initMembersAct}

import {GithubUser, MembersActions, ActionTypes} from "./types"

// ========== Domain Actions ==========
// companies
const getMembersAct = (companyName: string, githubUsers: GithubUser[]): MembersActions["GetMembers"] => ({
  type: ActionTypes.GetMembers,
  payload: {companyName, githubUsers}
})

// ========== Referenced from the operations ==========
export const companiesActions = {getMembersAct}

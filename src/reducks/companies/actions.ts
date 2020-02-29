import {AxiosError} from "axios"
import {User, GithubAction, ActionTypes} from "./types"

const getMembersAct = {
  start: (companyName: string, isLoading: boolean): GithubAction => ({
    type: ActionTypes.getMembersStart,
    payload: {companyName, isLoading}
  }),

  succeed: (companyName: string, users: User[], isLoading: boolean): GithubAction => ({
    type: ActionTypes.getMembersSucceed,
    payload: {companyName, users, isLoading}
  }),

  fail: (companyName: string, error: AxiosError, isLoading: boolean): GithubAction => ({
    type: ActionTypes.getMembersFail,
    payload: {companyName, error, isLoading},
    error: true
  })
}

// ========== Referenced from the operations ==========
export const companiesActions = {getMembersAct}

import {AxiosError} from "axios"

// ========== Action Types ==========
export const ActionTypes = {
  getMembersStart: "GITHUB/GET_MEMBERS_START",
  getMembersSucceed: "GITHUB/GET_MEMBERS_SUCCEED",
  getMembersFail: "GITHUB/GET_MEMBERS_FAIL"
} as const

// ========== Domain Types ==========
export type GitHubState = {
  companyName: string
  users?: User[]
  isLoading: boolean
  error?: AxiosError
}

// github data
export type User = {
  /* eslint-disable camelcase */
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  /* eslint-enable camelcase */
}

// github action
export type GitHubAction = GetMembersStart | GetMembersSucceed | GetMembersFail

type GetMembersStart = {
  type: typeof ActionTypes.getMembersStart
  payload: {
    companyName: string
    isLoading: boolean
  }
}

type GetMembersSucceed = {
  type: typeof ActionTypes.getMembersSucceed
  payload: {
    companyName: string
    users: User[]
    isLoading: boolean
  }
}

type GetMembersFail = {
  type: typeof ActionTypes.getMembersFail
  payload: {
    companyName: string
    error: AxiosError
    isLoading: boolean
  }
  error: boolean
}

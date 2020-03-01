import {AxiosError} from "axios"

// ========== Action Types ==========
export const ActionTypes = {
  GetMembers: "COMPANIES/GET_MEMBERS"
} as const

// ========== Domain Types ==========
// State
export type CompaniesState = {
  companyName: string
  githubUsers: GithubUser[]
  error?: AxiosError
}

// companies user data
export type GithubUser = {
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

// companies action
export type MembersActions = {
  GetMembers: GetMembers
}

type GetMembers = {
  type: typeof ActionTypes.GetMembers
  payload: {
    companyName: string
    githubUsers: GithubUser[]
  }
}

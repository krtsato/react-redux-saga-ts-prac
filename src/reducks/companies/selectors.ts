import {Root} from "@redx/types"
import {GithubUser} from "./types"

// ========== Domain Selector ==========
// companies
const getMembersSel = (state: Root.State): GithubUser[] => state.companies.members.githubUsers

// ========== Referenced from outside the todos domain ==========
export const companiesSelectors = {getMembersSel}

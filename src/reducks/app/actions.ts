import {ActionTypes, AppActions} from "./types"

// ========== Domain Actions ==========
// app
const catchErrorAct = (errorMsg: string): AppActions["CatchError"] => ({
  type: ActionTypes.CatchError,
  payload: {errorMsg}
})

// ========== Referenced from the operations ==========
export const appActions = {catchErrorAct}

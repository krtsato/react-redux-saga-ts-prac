import {appActions} from "./actions"
import {AppActions} from "./types"

// ========== Domain Operations ==========
// app
const catchErrorOpe = (errorMsg: string): AppActions["CatchError"] => appActions.catchErrorAct(errorMsg)

// ========== Referenced from outside the todos domain ==========
export const appOperations = {catchErrorOpe}

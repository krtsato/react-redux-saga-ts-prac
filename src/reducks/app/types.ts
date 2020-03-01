// App means the common state being used through app overrall

// ========== Action Types ==========
export const ActionTypes = {
  CatchError: "APP/CATCH_ERROR"
} as const

// ========== App Types ==========
// State
export type AppState = {
  errorMsg: string
}

// error action
export type AppActions = {
  CatchError: CatchError
}

type CatchError = {
  type: typeof ActionTypes.CatchError
  payload: {errorMsg: string}
}

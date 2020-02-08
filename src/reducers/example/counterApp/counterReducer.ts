import {Reducer} from "redux"
import {CounterAction, CounterActionType} from "@actn/example/counterApp/counterAction"

export interface CounterState {
  count: number
}

export const initialState: CounterState = {count: 0}

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0)
      }
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    default: {
      return state
    }
  }
}

import {TodosAction, DispFilterAction, ActionTypes, DispFilter} from "./types"

// Action Creator

export const addTodo = (id: number, text: string): TodosAction => ({
  type: ActionTypes.addTodo,
  payload: {id, text}
})

export const tglTodo = (id: number): TodosAction => ({
  type: ActionTypes.tglTodo,
  payload: {id}
})

export const setDispFilter = (dispFilter: DispFilter): DispFilterAction => ({
  type: ActionTypes.setDispFilter,
  payload: {dispFilter}
})

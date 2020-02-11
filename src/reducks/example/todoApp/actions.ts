import {TodosAction, VisibilityAction, ActionTypes, Visibility} from "./types"

// Action Creator

export const addTodo = (id: number, text: string): TodosAction => ({
  type: ActionTypes.addTodo,
  payload: {id, text}
})

export const tglTodo = (id: number): TodosAction => ({
  type: ActionTypes.tglTodo,
  payload: {id}
})

export const setVisibility = (visibility: Visibility): VisibilityAction => ({
  type: ActionTypes.setVisibilty,
  payload: {visibility}
})

export default {
  addTodo,
  tglTodo,
  setVisibility
}

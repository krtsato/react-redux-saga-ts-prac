import {TodosAction, DispFilterAction, ActionTypes, DispFilter} from "./types"

// Action Creator
const addTodo = (id: number, text: string, wasCompleted: boolean): TodosAction => ({
  type: ActionTypes.addTodo,
  payload: {id, text, wasCompleted}
})

const tglTodo = (id: number): TodosAction => ({
  type: ActionTypes.tglTodo,
  payload: {id}
})

const setDispFilter = (dispFilter: DispFilter): DispFilterAction => ({
  type: ActionTypes.setDispFilter,
  payload: {dispFilter}
})

// Referenced from inside the todo domain
export const actions = {addTodo, tglTodo, setDispFilter}

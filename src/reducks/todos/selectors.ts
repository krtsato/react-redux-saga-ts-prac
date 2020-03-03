import {Root} from "@redx/types"
import {Todo, DispFilterLiteral} from "./types"

// ========== Domain Selector ==========
// todos
const todoListSel = (state: Root.State): Todo[] => state.todos.manage

// get todo's id at the end of todos array
const latestIdSel = (state: Root.State): number =>
  state.todos.manage.length === 0 ? 0 : state.todos.manage.slice(-1)[0].id + 1

// ========== UI Selector ==========
// display filter
const dispFilterSel = (state: Root.State): Todo[] => {
  const {manage, dispFilter} = state.todos
  switch (dispFilter) {
    case DispFilterLiteral.ShowAll:
      return manage
    case DispFilterLiteral.ShowCompleted:
      return manage.filter(todo => todo.wasCompleted)
    case DispFilterLiteral.ShowActive:
      return manage.filter(todo => !todo.wasCompleted)
    default: {
      const _exhaustion: never = dispFilter
      throw new Error(`Unknown filter: ${dispFilter}`)
    }
  }
}

// ========== Referenced from outside the todos domain ==========
export const todosSelectors = {todoListSel, latestIdSel, dispFilterSel}

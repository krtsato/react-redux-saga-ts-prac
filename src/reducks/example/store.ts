import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import {todosReducers} from "@redx/example/todoApp/index"

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
}
declare let window: WindowWithDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  // domain name: the integrated reducer
  todos: todosReducers
})

export type RootState = ReturnType<typeof rootReducer>

export const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware()))

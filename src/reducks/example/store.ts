import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import {todosReducers} from "@redx/example/todoApp/index"

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
}
declare let window: WindowWithDevTools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const rootReducer = combineReducers({
  // domain name: the integrated reducer
  todos: todosReducers
})

export const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware()))

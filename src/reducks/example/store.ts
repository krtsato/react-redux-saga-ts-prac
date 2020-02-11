import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import * as reducers from "@redx/example/todoApp/index" // import all reducers from ducks/index.js

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
}
declare let window: WindowWithDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers(reducers)

export const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware()))

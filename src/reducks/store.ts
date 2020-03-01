import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import {appReducers} from "@redx/app"
import {todosReducers} from "@redx/todos/"
import {companiesReducers} from "@redx/companies"

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
}
declare let window: WindowWithDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const rootReducer = combineReducers({
  // domain name: the integrated reducer
  app: appReducers,
  todos: todosReducers,
  companies: companiesReducers
})

export const configureStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(/* add middleware here  */))
)

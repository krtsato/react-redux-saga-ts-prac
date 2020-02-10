import React, {FC} from "react"
import {Provider} from "react-redux"
import {createStore} from "redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {counterReducer, initialState} from "@redx/example/counterApp/reducers"
import {styleTheme} from "@comm/styleTheme"
import {todoCont} from "@cont/example/todoApp/todoCont"

export const App: FC = () => {
  const store = createStore(counterReducer, initialState)
  return (
    <Provider store={store}>
      <ThemeProvider theme={styleTheme}>
        <CssBaseline />
        <CounterCont />
      </ThemeProvider>
    </Provider>
  )
}

/* ==================================
For example: peopleListApp
<BrowserRouter>
  <ThemeProvider theme={styleTheme}>
    <CssBaseline />
    <Switch>
      <Route path="/characters/:abbrev">
        <CharasIndexCont />
      </Route>
      <Route exact path="/">
        <HomeComp />
      </Route>
      <Redirect to="/" />
    </Switch>
  </ThemeProvider>
</BrowserRouter>
==================================== */

/* ===================================
For example: taskManageApp
export const App: React.FC<HelloProps> = () => (
  <Provider store={store}>
    <InboxScreen error={null} />
  </Provider>
)
==================================== */

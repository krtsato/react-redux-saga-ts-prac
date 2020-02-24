import React, {FC} from "react"
import {Provider} from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {configureStore} from "@redx/example/store"
import {styleTheme} from "@comm/styleTheme"
import {TodoFormCont} from "@cont/example/todoApp/todoForm"
import {TodoDisplayCont} from "@cont/example/todoApp/todoDisplay"

export const App: FC = () => (
  <Provider store={configureStore}>
    <ThemeProvider theme={styleTheme}>
      <CssBaseline />
      <TodoFormCont />
      <TodoDisplayCont />
    </ThemeProvider>
  </Provider>
)

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

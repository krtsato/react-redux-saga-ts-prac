import React, {FC} from "react"
import {Provider} from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {configureStore} from "@redx/store"
import {styleTheme} from "@comm/styleTheme"
import {TodoFormCont} from "@cont/todos/todoForm"
import {TodoDisplayCont} from "@cont/todos/todoDisplay"

export const App: FC = () => (
  <Provider store={configureStore}>
    <ThemeProvider theme={styleTheme}>
      <CssBaseline />
      <TodoFormCont />
      <TodoDisplayCont />
    </ThemeProvider>
  </Provider>
)

/* ================ Router example ==================
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

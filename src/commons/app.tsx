import React, {FC} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {HomeComp} from "@comp/example/peopleListApp/home/index"
import {CharasIndexCont} from "@cont/example/peopleListApp/charas/index"
import {styleTheme} from "./styleTheme"

export const App: FC = () => (
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
)

/* ===================================
For storybook example
export const App: React.FC<HelloProps> = () => (
  <Provider store={store}>
    <InboxScreen error={null} />
  </Provider>
)
==================================== */

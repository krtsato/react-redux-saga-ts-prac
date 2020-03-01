import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {styleTheme} from "@comm/styleTheme"
import {configureStore} from "@redx/store"
import {App} from "@cont/app/app"

ReactDOM.render(
  <Provider store={configureStore}>
    <ThemeProvider theme={styleTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

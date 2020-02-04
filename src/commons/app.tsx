import React, {FC} from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import {ThemeProvider} from "@material-ui/core/styles"
import {HogeCont} from "@cont/hoge"
import {styleTheme} from "./styleTheme"

export const App: FC = () => (
  <ThemeProvider theme={styleTheme}>
    <CssBaseline />
    <HogeCont />
  </ThemeProvider>
)

/* ===================================
For storybook example
export const App: React.FC<HelloProps> = () => (
  <Provider store={store}>
    <InboxScreen error={null} />
  </Provider>
)
==================================== */

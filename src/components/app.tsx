import React from "react"
import {Provider} from "react-redux"
import store from "@/example/lib/redux"
import {InboxScreen} from "@/example/inboxScreen"

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <InboxScreen error={null} />
    </Provider>
  )
}

/*
import React from "react"
import Button from "@material-ui/core/Button"

interface HelloProps {
  compiler: string
  framework: string
}

export const App = (helloProps: HelloProps): JSX.Element => (
  <Button variant="contained" color="primary">
    Hello from {helloProps.compiler} and {helloProps.framework}!
  </Button>
)
*/

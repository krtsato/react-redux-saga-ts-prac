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

/* ===================================
For storybook example
export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <InboxScreen error={null} />
    </Provider>
  )
}
==================================== */

import React from "react"
import Button from "@material-ui/core/Button"

interface HelloProps {
  compiler: string
  framework: string
}

export const App: React.FC<HelloProps> = helloProps => (
  <Button variant="contained" color="primary">
    Hello from {helloProps.compiler} and {helloProps.framework}!
  </Button>
)

/* ===================================
For storybook example
export const App: React.FC<HelloProps> = () => (
  <Provider store={store}>
    <InboxScreen error={null} />
  </Provider>
)
==================================== */

import React from "react"

interface HelloProps {
  compiler: string
  framework: string
}

export const App = (helloProps: HelloProps): JSX.Element => (
  <h1>
    Hello from {helloProps.compiler} and {helloProps.framework}!
  </h1>
)

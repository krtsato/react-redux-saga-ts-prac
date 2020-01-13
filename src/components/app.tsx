import React from "react";

interface HelloProps {
  compiler: string
  framework: string
}

export function App(helloProps: HelloProps) {
  return <h1>Hello from {helloProps.compiler} and {helloProps.framework}!</h1>
}

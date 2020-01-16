import React from "react"
import ReactDOM from "react-dom"
import {App} from "@/app"

test("innerHTMLに含まれているか確認", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App compiler="TypeScript" framework="React" />, div)

  // <App /> 内の innerHTML にメッセージが含まれているか
  expect(div.innerHTML).toContain("Hello from TypeScript and React!")
  ReactDOM.unmountComponentAtNode(div)
})

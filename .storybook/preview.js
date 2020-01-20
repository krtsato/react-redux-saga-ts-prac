import {addParameters} from "@storybook/react"
import {DocsPage, DocsContainer} from "@storybook/addon-docs/blocks"

// This file is a global decorators.
// addDecorator(...)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

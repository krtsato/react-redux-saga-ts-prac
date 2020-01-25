import React from "react"
import {action} from "@storybook/addon-actions"
import {Provider} from "react-redux"
import {InboxScreen} from "./inboxScreen"
import {defaultTasksData} from "@/example/inboxScreen/taskList.stories"

const store = {
  getState: (): object => ({tasks: defaultTasksData}),
  subscribe: (): number => 0,
  dispatch: action("dispatch")
}

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story: Function): JSX.Element => <Provider store={store}>{story()}</Provider>]
}

export const Default = (): JSX.Element => <InboxScreen error={null} />

export const Error = (): JSX.Element => <InboxScreen error="Something" />

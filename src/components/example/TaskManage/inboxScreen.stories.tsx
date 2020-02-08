import React, {FC} from "react"
import {action} from "@storybook/addon-actions"
import {Provider} from "react-redux"
import {defaultTasksData} from "@comp/example/TaskManage/inboxScreen/taskList.stories"
import {InboxScreen} from "./inboxScreen"

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

export const Default: FC = () => <InboxScreen error={null} />

export const Error: FC = () => <InboxScreen error="Something" />

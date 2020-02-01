import React, {FC} from "react"
import {action} from "@storybook/addon-actions"
import {Task} from "./task"

export default {
  component: Task,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
}

export const Default: FC = () => <Task {...taskData} />

export const Pinned: FC = () => <Task {...taskData} state="TASK_PINNED" />

export const Archived: FC = () => <Task {...taskData} state="TASK_ARCHIVED" />

import React from "react"
import {TaskList} from "./taskList"
import {taskData, actionsData} from "@/example/inboxScreen/taskList/task.stories"

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story: Function): JSX.Element => <div style={{padding: "3rem"}}>{story()}</div>],
  excludeStories: /.*Data$/
}

export const defaultTasksData = [
  {...taskData, id: "1", title: "Task 1"},
  {...taskData, id: "2", title: "Task 2"},
  {...taskData, id: "3", title: "Task 3"},
  {...taskData, id: "4", title: "Task 4"},
  {...taskData, id: "5", title: "Task 5"},
  {...taskData, id: "6", title: "Task 6"}
]

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  {id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED", updatedAt: null}
]

export const Default = (): JSX.Element => (
  <TaskList loading={false} tasks={defaultTasksData} {...actionsData} />
)

export const WithPinnedTasks = (): JSX.Element => (
  <TaskList loading={false} tasks={withPinnedTasksData} {...actionsData} />
)

export const Loading = (): JSX.Element => <TaskList loading tasks={[]} {...actionsData} />

export const Empty = (): JSX.Element => <TaskList loading={false} tasks={[]} {...actionsData} />

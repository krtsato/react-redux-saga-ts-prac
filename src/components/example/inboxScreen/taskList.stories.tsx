import React, {FC} from "react"
import {taskData} from "@comp/example/inboxScreen/taskList/task.stories"
import {TaskList} from "./taskList"

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
  {...taskData, id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED", updatedAt: null}
]

export const Default: FC = () => <TaskList loading={false} tasks={defaultTasksData} />

export const WithPinnedTasks: FC = () => <TaskList loading={false} tasks={withPinnedTasksData} />

export const Loading: FC = () => <TaskList loading tasks={[]} />

export const Empty: FC = () => <TaskList loading={false} tasks={[]} />

import React from "react"
import {Task, ActionsProps, TaskProps} from "@/example/taskList/task"
import {LoadingRow} from "@/example/taskList/loadingRow"

interface TaskListProps {
  loading: boolean
  tasks: Array<TaskProps>
}

export const TaskList = (taskListProps: TaskListProps, actionsProps: ActionsProps): JSX.Element => {
  const {loading, tasks} = taskListProps
  const tasksInOrder = [
    ...tasks.filter(t => t.state === "TASK_PINNED"),
    ...tasks.filter(t => t.state !== "TASK_PINNED")
  ]

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    )
  }

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} {...task} {...actionsProps} />
      ))}
    </div>
  )
}

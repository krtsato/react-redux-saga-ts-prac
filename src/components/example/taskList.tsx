import React from "react"
import {Task, ActionsProps, TaskProps} from "@/example/taskList/task"

interface TaskListProps {
  loading: boolean
  tasks: Array<TaskProps>
}

export const TaskList = (taskListProps: TaskListProps, actionsProps: ActionsProps): JSX.Element => {
  const {loading, tasks} = taskListProps

  if (loading) return <div className="list-items">loading</div>

  if (tasks.length === 0) return <div className="list-items">empty</div>

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} {...task} {...actionsProps} />
      ))}
    </div>
  )
}

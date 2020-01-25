import React from "react"
import {StarIcon} from "@/example/inboxScreen/taskList/task/starIcon"

export interface ActionsProps {
  onArchiveTask(id: string): void
  onPinTask(id: string): void
}

export interface TaskProps {
  id: string
  title: string
  state: string
  updatedAt: Date | null
}

export const Task = (taskProps: TaskProps, actionsProps: ActionsProps): JSX.Element => {
  const {id, title, state} = taskProps
  const {onArchiveTask, onPinTask} = actionsProps

  const onEventArchive = (): void => {
    onArchiveTask(id)
  }

  const onEventStop = (e: React.MouseEvent | React.KeyboardEvent): void => {
    e.stopPropagation()
  }

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor="cbInput">
        <input
          id="cbInput"
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={onEventArchive}
          onKeyDown={onEventArchive}
          role="button"
          tabIndex={0}
        />
      </label>

      <div className="title">
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>

      <div className="actions" onClick={onEventStop} onKeyDown={onEventStop} role="button" tabIndex={0}>
        <StarIcon id={id} state={state} onPinTask={onPinTask} />
      </div>
    </div>
  )
}

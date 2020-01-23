import React from "react"

interface TaskProps {
  task: {
    id: string
    title: string
    state: string
  }
  onArchiveTask(): void
  onPinTask(): void
}

export const Task = (taskProps: TaskProps): JSX.Element => {
  const {
    task: {id, title, state},
    onArchiveTask,
    onPinTask
  } = taskProps

  const onClickStop = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }

  const onKeyDownStop = (e: React.KeyboardEvent): void => {
    e.stopPropagation()
  }

  const StarIcon = (): JSX.Element | null => {
    if (state === "TASK_ARCHIVED") {
      return (
        <div onClick={onPinTask(id)} onKeyDown={onPinTask(id)} role="button" tabIndex={0}>
          <span className="icon-star" />
        </div>
      )
    }
    return null
  }

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor="cbInput">
        <input
          id="cbInput"
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={onArchiveTask(id)}
          onKeyDown={onArchiveTask(id)}
          role="button"
          tabIndex={0}
        />
      </label>

      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={onClickStop} onKeyDown={onKeyDownStop} role="button" tabIndex={0}>
        <StarIcon />
      </div>
    </div>
  )
}

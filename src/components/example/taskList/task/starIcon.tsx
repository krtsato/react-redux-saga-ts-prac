import React from "react"

interface StarIconProps {
  id: string
  state: string
  onPinTask(id: string): void
}

export const StarIcon = (props: StarIconProps): JSX.Element | null => {
  const {id, state, onPinTask} = props
  const onEventPin = (): void => {
    onPinTask(id)
  }

  if (state === "TASK_ARCHIVED") {
    return (
      <div onClick={onEventPin} onKeyDown={onEventPin} role="button" tabIndex={0}>
        <span className="icon-star" />
      </div>
    )
  }
  return null
}

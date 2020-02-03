import React from "react"
import {connect} from "react-redux"
import {TaskList} from "@comp/example/inboxScreen/taskList"

interface InboxScreenProps {
  error: string | null
}

export const InboxScreen: React.FC<InboxScreenProps> = inboxScreenProps => {
  const {error} = inboxScreenProps
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    )
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList loading={false} tasks={[]} />
    </div>
  )
}

export default connect((error: string | null) => ({error}))(InboxScreen)

import React, {FC, MouseEvent} from "react"
import {Todo} from "@redx/example/todoApp"
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded"
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core"
import {useStyles} from "./todo.styles"

type TodoProps = {
  todo: Todo
  delTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
  tglTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TodoComp: FC<TodoProps> = ({todo, delTodoHdl, tglTodoHdl}) => {
  const classes = useStyles(todo.wasCompleted)

  return (
    <ListItem key={todo.id}>
      <ListItemAvatar>
        <Avatar>
          <AssignmentTwoToneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={
          <Typography variant="body1" className={classes.completedText}>
            {todo.text}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        {todo.wasCompleted ? (
          <IconButton id={`${todo.id}`} aria-label="complete" onClick={tglTodoHdl}>
            <ReplayRoundedIcon />
          </IconButton>
        ) : (
          <IconButton id={`${todo.id}`} aria-label="incomplete" onClick={tglTodoHdl}>
            <DoneOutlineRoundedIcon />
          </IconButton>
        )}
        <IconButton id={`${todo.id}`} aria-label="delete" onClick={delTodoHdl}>
          <DeleteTwoToneIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

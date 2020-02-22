import React, {FC, MouseEvent} from "react"
import {Todo} from "@redx/example/todoApp"
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core"

type TodoProps = {
  todo: Todo
  delTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TodoComp: FC<TodoProps> = ({todo, delTodoHdl}) => (
  <ListItem key={todo.id}>
    <ListItemAvatar>
      <Avatar>
        <AssignmentTwoToneIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      disableTypography
      primary={<Typography variant={todo.wasCompleted ? "overline" : "body1"}>{todo.text}</Typography>}
    />
    <ListItemSecondaryAction>
      <IconButton id={`${todo.id}`} aria-label="delete" edge="end" onClick={delTodoHdl}>
        <DeleteTwoToneIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

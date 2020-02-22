import React, {FC, MouseEvent} from "react"
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  IconButton
} from "@material-ui/core"
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import {Todos} from "@redx/example/todoApp"

type TodoDisplayProps = {
  todos: Todos
  delTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TodoDisplayComp: FC<TodoDisplayProps> = ({todos, delTodoHdl}) => (
  <List>
    {todos.map(todo => (
      <ListItem key={todo.id}>
        <ListItemAvatar>
          <Avatar>
            <AssignmentTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="text about todo" />
        <ListItemSecondaryAction>
          {/* id をメモ化すべし */}
          <IconButton id={`${todo.id}`} aria-label="delete" edge="end" onClick={delTodoHdl}>
            <DeleteTwoToneIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  /*
    <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
) */
)

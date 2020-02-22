import React, {FC, MouseEvent} from "react"
import {List} from "@material-ui/core"
import {Todos} from "@redx/example/todoApp"
import {TodoComp} from "@comp/example/todoApp/todo"

type TodoDisplayProps = {
  todos: Todos
  delTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TodoDisplayComp: FC<TodoDisplayProps> = ({todos, delTodoHdl}) => (
  <List>
    {todos.map(todo => (
      <TodoComp key={todo.id} todo={todo} delTodoHdl={delTodoHdl} />
    ))}
  </List>
)

import React, {FC, MouseEvent} from "react"
import {List} from "@material-ui/core"
import {Todo} from "@redx/todos"
import {TodoComp} from "@comp/todos/todo"

type TodoDisplayProps = {
  todos: Todo[]
  delTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
  tglTodoHdl: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TodoDisplayComp: FC<TodoDisplayProps> = ({todos, delTodoHdl, tglTodoHdl}) => (
  <List>
    {todos.map(todo => (
      <TodoComp key={todo.id} todo={todo} delTodoHdl={delTodoHdl} tglTodoHdl={tglTodoHdl} />
    ))}
  </List>
)

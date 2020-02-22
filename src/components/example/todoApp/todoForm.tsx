import React, {FC, ChangeEvent} from "react"
import {Button, Typography, TextField} from "@material-ui/core"
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"

type TodoFormProps = {
  inputText: string
  inputHdl: (e: ChangeEvent<HTMLInputElement>) => void
  addTodoHdl: VoidFunction
}

export const TodoFormComp: FC<TodoFormProps> = ({inputText, inputHdl, addTodoHdl}) => (
  <>
    <Typography variant="h1">TODO</Typography>
    <TextField
      id="todoFormInput"
      label="Todo"
      multiline
      value={inputText}
      onChange={inputHdl}
      variant="filled"
      autoFocus
    />
    <Button variant="contained" startIcon={<CreateRoundedIcon />} onClick={addTodoHdl}>
      ADD
    </Button>
  </>
)

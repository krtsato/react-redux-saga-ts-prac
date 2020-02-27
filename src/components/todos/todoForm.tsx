import React, {FC, ChangeEvent} from "react"
import {Helmet} from "react-helmet"
import {Button, Typography, TextField} from "@material-ui/core"
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"

type TodoFormProps = {
  inputText: string
  inputHdl: (e: ChangeEvent<HTMLInputElement>) => void
  addTodoHdl: VoidFunction
}

export const TodoFormComp: FC<TodoFormProps> = ({inputText, inputHdl, addTodoHdl}) => (
  <>
    <Helmet>
      <title>Todo ｜React-Redux-Saga-TS-Prac</title>
    </Helmet>
    <Typography variant="h2">Todo</Typography>
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

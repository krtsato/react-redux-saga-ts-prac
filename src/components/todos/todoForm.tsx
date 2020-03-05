import React, {FC, ChangeEvent} from "react"
import {Helmet} from "react-helmet"
import {Box, Button, Typography, TextField} from "@material-ui/core"
import CreateRoundedIcon from "@material-ui/icons/CreateRounded"
import {useStyles} from "./todoForm.styles"

type TodoFormProps = {
  inputText: string
  inputHdl: (e: ChangeEvent<HTMLInputElement>) => void
  addTodoHdl: VoidFunction
}

export const TodoFormComp: FC<TodoFormProps> = ({inputText, inputHdl, addTodoHdl}) => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Todo ｜React-Redux-TS-Prac</title>
      </Helmet>
      <Typography variant="h2">Todo</Typography>
      <Box className={classes.parentBox}>
        <TextField
          className={classes.textField}
          id="todoFormInput"
          label="Todo"
          value={inputText}
          onChange={inputHdl}
          variant="filled"
          autoFocus
          multiline
        />
        <Button
          className={classes.addButton}
          variant="contained"
          startIcon={<CreateRoundedIcon />}
          onClick={addTodoHdl}>
          ADD
        </Button>
      </Box>
    </>
  )
}

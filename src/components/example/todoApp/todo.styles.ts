import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
  completedText: wasCompleted => ({
    textDecoration: wasCompleted ? "line-through" : "none"
  })
})

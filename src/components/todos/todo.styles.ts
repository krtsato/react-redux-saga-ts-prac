import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      marginBottom: theme.spacing(1)
    },
    completedText: wasCompleted => ({
      textDecoration: wasCompleted ? "line-through" : "none"
    })
  })
)

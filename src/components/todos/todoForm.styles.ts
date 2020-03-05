import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parentBox: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(2)
    },
    textField: {
      marginRight: theme.spacing(2)
    },
    addButton: {
      marginTop: theme.spacing(2)
    }
  })
)

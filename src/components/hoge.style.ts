import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 350
    },
    button: {
      margin: theme.spacing(1)
    }
  })
)
